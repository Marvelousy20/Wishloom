import { categories, countries, currencies } from "@/lib/types"

export type WishDraft = {
  title: string
  description: string
  category: string
  itemUrl: string
  price: string
  currency: string
  country: string
  showCountry: boolean
  displayName: string
  privacyAck: boolean
  guidelinesAck: boolean
}

export type FieldErrors = Partial<Record<keyof WishDraft | "image", string>>

const titleLimit = 80
const descriptionLimit = 600
const nameLimit = 40

export const wishLimits = {
  title: titleLimit,
  description: descriptionLimit,
  name: nameLimit,
  details: 500,
  contactMessage: 1000,
}

export function emptyWishDraft(): WishDraft {
  return {
    title: "",
    description: "",
    category: "",
    itemUrl: "",
    price: "",
    currency: "USD",
    country: "",
    showCountry: true,
    displayName: "",
    privacyAck: false,
    guidelinesAck: false,
  }
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === "https:" || url.protocol === "http:"
  } catch {
    return false
  }
}

export function validateWishDraft(draft: WishDraft): FieldErrors {
  const errors: FieldErrors = {}
  const title = draft.title.trim()
  const description = draft.description.trim()
  const name = draft.displayName.trim()

  if (title.length < 8) {
    errors.title = "Give the wish a title of at least 8 characters."
  } else if (title.length > titleLimit) {
    errors.title = `Keep the title under ${titleLimit} characters.`
  }

  if (description.length < 40) {
    errors.description =
      "Add a little more detail — at least 40 characters — about what you would like."
  } else if (description.length > descriptionLimit) {
    errors.description = `Keep the description under ${descriptionLimit} characters.`
  }

  if (!categories.includes(draft.category as (typeof categories)[number])) {
    errors.category = "Choose a category."
  }

  if (draft.itemUrl.trim() && !isHttpUrl(draft.itemUrl.trim())) {
    errors.itemUrl = "Use a full link that starts with https://."
  }

  if (draft.price.trim()) {
    const amount = Number(draft.price)
    if (!Number.isFinite(amount) || amount <= 0 || amount > 100000) {
      errors.price = "Enter a price greater than 0, up to 100,000."
    }
    if (!currencies.includes(draft.currency as (typeof currencies)[number])) {
      errors.currency = "Choose a currency."
    }
  }

  if (!countries.includes(draft.country as (typeof countries)[number])) {
    errors.country = "Choose a country. It can stay hidden from the public card."
  }

  if (name.length < 2) {
    errors.displayName = "Add a display name of at least 2 characters."
  } else if (name.length > nameLimit) {
    errors.displayName = `Keep the display name under ${nameLimit} characters.`
  } else if (!/^[\p{L}\p{M}][\p{L}\p{M} .'-]{0,39}$/u.test(name)) {
    errors.displayName = "Use a first name or display name, without numbers."
  }

  if (!draft.privacyAck) {
    errors.privacyAck = "Confirm what will be public before continuing."
  }

  if (!draft.guidelinesAck) {
    errors.guidelinesAck = "Confirm the community guidelines to continue."
  }

  return errors
}

export function validateImageFile(file: File): string | null {
  const allowed = ["image/jpeg", "image/png", "image/webp"]
  if (!allowed.includes(file.type)) {
    return "Use a JPG, PNG, or WebP image."
  }
  if (file.size > 5 * 1024 * 1024) {
    return "Images need to be 5 MB or smaller."
  }
  return null
}

export function validateEmail(value: string): string | null {
  const email = value.trim()
  if (!email) return "Enter your email address."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Enter an email address like name@example.com."
  }
  return null
}

export function validatePassword(value: string): string | null {
  if (value.length < 8) return "Use at least 8 characters."
  if (value.length > 72) return "Use 72 characters or fewer."
  return null
}

export function validateContact(input: {
  name: string
  email: string
  message: string
}): Record<string, string> {
  const errors: Record<string, string> = {}
  const name = input.name.trim()
  const message = input.message.trim()
  const emailError = validateEmail(input.email)
  if (name.length < 2) errors.name = "Add your name."
  if (name.length > 80) errors.name = "Keep your name under 80 characters."
  if (emailError) errors.email = emailError
  if (message.length < 20) {
    errors.message = "Write at least 20 characters so we know how to help."
  }
  if (message.length > wishLimits.contactMessage) {
    errors.message = `Keep the message under ${wishLimits.contactMessage} characters.`
  }
  return errors
}
