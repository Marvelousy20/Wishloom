import type { Metadata } from "next"
import { AuthForm } from "@/components/forms/auth-form"
import { GiftBox } from "@/components/decor/shapes"
import { Container } from "@/components/layout/container"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: "Create an account",
  description: `Create a ${brand.name} account. Authentication is not connected yet.`,
}

export default function SignUpPage() {
  return (
    <Container className="max-w-md py-16">
      <GiftBox className="h-16 w-16" />
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight">
        Join in
      </h1>
      <p className="mt-3 text-base leading-7 text-muted">
        An account would let you post a wish and see the ones you have helped.
        This screen is ready for a real sign-up provider. It cannot create an
        account on its own.
      </p>
      <div className="mt-8">
        <AuthForm mode="sign-up" />
      </div>
    </Container>
  )
}
