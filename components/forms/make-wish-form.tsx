"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"
import { Spark } from "@/components/decor/shapes"
import { Button } from "@/components/ui/button"
import { Field, Select, TextArea, TextInput } from "@/components/ui/controls"
import { Note } from "@/components/ui/note"
import { brand } from "@/lib/brand"
import { formatMoney } from "@/lib/format"
import { categories, countries, currencies } from "@/lib/types"
import {
  emptyWishDraft,
  validateImageFile,
  validateWishDraft,
  wishLimits,
  type WishDraft,
} from "@/lib/validation"

type Step = "write" | "preview" | "done"

function describedBy(id: string, error?: string, hint = true) {
  return [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(" ")
}

export function MakeWishForm() {
  const reduce = useReducedMotion()
  const [step, setStep] = useState<Step>("write")
  const [draft, setDraft] = useState<WishDraft>(emptyWishDraft)
  const [errors, setErrors] = useState<ReturnType<typeof validateWishDraft>>({})
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [imageError, setImageError] = useState<string | null>(null)

  function update<K extends keyof WishDraft>(key: K, value: WishDraft[K]) {
    setDraft((current) => ({ ...current, [key]: value }))
  }

  function onImage(file: File | undefined) {
    if (!file) return
    const message = validateImageFile(file)
    if (message) {
      setImageError(message)
      return
    }
    setImageError(null)
    if (imageUrl) URL.revokeObjectURL(imageUrl)
    setImageUrl(URL.createObjectURL(file))
  }

  function continueToPreview() {
    const nextErrors = validateWishDraft(draft)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setStep("preview")
  }

  function reset() {
    if (imageUrl) URL.revokeObjectURL(imageUrl)
    setImageUrl(null)
    setImageError(null)
    setDraft(emptyWishDraft())
    setErrors({})
    setStep("write")
  }

  const price = Number(draft.price)
  const priceText =
    draft.price.trim() && Number.isFinite(price)
      ? `About ${formatMoney(price, draft.currency)}`
      : "Price not added"

  return (
    <div className="rounded-[2rem] border border-line bg-white p-5 sm:p-8">
      <ol className="mb-8 flex gap-3 text-sm font-semibold" aria-label="Progress">
        {[
          ["write", "Write"],
          ["preview", "Preview"],
          ["done", "Done"],
        ].map(([id, label], index) => (
          <li
            key={id}
            className={step === id ? "text-violet" : "text-muted"}
            aria-current={step === id ? "step" : undefined}
          >
            {index + 1}. {label}
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait">
        {step === "write" ? (
          <motion.form
            key="write"
            className="space-y-5"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            onSubmit={(event) => {
              event.preventDefault()
              continueToPreview()
            }}
            noValidate
          >
            <Field
              label="Wish title"
              htmlFor="wish-title"
              hint="Name the thing itself. A short, specific title is enough."
              error={errors.title}
            >
              <TextInput
                id="wish-title"
                value={draft.title}
                maxLength={wishLimits.title}
                onChange={(event) => update("title", event.target.value)}
                placeholder="A camera to start my photography journey"
                aria-invalid={errors.title ? true : undefined}
                aria-describedby={describedBy("wish-title", errors.title)}
                required
              />
            </Field>
            <p className="text-right text-xs text-muted">
              {draft.title.length}/{wishLimits.title}
            </p>

            <Field
              label="What would you like?"
              htmlFor="wish-description"
              hint="Say what it is and why it matters to you. You do not need a hardship story."
              error={errors.description}
            >
              <TextArea
                id="wish-description"
                value={draft.description}
                maxLength={wishLimits.description}
                onChange={(event) => update("description", event.target.value)}
                placeholder="I would love a beginner camera so I can practice photographing the market near home."
                aria-invalid={errors.description ? true : undefined}
                aria-describedby={describedBy("wish-description", errors.description)}
                required
              />
            </Field>
            <p className="text-right text-xs text-muted">
              {draft.description.length}/{wishLimits.description}
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Category" htmlFor="wish-category" error={errors.category}>
                <Select
                  id="wish-category"
                  value={draft.category}
                  onChange={(event) => update("category", event.target.value)}
                  aria-invalid={errors.category ? true : undefined}
                  aria-describedby={errors.category ? "wish-category-error" : undefined}
                  required
                >
                  <option value="">Choose one</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field
                label="Country"
                htmlFor="wish-country"
                hint="Used for context. You can hide it on the public card."
                error={errors.country}
              >
                <Select
                  id="wish-country"
                  value={draft.country}
                  onChange={(event) => update("country", event.target.value)}
                  aria-invalid={errors.country ? true : undefined}
                  aria-describedby={describedBy("wish-country", errors.country)}
                  required
                >
                  <option value="">Choose one</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            <Field
              label="Link to a specific item"
              htmlFor="wish-link"
              hint="Optional. A product page helps a giver know what to look for."
              error={errors.itemUrl}
            >
              <TextInput
                id="wish-link"
                type="url"
                inputMode="url"
                value={draft.itemUrl}
                onChange={(event) => update("itemUrl", event.target.value)}
                placeholder="https://"
                aria-invalid={errors.itemUrl ? true : undefined}
                aria-describedby={describedBy("wish-link", errors.itemUrl)}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Estimated price"
                htmlFor="wish-price"
                hint="Optional. A rough number is enough."
                error={errors.price}
              >
                <TextInput
                  id="wish-price"
                  inputMode="decimal"
                  value={draft.price}
                  onChange={(event) => update("price", event.target.value)}
                  placeholder="120"
                  aria-invalid={errors.price ? true : undefined}
                  aria-describedby={describedBy("wish-price", errors.price)}
                />
              </Field>
              <Field label="Currency" htmlFor="wish-currency" error={errors.currency}>
                <Select
                  id="wish-currency"
                  value={draft.currency}
                  onChange={(event) => update("currency", event.target.value)}
                  aria-invalid={errors.currency ? true : undefined}
                  aria-describedby={errors.currency ? "wish-currency-error" : undefined}
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Select>
              </Field>
            </div>

            <Field
              label="Display name"
              htmlFor="wish-name"
              hint="A first name or nickname. This is the name people will see."
              error={errors.displayName}
            >
              <TextInput
                id="wish-name"
                value={draft.displayName}
                maxLength={wishLimits.name}
                autoComplete="nickname"
                onChange={(event) => update("displayName", event.target.value)}
                placeholder="Amara"
                aria-invalid={errors.displayName ? true : undefined}
                aria-describedby={describedBy("wish-name", errors.displayName)}
                required
              />
            </Field>

            <Field
              label="Photo"
              htmlFor="wish-image"
              hint="Optional. JPG, PNG, or WebP, up to 5 MB. The preview stays in your browser."
              error={imageError ?? undefined}
            >
              <TextInput
                id="wish-image"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(event) => onImage(event.target.files?.[0])}
                aria-invalid={imageError ? true : undefined}
                aria-describedby={describedBy("wish-image", imageError ?? undefined)}
              />
            </Field>
            {imageUrl ? (
              // Blob previews are local to this browser and are not supported by next/image.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt="Preview of the photo you selected"
                className="h-48 w-full rounded-2xl object-cover"
              />
            ) : null}

            <label className="flex items-start gap-3 text-sm leading-6">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-violet"
                checked={draft.showCountry}
                onChange={(event) => update("showCountry", event.target.checked)}
              />
              <span>Show my country on the public wish.</span>
            </label>

            <label className="flex items-start gap-3 text-sm leading-6">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-violet"
                checked={draft.privacyAck}
                onChange={(event) => update("privacyAck", event.target.checked)}
                aria-invalid={errors.privacyAck ? true : undefined}
                aria-describedby={errors.privacyAck ? "privacy-error" : undefined}
              />
              <span>
                I understand that the title, description, category, display name,
                and price will be public. I will not include my address, phone
                number, email, or payment details.
              </span>
            </label>
            {errors.privacyAck ? (
              <p id="privacy-error" className="text-sm font-medium text-coral-deep" role="alert">
                {errors.privacyAck}
              </p>
            ) : null}

            <label className="flex items-start gap-3 text-sm leading-6">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-violet"
                checked={draft.guidelinesAck}
                onChange={(event) => update("guidelinesAck", event.target.checked)}
                aria-invalid={errors.guidelinesAck ? true : undefined}
                aria-describedby={errors.guidelinesAck ? "guidelines-error" : undefined}
              />
              <span>
                I agree to keep the wish respectful, specific, and free of
                requests for cash.
              </span>
            </label>
            {errors.guidelinesAck ? (
              <p id="guidelines-error" className="text-sm font-medium text-coral-deep" role="alert">
                {errors.guidelinesAck}
              </p>
            ) : null}

            <Note>
              Nothing on this form is saved. There is no account and no publishing
              service connected yet, so the next step is a preview only.
            </Note>
            <Button type="submit">Review wish</Button>
          </motion.form>
        ) : null}

        {step === "preview" ? (
          <motion.div
            key="preview"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          >
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              This is the public version
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Check it before you finish the preview. It will not be published.
            </p>
            <article className="mt-6 overflow-hidden rounded-3xl border border-line">
              {imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imageUrl} alt="" className="aspect-[4/3] w-full object-cover" />
              ) : (
                <div className="flex aspect-[4/3] items-end bg-[linear-gradient(145deg,#6C3BFF,#FF6B6B)] p-5">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">
                    {draft.category}
                  </span>
                </div>
              )}
              <div className="space-y-2 p-5">
                <h3 className="font-display text-2xl font-extrabold tracking-tight">
                  {draft.title}
                </h3>
                <p className="text-sm leading-6 text-muted">{draft.description}</p>
                <p className="text-sm">
                  <span className="font-semibold">{draft.displayName}</span>
                  {draft.showCountry ? <span className="text-muted"> · {draft.country}</span> : null}
                </p>
                <p className="text-sm font-semibold">{priceText}</p>
                <p className="text-sm text-muted">{draft.category}</p>
                {draft.itemUrl ? (
                  <p className="text-sm break-all text-violet">{draft.itemUrl}</p>
                ) : null}
              </div>
            </article>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button variant="secondary" onClick={() => setStep("write")}>
                Edit wish
              </Button>
              <Button onClick={() => setStep("done")}>Complete preview</Button>
            </div>
          </motion.div>
        ) : null}

        {step === "done" ? (
          <motion.div
            key="done"
            className="relative overflow-hidden py-6 text-center"
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mint"
              initial={reduce ? false : { scale: 0.6, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 16 }}
            >
              <Spark className="h-8 w-8 text-ink" />
            </motion.div>
            {!reduce
              ? [0, 1, 2, 3, 4].map((spark) => (
                  <motion.span
                    key={spark}
                    className="absolute text-coral"
                    style={{ left: `${18 + spark * 15}%`, top: "12%" }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: [0, 1, 0], y: -18 }}
                    transition={{ duration: 1.1, delay: spark * 0.08 }}
                  >
                    <Spark className="h-4 w-4" />
                  </motion.span>
                ))
              : null}
            <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight">
              That felt good, didn&apos;t it?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
              This is a preview of the moment after someone sends a wish. Your
              wish was not published, saved, or sent for review. {brand.name} does not
              have an account or a publishing service connected yet.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button variant="secondary" onClick={() => setStep("preview")}>
                Back to preview
              </Button>
              <Button onClick={reset}>Write another</Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
