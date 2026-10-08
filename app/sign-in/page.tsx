import type { Metadata } from "next"
import { AuthForm } from "@/components/forms/auth-form"
import { Container } from "@/components/layout/container"
import { GiftBox } from "@/components/decor/shapes"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: "Sign in",
  description: `Sign in to ${brand.name}. Authentication is not connected yet.`,
}

export default function SignInPage() {
  return (
    <Container className="max-w-md py-16">
      <GiftBox className="h-16 w-16" />
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight">
        Welcome back
      </h1>
      <p className="mt-3 text-base leading-7 text-muted">
        Sign in to see your wishes. When an authentication provider is connected,
        a successful sign-in would open your dashboard.
      </p>
      <div className="mt-8">
        <AuthForm mode="sign-in" />
      </div>
    </Container>
  )
}
