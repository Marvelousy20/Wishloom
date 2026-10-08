"use client"

import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Field, TextInput } from "@/components/ui/controls"
import { Note } from "@/components/ui/note"
import { dashboardPath, signInPath, signUpPath } from "@/lib/navigation"
import { validateEmail, validatePassword } from "@/lib/validation"

export function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [pending, setPending] = useState(false)
  const [unavailable, setUnavailable] = useState(false)

  const signUp = mode === "sign-up"

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: Record<string, string> = {}
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)
    if (emailError) next.email = emailError
    if (passwordError) next.password = passwordError
    if (signUp && confirm !== password) {
      next.confirm = "Those passwords do not match."
    }
    setErrors(next)
    setUnavailable(false)
    if (Object.keys(next).length > 0) return

    setPending(true)
    await new Promise((resolve) => window.setTimeout(resolve, 500))
    setPassword("")
    setConfirm("")
    setPending(false)
    setUnavailable(true)
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <Field label="Email" htmlFor="email" error={errors.email}>
        <TextInput
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
      </Field>
      <Field
        label="Password"
        htmlFor="password"
        hint="At least 8 characters. It stays in this browser and is not sent anywhere."
        error={errors.password}
      >
        <div className="relative">
          <TextInput
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete={signUp ? "new-password" : "current-password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="pr-12"
            aria-invalid={errors.password ? true : undefined}
            aria-describedby={errors.password ? "password-error" : "password-hint"}
            required
          />
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted"
            onClick={() => setShowPassword((value) => !value)}
            aria-pressed={showPassword}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Eye className="h-4 w-4" aria-hidden="true" />
            )}
            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
          </button>
        </div>
      </Field>
      {signUp ? (
        <Field label="Confirm password" htmlFor="confirm" error={errors.confirm}>
          <TextInput
            id="confirm"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
            aria-invalid={errors.confirm ? true : undefined}
            aria-describedby={errors.confirm ? "confirm-error" : undefined}
            required
          />
        </Field>
      ) : null}

      {unavailable ? (
        <Note>
          {signUp ? "An account was not created." : "You were not signed in."} No
          authentication provider is connected, so this form cannot start a
          session. Your password was cleared and was not sent to a server.
        </Note>
      ) : null}

      <Button type="submit" disabled={pending}>
        {pending ? "Checking…" : signUp ? "Create account" : "Sign in"}
      </Button>

      <p className="text-sm leading-6 text-muted" role="status">
        {signUp ? (
          <>
            Already have an account?{" "}
            <Link href={signInPath} className="font-semibold text-violet">
              Sign in
            </Link>
          </>
        ) : (
          <>
            New here?{" "}
            <Link href={signUpPath} className="font-semibold text-violet">
              Create an account
            </Link>
          </>
        )}
      </p>
      <p className="text-sm leading-6 text-muted">
        You can{" "}
        <Link href={dashboardPath} className="font-semibold text-violet">
          preview the empty dashboard
        </Link>{" "}
        without a session. It stays empty until an account service exists.
      </p>
    </form>
  )
}
