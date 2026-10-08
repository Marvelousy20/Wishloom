import Link from "next/link"
import { Wordmark } from "@/components/brand/wordmark"
import { Container } from "@/components/layout/container"
import { brand } from "@/lib/brand"
import { footerExplore, footerTrust } from "@/lib/navigation"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label={`${brand.name} home`}>
            <Wordmark />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            People post wishes. Other people make them come true. A place for
            dignified, joyful giving — without the begging.
          </p>
        </div>
        <nav aria-label="Explore">
          <p className="text-sm font-semibold text-ink">Explore</p>
          <ul className="mt-4 space-y-2">
            {footerExplore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Trust">
          <p className="text-sm font-semibold text-ink">Trust</p>
          <ul className="mt-4 space-y-2">
            {footerTrust.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="border-t border-line py-6">
        <p className="text-sm text-muted">
          Made for the moments when people show up for people.
        </p>
      </Container>
    </footer>
  )
}
