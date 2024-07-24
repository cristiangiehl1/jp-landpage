import * as React from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  date: string
  phone: string
  description: string | null
}

export function EmailTemplate({
  name,
  email,
  phone,
  date,
  description,
}: EmailTemplateProps) {
  return (
    <div>
      <h2>Dr. João Pedro, um novo paciente acaba de entrar em contato!</h2>
      <p>Aqui estão os dados dele:</p>
      <p>
        <span>Nome:</span>
        <strong>{name}</strong>
      </p>

      <p>
        <span>E-mail:</span>
        <strong>{email}</strong>
      </p>

      <p>
        <span>Celular:</span>
        <strong>{phone}</strong>
      </p>

      <p>
        <span>Melhor dia e horário para entrar em contato:</span>
        <strong>{date}</strong>
      </p>

      {description && (
        <p>
          <span>Descrição:</span>
          <strong>{description}</strong>
        </p>
      )}
    </div>
  )
}
