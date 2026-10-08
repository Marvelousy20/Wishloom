"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Field, TextArea, TextInput } from "@/components/ui/controls"
import { Note } from "@/components/ui/note"
import { validateContact, wishLimits } from "@/lib/validation"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [unsent, setUnsent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next = validateContact({ name, email, message })
    setErrors(next)
    setUnsent(Object.keys(next).length === 0)
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <Field label="Name" htmlFor="contact-name" error={errors.name}>
        <TextInput
          id="contact-name"
          value={name}
          autoComplete="name"
          onChange={(event) => setName(event.target.value)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          required
        />
      </Field>
      <Field label="Email" htmlFor="contact-email" error={errors.email}>
        <TextInput
          id="contact-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          required
        />
      </Field>
      <Field
        label="Message"
        htmlFor="contact-message"
        error={errors.message}
        hint="Questions about the idea, a wish, or this preview are all welcome."
      >
        <TextArea
          id="contact-message"
          value={message}
          maxLength={wishLimits.contactMessage}
          onChange={(event) => setMessage(event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={
            errors.message ? "contact-message-error" : "contact-message-hint"
          }
          required
        />
      </Field>
      {unsent ? (
        <Note>
          This message was not sent. There is no inbox connected yet, so nothing
          left your browser.
        </Note>
      ) : null}
      <Button type="submit">Send message</Button>
    </form>
  )
}
