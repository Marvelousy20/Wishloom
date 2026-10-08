"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TextInput } from "@/components/ui/controls"
import { Note } from "@/components/ui/note"

function Toggle({
  pressed,
  onToggle,
  label,
}: {
  pressed: boolean
  onToggle: () => void
  label: string
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 rounded-2xl border border-line bg-cream px-4 py-3 text-left"
    >
      <span className="text-sm font-semibold">{label}</span>
      <span
        className={`inline-flex h-7 w-12 items-center rounded-full p-1 ${pressed ? "bg-violet" : "bg-line"}`}
      >
        <span
          className={`h-5 w-5 rounded-full bg-white transition-transform ${pressed ? "translate-x-5" : ""}`}
        />
        <span className="sr-only">{pressed ? "On" : "Off"}</span>
      </span>
    </button>
  )
}

export function SettingsPanel() {
  const [name, setName] = useState("")
  const [showCountry, setShowCountry] = useState(true)
  const [anonymousGifts, setAnonymousGifts] = useState(true)
  const [saved, setSaved] = useState(false)

  return (
    <section className="rounded-[2rem] border border-line bg-white p-6">
      <h2 className="font-display text-2xl font-extrabold tracking-tight">
        Account and privacy
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        These controls show the settings a signed-in person would have. They stay
        on this page only.
      </p>
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="settings-name" className="text-sm font-semibold">
            Display name
          </label>
          <TextInput
            id="settings-name"
            className="mt-2"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
              setSaved(false)
            }}
            placeholder="Your first name"
          />
        </div>
        <div>
          <label htmlFor="settings-email" className="text-sm font-semibold">
            Email
          </label>
          <TextInput
            id="settings-email"
            className="mt-2"
            value=""
            placeholder="Available once an account exists"
            disabled
          />
        </div>
        <Toggle
          label="Show my country on wishes"
          pressed={showCountry}
          onToggle={() => {
            setShowCountry((value) => !value)
            setSaved(false)
          }}
        />
        <Toggle
          label="Prefer to give anonymously"
          pressed={anonymousGifts}
          onToggle={() => {
            setAnonymousGifts((value) => !value)
            setSaved(false)
          }}
        />
        <Button
          variant="secondary"
          onClick={() => setSaved(true)}
        >
          Keep these on this page
        </Button>
        {saved ? (
          <Note tone="mint">
            Kept for this visit only. Nothing was stored in an account, because
            there is no account service yet.
          </Note>
        ) : null}
      </div>
    </section>
  )
}
