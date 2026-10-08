export const categories = [
  "Education",
  "Technology",
  "Creativity",
  "Books",
  "Music",
  "Everyday essentials",
  "Experiences",
  "Special moments",
  "Other",
] as const

export type WishCategory = (typeof categories)[number]

export type WishStatus = "open" | "fulfilled"

export type Wish = {
  id: string
  title: string
  description: string
  category: WishCategory
  displayName: string
  country: string
  currency: string
  estimatedPrice: number
  image: string
  imageAlt: string
  status: WishStatus
  itemUrl?: string
  itemLabel?: string
}

export type WishQuery = {
  q: string
  category: string
  country: string
  budget: string
  sort: string
}

export const budgetOptions = [
  { id: "any", label: "Any budget" },
  { id: "under-100", label: "Under $100" },
  { id: "100-300", label: "$100 – $300" },
  { id: "300-600", label: "$300 – $600" },
  { id: "over-600", label: "Over $600" },
] as const

export const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "title", label: "Title A–Z" },
] as const

export const currencies = [
  "USD",
  "EUR",
  "GBP",
  "CAD",
  "JPY",
  "INR",
  "GHS",
  "MAD",
  "SEK",
  "NOK",
  "SGD",
  "MXN",
  "KES",
  "COP",
] as const

export const countries = [
  "Australia",
  "Brazil",
  "Canada",
  "Colombia",
  "Egypt",
  "France",
  "Germany",
  "Ghana",
  "India",
  "Indonesia",
  "Italy",
  "Japan",
  "Kenya",
  "Mexico",
  "Morocco",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Philippines",
  "Poland",
  "Portugal",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "United Kingdom",
  "United States",
] as const
