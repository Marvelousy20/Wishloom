"use client"

import { motion, useReducedMotion } from "motion/react"
import Image from "next/image"
import { Container } from "@/components/layout/container"
import { GiftBox, Spark } from "@/components/decor/shapes"
import { Button } from "@/components/ui/button"
import { discoverPath } from "@/lib/navigation"
import { getWish, priceLabel } from "@/lib/wishes"

export function GivingSection() {
  const reduce = useReducedMotion()
  const wish = getWish("evening-bicycle")

  return (
    <section className="pb-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-sunshine px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -top-12 -right-10 h-40 w-40 rounded-full bg-coral" aria-hidden="true" />
          <div className="absolute -bottom-10 left-8 h-24 w-24 rounded-full bg-mint" aria-hidden="true" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Spark className="h-6 w-6 text-coral" />
              <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl">
                You don&apos;t have to change the world. Just someone&apos;s world.
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-8 text-ink/80">
                One thoughtful gift can make a real difference in someone&apos;s day.
                Find a wish that speaks to you and help make it happen.
              </p>
              <div className="mt-8">
                <Button href={discoverPath}>Find a Wish to Fulfil</Button>
              </div>
            </div>
            {wish ? (
              <div className="relative">
                <motion.div
                  className="absolute -top-6 -left-2 z-10"
                  animate={reduce ? undefined : { rotate: [-6, -2, -6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <GiftBox className="h-16 w-16" />
                </motion.div>
                <article className="ml-auto max-w-sm rotate-1 rounded-3xl border border-line bg-white p-3 shadow-[0_20px_50px_-28px_rgba(23,21,43,0.45)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={wish.image}
                      alt={wish.imageAlt}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 px-1 font-display text-lg font-extrabold tracking-tight">
                    {wish.title}
                  </p>
                  <p className="mt-1 px-1 pb-2 text-sm text-muted">
                    {wish.displayName} · {wish.country} · {priceLabel(wish)} · Fulfilled
                  </p>
                </article>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
