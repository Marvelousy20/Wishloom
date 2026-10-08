"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"
import { GiftBox, Spark } from "@/components/decor/shapes"
import { Button } from "@/components/ui/button"
import { Note } from "@/components/ui/note"
import { TextInput } from "@/components/ui/controls"
import { brand } from "@/lib/brand"
import { priceLabel } from "@/lib/wishes"
import type { Wish } from "@/lib/types"

type Step = "plan" | "confirm" | "done"
type Path = "retailer" | "coordinate"
type Anonymity = "anonymous" | "named"

export function FulfilFlow({ wish }: { wish: Wish }) {
  const reduce = useReducedMotion()
  const [step, setStep] = useState<Step>("plan")
  const [path, setPath] = useState<Path>(wish.itemUrl ? "retailer" : "coordinate")
  const [anonymity, setAnonymity] = useState<Anonymity>("anonymous")
  const [giverName, setGiverName] = useState("")
  const [ack, setAck] = useState(false)
  const [nameError, setNameError] = useState<string | null>(null)

  function goToConfirm() {
    if (anonymity === "named" && giverName.trim().length < 2) {
      setNameError("Add a display name, or choose to give anonymously.")
      return
    }
    setNameError(null)
    setStep("confirm")
  }

  const pathLabel =
    path === "retailer"
      ? "Look at an example retailer and buy it yourself"
      : "Coordinate a purchase later"

  return (
    <div className="rounded-[2rem] border border-line bg-white p-5 sm:p-8">
      <AnimatePresence mode="wait">
        {step === "plan" ? (
          <motion.div
            key="plan"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            <fieldset className="space-y-3">
              <legend className="font-display text-xl font-extrabold tracking-tight">
                How would you help?
              </legend>
              {wish.itemUrl ? (
                <label className="flex cursor-pointer gap-3 rounded-2xl border border-line p-4">
                  <input
                    type="radio"
                    name="path"
                    checked={path === "retailer"}
                    onChange={() => setPath("retailer")}
                  />
                  <span>
                    <span className="block font-semibold">Buy it from a retailer</span>
                    <span className="mt-1 block text-sm leading-6 text-muted">
                      Open an example listing, then purchase it yourself. {brand.name}{" "}
                      never sees your card.
                    </span>
                    <a
                      href={wish.itemUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex text-sm font-semibold text-violet"
                    >
                      {wish.itemLabel ?? "Example listing"} (opens in a new tab)
                    </a>
                  </span>
                </label>
              ) : null}
              <label className="flex cursor-pointer gap-3 rounded-2xl border border-line p-4">
                <input
                  type="radio"
                  name="path"
                  checked={path === "coordinate"}
                  onChange={() => setPath("coordinate")}
                />
                <span>
                  <span className="block font-semibold">Coordinate a purchase</span>
                  <span className="mt-1 block text-sm leading-6 text-muted">
                    A future version could match a giver with a retailer without
                    exposing a home address. That service is not available yet.
                    You can still walk through the demo.
                  </span>
                </span>
              </label>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="font-display text-xl font-extrabold tracking-tight">
                How should your help appear?
              </legend>
              <label className="flex cursor-pointer gap-3 rounded-2xl border border-line p-4">
                <input
                  type="radio"
                  name="anonymity"
                  checked={anonymity === "anonymous"}
                  onChange={() => setAnonymity("anonymous")}
                />
                <span className="font-semibold">Give anonymously</span>
              </label>
              <label className="flex cursor-pointer gap-3 rounded-2xl border border-line p-4">
                <input
                  type="radio"
                  name="anonymity"
                  checked={anonymity === "named"}
                  onChange={() => setAnonymity("named")}
                />
                <span className="font-semibold">Show a display name</span>
              </label>
              {anonymity === "named" ? (
                <div>
                  <label htmlFor="giver-name" className="text-sm font-semibold">
                    Display name
                  </label>
                  <TextInput
                    id="giver-name"
                    className="mt-2"
                    value={giverName}
                    onChange={(event) => setGiverName(event.target.value)}
                    aria-invalid={nameError ? true : undefined}
                    aria-describedby={nameError ? "giver-name-error" : undefined}
                  />
                  {nameError ? (
                    <p id="giver-name-error" className="mt-2 text-sm font-medium text-coral-deep" role="alert">
                      {nameError}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </fieldset>

            <Note>
              No platform fee is charged here, and no payment is collected.
              Shipping, customs, and delivery belong to whoever places the order
              with a retailer. A home address is never shown on a wish.
            </Note>
            <Button onClick={goToConfirm}>Review this demo</Button>
          </motion.div>
        ) : null}

        {step === "confirm" ? (
          <motion.div
            key="confirm"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              Confirm the demo
            </h2>
            <dl className="space-y-3 text-sm leading-6">
              <div>
                <dt className="font-semibold">Wish</dt>
                <dd className="text-muted">{wish.title}</dd>
              </div>
              <div>
                <dt className="font-semibold">Estimated cost</dt>
                <dd className="text-muted">{priceLabel(wish)}</dd>
              </div>
              <div>
                <dt className="font-semibold">Path</dt>
                <dd className="text-muted">{pathLabel}</dd>
              </div>
              <div>
                <dt className="font-semibold">Visibility</dt>
                <dd className="text-muted">
                  {anonymity === "anonymous"
                    ? "Anonymous"
                    : `Display name: ${giverName.trim()}`}
                </dd>
              </div>
            </dl>
            <label className="flex items-start gap-3 text-sm leading-6">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-violet"
                checked={ack}
                onChange={(event) => setAck(event.target.checked)}
              />
              <span>I understand this is a demo and no purchase will be made.</span>
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="secondary" onClick={() => setStep("plan")}>
                Back
              </Button>
              <Button disabled={!ack} onClick={() => setStep("done")}>
                Finish demo
              </Button>
            </div>
          </motion.div>
        ) : null}

        {step === "done" ? (
          <motion.div
            key="done"
            className="py-4 text-center"
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="mx-auto w-fit"
              initial={reduce ? false : { y: 12, rotate: -6 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 14 }}
            >
              <GiftBox />
            </motion.div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
              Demo complete
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
              No purchase was made, and no payment details were collected. This
              wish is still an example. A real fulfilment would need a retailer
              checkout and a connected account, which are not part of this preview.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={`/wishes/${wish.id}`} variant="secondary">
                Back to the wish
              </Button>
              <Button href="/wishes">Discover more wishes</Button>
            </div>
            <Spark className="mx-auto mt-6 h-5 w-5 text-coral" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
