"use client"

import { Menu, X } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useId, useState } from "react"
import { Wordmark } from "@/components/brand/wordmark"
import { brand } from "@/lib/brand"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/cn"
import {
  discoverPath,
  makeWishPath,
  primaryNav,
  signInPath,
} from "@/lib/navigation"

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false
  if (href === discoverPath) return pathname.startsWith(discoverPath)
  return pathname === href
}

export function SiteHeader() {
  const pathname = usePathname()
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [menuPath, setMenuPath] = useState<string | null>(null)
  const open = menuPath === pathname
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuPath(null)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-cream/90 backdrop-blur-md"
          : "border-transparent bg-cream/80",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="rounded-xl" aria-label={`${brand.name} home`}>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative text-sm font-semibold",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId={reduce ? undefined : "nav-underline"}
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-violet"
                  />
                ) : null}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={signInPath} variant="ghost" size="md">
            Sign In
          </Button>
          <Button href={makeWishPath} variant="secondary" size="md">
            Make a Wish
          </Button>
          <Button href={discoverPath} size="md">
            Give a Gift
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setMenuPath(open ? null : pathname)}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            className="border-t border-line bg-cream lg:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Container className="flex flex-col gap-2 py-4">
              <nav aria-label="Mobile" className="flex flex-col">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-2 py-3 text-lg font-semibold"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href={signInPath} className="rounded-2xl px-2 py-3 text-lg font-semibold">
                  Sign In
                </Link>
              </nav>
              <Button href={makeWishPath} variant="secondary">
                Make a Wish
              </Button>
              <Button href={discoverPath}>Give a Gift</Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
