"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Spark } from "@/components/decor/shapes"
import { Button } from "@/components/ui/button"
import { discoverPath, makeWishPath } from "@/lib/navigation"
import type { Wish } from "@/lib/types"

const ease = [0.22, 1, 0.36, 1] as const

function Float({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 5.5, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}

function HeroCard({
  wish,
  className,
}: {
  wish: Wish
  className?: string
}) {
  return (
    <Link
      href={`/wishes/${wish.id}`}
      className={`block rounded-3xl border border-line bg-white p-3 shadow-[0_22px_50px_-28px_rgba(23,21,43,0.55)] transition-transform duration-300 hover:-translate-y-1 ${className ?? ""}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={wish.image}
          alt={wish.imageAlt}
          fill
          priority
          sizes="280px"
          className="object-cover"
        />
      </div>
      <p className="mt-3 font-display text-[15px] leading-5 font-extrabold tracking-tight">
        {wish.title}
      </p>
      <p className="mt-1 text-xs text-muted">
        {wish.displayName} · {wish.country}
      </p>
    </Link>
  )
}

export function Hero({ wishes }: { wishes: Wish[] }) {
  const reduce = useReducedMotion()
  const [first, second, third] = wishes
  const item = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease },
    },
  }

  return (
    <section className="relative overflow-x-clip">
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-80 w-80 rounded-full bg-violet/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
          }}
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-muted"
          >
            <Spark className="h-3.5 w-3.5 text-coral" />
            A LITTLE KINDNESS GOES A LONG WAY
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-4 max-w-xl font-display text-[2.35rem] leading-[1.02] font-extrabold tracking-[-0.04em] text-ink sm:text-6xl lg:text-[4.15rem]"
          >
            Someone out there could{" "}
            <span className="text-violet">make your wish come true.</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg leading-8 text-muted"
          >
            A place where wishes meet kind strangers. Share something you have
            been hoping for, discover someone else&apos;s wish, or be the reason
            someone&apos;s day changes.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={makeWishPath}>Make a Wish</Button>
            <Button href={discoverPath} variant="secondary">
              Discover Wishes
            </Button>
          </motion.div>
          <motion.p variants={item} className="mt-4 text-sm text-muted">
            No begging. No pressure. Just people making good things happen.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none lg:min-h-[560px]">
          <div
            className="absolute top-8 right-6 -z-10 hidden h-24 w-24 rotate-12 rounded-3xl bg-sunshine lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-16 left-0 -z-10 hidden h-16 w-16 rounded-full bg-coral lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute top-6 right-24 -z-10 hidden h-28 w-28 rounded-full border-[10px] border-mint lg:block"
            aria-hidden="true"
          />
          <Float className="absolute top-2 right-2 z-10 hidden text-sunshine lg:block">
            <Spark className="h-8 w-8" />
          </Float>
          <Float delay={0.6} className="absolute bottom-24 right-6 z-10 hidden text-coral lg:block">
            <Spark className="h-5 w-5" />
          </Float>

          <div className="grid gap-4 sm:grid-cols-2 lg:block">
            {second ? (
              <HeroCard
                wish={second}
                className="lg:absolute lg:top-6 lg:left-0 lg:w-[250px] lg:-rotate-6"
              />
            ) : null}
            {first ? (
              <HeroCard
                wish={first}
                className="sm:translate-y-6 lg:absolute lg:top-28 lg:right-0 lg:w-[280px] lg:translate-y-0 lg:rotate-2"
              />
            ) : null}
            {third ? (
              <HeroCard
                wish={third}
                className="sm:col-span-2 lg:absolute lg:bottom-2 lg:left-10 lg:w-[240px] lg:-rotate-2"
              />
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
