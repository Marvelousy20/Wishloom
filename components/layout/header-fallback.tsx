import Link from "next/link"
import { Wordmark } from "@/components/brand/wordmark"
import { Container } from "@/components/layout/container"
import { brand } from "@/lib/brand"
import { discoverPath, makeWishPath, primaryNav, signInPath } from "@/lib/navigation"

export function HeaderFallback() {
  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-cream/80">
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" aria-label={`${brand.name} home`}>
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-muted">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 text-sm font-semibold lg:flex">
          <Link href={signInPath}>Sign In</Link>
          <Link href={makeWishPath}>Make a Wish</Link>
          <Link href={discoverPath}>Give a Gift</Link>
        </div>
      </Container>
    </header>
  )
}
