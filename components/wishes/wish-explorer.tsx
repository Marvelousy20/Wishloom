"use client"

import { Search, SlidersHorizontal } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, controlClass } from "@/components/ui/controls"
import { Dialog } from "@/components/ui/dialog"
import { Spark } from "@/components/decor/shapes"
import { WishCard } from "@/components/wishes/wish-card"
import { cn } from "@/lib/cn"
import { budgetOptions, categories, sortOptions } from "@/lib/types"
import type { Wish, WishQuery } from "@/lib/types"
import { filterWishes, listWishCountries } from "@/lib/wishes"

const homeLimit = 6
const pageStep = 6

function readQuery(params: URLSearchParams): WishQuery {
  return {
    q: params.get("q") ?? "",
    category: params.get("category") ?? "All",
    country: params.get("country") ?? "All",
    budget: params.get("budget") ?? "any",
    sort: params.get("sort") ?? "featured",
  }
}

export function WishExplorer({
  wishes,
  variant,
}: {
  wishes: Wish[]
  variant: "home" | "page"
}) {
  const reduce = useReducedMotion()
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const query = readQuery(searchParams)
  const [text, setText] = useState(query.q)
  const [syncedQuery, setSyncedQuery] = useState(query.q)
  const filterKey = `${query.q}|${query.category}|${query.country}|${query.budget}|${query.sort}`
  const [visible, setVisible] = useState(pageStep)
  const [visibleKey, setVisibleKey] = useState(filterKey)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const countries = useMemo(() => listWishCountries(), [])

  if (query.q !== syncedQuery) {
    setSyncedQuery(query.q)
    setText(query.q)
  }

  if (filterKey !== visibleKey) {
    setVisibleKey(filterKey)
    setVisible(pageStep)
  }

  useEffect(() => {
    if (text === query.q) return
    const timeout = window.setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      if (text) params.set("q", text)
      else params.delete("q")
      const value = params.toString()
      router.replace(value ? `${pathname}?${value}` : pathname, { scroll: false })
    }, 200)
    return () => window.clearTimeout(timeout)
  }, [text, query.q, pathname, router, searchParams])

  function update(patch: Partial<WishQuery>) {
    const next = { ...query, ...patch }
    const params = new URLSearchParams()
    if (next.q.trim()) params.set("q", next.q.trim())
    if (next.category !== "All") params.set("category", next.category)
    if (next.country !== "All") params.set("country", next.country)
    if (next.budget !== "any") params.set("budget", next.budget)
    if (variant === "page" && next.sort !== "featured") params.set("sort", next.sort)
    const value = params.toString()
    router.replace(value ? `${pathname}?${value}` : pathname, { scroll: false })
  }

  const filtered = filterWishes(wishes, {
    ...query,
    q: text,
    sort: variant === "page" ? query.sort : "featured",
  })
  const shown = filtered.slice(0, variant === "home" ? homeLimit : visible)
  const filtersActive =
    query.category !== "All" ||
    query.country !== "All" ||
    query.budget !== "any" ||
    (variant === "page" && query.sort !== "featured") ||
    text.trim().length > 0

  function clearFilters() {
    setText("")
    update({
      q: "",
      category: "All",
      country: "All",
      budget: "any",
      sort: "featured",
    })
  }

  const viewAllParams = new URLSearchParams()
  if (text.trim()) viewAllParams.set("q", text.trim())
  if (query.category !== "All") viewAllParams.set("category", query.category)
  if (query.country !== "All") viewAllParams.set("country", query.country)
  if (query.budget !== "any") viewAllParams.set("budget", query.budget)
  const viewAllHref = viewAllParams.toString()
    ? `/wishes?${viewAllParams.toString()}`
    : "/wishes"

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor={`${variant}-wish-search`} className="text-sm font-semibold">
            Search wishes
          </label>
          <div className="relative mt-2">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted"
              aria-hidden="true"
            />
            <input
              id={`${variant}-wish-search`}
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Try camera, books, Japan..."
              className={cn(controlClass, "h-12 pr-4 pl-11")}
              type="search"
            />
          </div>
        </div>

        <div
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          role="group"
          aria-label="Categories"
        >
          {["All", ...categories].map((category) => {
            const active = query.category === category
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => update({ category })}
                className={cn(
                  "shrink-0 rounded-2xl px-3.5 py-2 text-sm font-semibold",
                  active
                    ? "bg-ink text-white"
                    : "border border-line bg-white text-ink hover:border-violet/30",
                )}
              >
                {category}
              </button>
            )
          })}
        </div>

        <div className="flex flex-wrap items-end gap-3">
          <div className="hidden min-w-44 flex-1 sm:block">
            <label htmlFor={`${variant}-country`} className="text-sm font-semibold">
              Country
            </label>
            <div className="mt-2">
              <Select
                id={`${variant}-country`}
                value={query.country}
                onChange={(event) => update({ country: event.target.value })}
              >
                <option value="All">All countries</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <div className="hidden min-w-44 flex-1 sm:block">
            <label htmlFor={`${variant}-budget`} className="text-sm font-semibold">
              Estimated budget (USD)
            </label>
            <div className="mt-2">
              <Select
                id={`${variant}-budget`}
                value={query.budget}
                onChange={(event) => update({ budget: event.target.value })}
              >
                {budgetOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          {variant === "page" ? (
            <div className="hidden min-w-44 flex-1 sm:block">
              <label htmlFor={`${variant}-sort`} className="text-sm font-semibold">
                Sort
              </label>
              <div className="mt-2">
                <Select
                  id={`${variant}-sort`}
                  value={query.sort}
                  onChange={(event) => update({ sort: event.target.value })}
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          ) : null}
          <Button
            variant="secondary"
            size="md"
            className="sm:hidden"
            onClick={() => setFiltersOpen(true)}
            aria-expanded={filtersOpen}
          >
            <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            Filters
          </Button>
          {filtersActive ? (
            <button
              type="button"
              onClick={clearFilters}
              className="h-11 px-2 text-sm font-semibold text-violet"
            >
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing {shown.length} of {filtered.length} example{" "}
        {filtered.length === 1 ? "wish" : "wishes"}. These are illustrations, not
        requests from real people.
      </p>

      {shown.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-line bg-white px-6 py-14 text-center">
          <Spark className="mx-auto h-8 w-8 text-coral" />
          <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">
            No wishes match that search
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
            Try another word, category, or budget. The example set is small, so a
            narrower filter can empty the grid.
          </p>
          <div className="mt-6 flex justify-center">
            <Button variant="secondary" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((wish, index) => (
            <motion.div
              key={wish.id}
              className="h-full"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{
                duration: 0.45,
                delay: Math.min(index, 5) * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <WishCard wish={wish} />
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {variant === "page" && shown.length < filtered.length ? (
          <Button variant="secondary" onClick={() => setVisible((count) => count + pageStep)}>
            Load more
          </Button>
        ) : null}
        {variant === "home" ? (
          <Button href={viewAllHref} variant="secondary">
            View all wishes
          </Button>
        ) : null}
      </div>

      <Dialog
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        title="Filter wishes"
        description="Country and budget apply to the example wishes on this page."
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="drawer-country" className="text-sm font-semibold">
              Country
            </label>
            <div className="mt-2">
              <Select
                id="drawer-country"
                value={query.country}
                onChange={(event) => update({ country: event.target.value })}
              >
                <option value="All">All countries</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <div>
            <label htmlFor="drawer-budget" className="text-sm font-semibold">
              Estimated budget (USD)
            </label>
            <div className="mt-2">
              <Select
                id="drawer-budget"
                value={query.budget}
                onChange={(event) => update({ budget: event.target.value })}
              >
                {budgetOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          {variant === "page" ? (
            <div>
              <label htmlFor="drawer-sort" className="text-sm font-semibold">
                Sort
              </label>
              <div className="mt-2">
                <Select
                  id="drawer-sort"
                  value={query.sort}
                  onChange={(event) => update({ sort: event.target.value })}
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          ) : null}
          <Button onClick={() => setFiltersOpen(false)}>Show wishes</Button>
        </div>
      </Dialog>
    </div>
  )
}
