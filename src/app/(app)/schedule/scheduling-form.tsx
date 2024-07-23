'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const scheduleFormSchema = z.object({
  name: z.string().min(1, { message: 'Informe seu nome.' }),
  email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: 'Informe seu e-mail.',
  }),
  phone: z.string().regex(/^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/, {
    message: 'Número inválido: (XX) 9XXXX-XXXX ou XX9XXXXXXX.',
  }),
  date: z
    .string()
    .min(1, { message: 'Informe o melhor dia e horário para contato.' }),
  description: z.string().nullable(),
})

type ScheduleFormSchema = z.infer<typeof scheduleFormSchema>

export function SchedulingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ScheduleFormSchema>({
    resolver: zodResolver(scheduleFormSchema),
  })

  function handleSchedule(data: ScheduleFormSchema) {
    try {
      console.log(data)
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log(err.issues)
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSchedule)}
      className="place-center relative mx-6 grid min-w-[80vw] gap-4 rounded-md bg-custom-form px-10 py-6 shadow-lg md:gap-6"
    >
      <Link
        href={`/`}
        className="absolute right-4 top-4 flex items-center text-xs font-bold text-custom-blue-900 transition-colors duration-300 hover:text-custom-gray-500 md:text-sm"
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
            htmlFor="email"
          >
            Seu e-mail
          </Label>

          <Input
            id="email"
            type="email"
            className="text-custom-blue-900"
            {...register('email')}
          />

          <p className="bd:text-sm mt-1 text-xs font-semibold text-red-700">
            {errors.email?.message}
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
          className="min-h-[150px] w-full text-custom-blue-900"
          {...register('description')}
        />
      </div>

      <Button className="max-w-[250px] bg-custom-blue-900">Enviar</Button>
    </form>
  )
}
