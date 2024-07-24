import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import ContactEmailTemplate from '@/emails/contact-email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, phone, date, description } = await req.json()

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'joao.pedrogiehl@gmail.com',
      subject: 'Novo paciente',
      react: ContactEmailTemplate({ name, phone, date, description }),
    })

    return NextResponse.json({
      success: true,
      message: 'E-mail enviado com sucesso.',
      errors: null,
    })
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: 'Um erro inesperado ocorreu, tente novamente mais tarde.',
      errors: err,
    })
  }
}
