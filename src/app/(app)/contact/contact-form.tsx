'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { AlertTriangle, ArrowLeft, Frown, Loader2, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const scheduleFormSchema = z.object({
  name: z.string().min(1, { message: 'Informe seu nome.' }),
  // email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
  //   message: 'Informe seu e-mail.',
  // }),
  phone: z.string().regex(/^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/, {
    message: 'Número inválido: (XX) 9XXXX-XXXX ou XX9XXXXXXX.',
  }),
  date: z
    .string()
    .min(1, { message: 'Informe o melhor dia e horário para contato.' }),
  description: z.string().nullable(),
})

type ScheduleFormSchema = z.infer<typeof scheduleFormSchema>

export function ContactForm() {
  const [emailSentResponse, setEmailSentResponse] = useState({
    success: false,
    message: null,
    errors: null,
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ScheduleFormSchema>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      name: '',
      // email: '',
      date: '',
      description: '',
      phone: '',
    },
  })

  async function handleSchedule(data: ScheduleFormSchema) {
    const response = await fetch('/api/email/send', {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        // email: data.email,
        phone: data.phone,
        date: data.date,
        description: data.description,
      }),
    })

    const result = await response.json()

    if (result.success === true) {
      setEmailSentResponse(result)
      reset()
    } else {
      setEmailSentResponse(result)
    }
  }

  function handleCloseAlert() {
    setEmailSentResponse({ success: false, message: null, errors: null })
  }

  return (
    <div>
      {emailSentResponse && emailSentResponse.success && (
        <div className="absolute left-1/2 top-1/2 flex w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-3xl bg-custom-content-bg p-6 font-bold text-custom-blue-900">
          <h1 className="text-xl">Sua mensagem foi enviada com sucesso!</h1>
          <p>Agradeço o seu contato, retornarei assim que possível.</p>
          <p>
            <span className="text-custom-orange-500">
              Em caso de emergências
            </span>{' '}
            entre em contato com CVV - Centro de Valorização da Vida.
          </p>
          <p>
            Atendimento pelo{' '}
            <span className="text-custom-orange-500">telefone 188</span> (24
            horas e sem custo de ligação).
          </p>
          <Link
            href={`/`}
            className="absolute right-4 top-4 flex items-center text-xs font-bold text-custom-blue-900 transition-colors duration-300 hover:text-custom-orange-500 md:text-sm"
          >
            <ArrowLeft />
            Voltar
          </Link>
        </div>
      )}
      {emailSentResponse &&
        !emailSentResponse.success &&
        emailSentResponse.message && (
          <Alert
            variant="destructive"
            className="fixed left-1/2 top-1/2 z-10 mx-auto max-w-[75vw] -translate-x-1/2 -translate-y-1/2 bg-red-200 font-bold"
          >
            <AlertTriangle />

            <AlertTitle className="font-bold">
              <button
                onClick={handleCloseAlert}
                className="absolute right-2 top-2 transition-colors duration-300 hover:text-custom-blue-900"
              >
                <X className="" size={15} />
              </button>
              Erro ao enviar o e-mail!
            </AlertTitle>
            <AlertDescription>
              <p className="flex items-center gap-1">
                {emailSentResponse.message} <Frown size={15} />
              </p>
              <p>
                Se preferir pode entrar em contato diretamente pelo whatsapp.
              </p>
            </AlertDescription>
          </Alert>
        )}
      {emailSentResponse && !emailSentResponse.success && (
        <form
          onSubmit={handleSubmit(handleSchedule)}
          className="place-center relative mx-6 grid min-w-[80vw] gap-4 rounded-md bg-custom-form px-10 py-6 shadow-lg md:gap-6"
        >
          <h1 className="mb-6 px-2 text-center text-xl font-bold text-custom-blue-900 md:text-2xl">
            Deixe aqui suas informações para agendarmos uma sessão
          </h1>
          <Link
            href={`/`}
            className="absolute right-4 top-24 flex items-center text-xs font-bold text-custom-blue-900 transition-colors duration-300 hover:text-custom-orange-500 md:text-sm"
          >
            <ArrowLeft />
            Voltar
          </Link>
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            <div className="h-[80px]">
              <Label
                className="font-semibold text-custom-blue-900 md:text-lg"
                htmlFor="name"
              >
                Seu nome
              </Label>
              <Input
                type="text"
                className="text-custom-blue-900"
                id="name"
                {...register('name')}
              />
              <p className="bd:text-sm mt-1 text-xs font-semibold text-red-700">
                {errors.name?.message}
              </p>
            </div>
            <div className="h-[80px]">
              <Label
                className="font-semibold text-custom-blue-900 md:text-lg"
                htmlFor="phone"
              >
                Seu whatsapp
              </Label>
              <Input
                id="phone"
                type="tel"
                className="text-custom-blue-900"
                {...register('phone')}
              />
              <p className="bd:text-sm mt-1 text-xs font-semibold text-red-700">
                {errors.phone?.message}
              </p>
            </div>
            <div className="h-[80px]">
              <Label
                className="font-semibold text-custom-blue-900 md:text-lg"
                htmlFor="date"
              >
                Melhor dia e hora para retornar
              </Label>
              <Input
                id="date"
                type="text"
                className="text-custom-blue-900"
                {...register('date')}
              />
              <p className="bd:text-sm mt-1 text-xs font-semibold text-red-700">
                {errors.date?.message}
              </p>
            </div>
          </div>
          <div className="">
            <Label
              className="font-semibold text-custom-blue-900 md:text-lg"
              htmlFor="description"
            >
              Observações
            </Label>
            <Textarea
              id="description"
              className="min-h-[150px] w-full resize-none text-custom-blue-900"
              {...register('description')}
            />
          </div>
          <Button
            disabled={isSubmitting}
            className="max-w-[250px] bg-custom-blue-900"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin repeat-infinite" />
            ) : (
              <span>Enviar</span>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
