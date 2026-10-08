import { formatMoney } from "@/lib/format"
import type { Wish, WishCategory, WishQuery } from "@/lib/types"

/**
 * Sample wishes for the interface.
 * These are illustrations, not requests from real people.
 * Replace `getWishes` / `getWish` with an API later without rewriting the UI.
 */
const wishes: Wish[] = [
  {
    id: "camera-journey",
    title: "A camera to start my photography journey",
    description:
      "I want a beginner mirrorless camera so I can photograph the markets and the coast near home. I have been borrowing cameras from friends, and I am ready to practice with one of my own.",
    category: "Creativity",
    displayName: "Amara",
    country: "Ghana",
    currency: "USD",
    estimatedPrice: 420,
    image: "/images/wishes/wish-camera.jpg",
    imageAlt: "A black mirrorless camera resting on warm linen",
    status: "open",
    itemUrl: "https://www.bhphotovideo.com/",
    itemLabel: "Example camera retailer",
  },
  {
    id: "university-books",
    title: "Books for my first year at university",
    description:
      "A small set of books for my first year of literature. I start university in the autumn and would love to arrive with the reading already on my shelf.",
    category: "Books",
    displayName: "Leo",
    country: "Portugal",
    currency: "USD",
    estimatedPrice: 85,
    image: "/images/wishes/wish-books.jpg",
    imageAlt: "A stack of clothbound books in violet, coral, and cream",
    status: "open",
  },
  {
    id: "first-guitar",
    title: "A guitar I have wanted to learn to play",
    description:
      "An acoustic guitar I can practice in the evenings. I have wanted to learn for years, and I finally have a quiet corner to play.",
    category: "Music",
    displayName: "Hana",
    country: "Japan",
    currency: "USD",
    estimatedPrice: 250,
    image: "/images/wishes/wish-guitar.jpg",
    imageAlt: "A natural-wood acoustic guitar on warm linen",
    status: "open",
    itemUrl: "https://www.sweetwater.com/",
    itemLabel: "Example music shop",
  },
  {
    id: "design-laptop",
    title: "A laptop for my design course",
    description:
      "A reliable laptop for my design course. I share a family computer, and I need something I can use for class projects and late studio nights.",
    category: "Technology",
    displayName: "Sofia",
    country: "Mexico",
    currency: "USD",
    estimatedPrice: 650,
    image: "/images/wishes/wish-laptop.jpg",
    imageAlt: "A silver laptop open on a sunlit wooden table",
    status: "open",
    itemUrl: "https://www.apple.com/mac/",
    itemLabel: "Example laptop page",
  },
  {
    id: "watercolor-set",
    title: "Watercolors and paper for after work",
    description:
      "A proper watercolor set and cotton paper for painting after work. I have been using leftover student pans, and I want materials that can keep up with me.",
    category: "Creativity",
    displayName: "Priya",
    country: "India",
    currency: "USD",
    estimatedPrice: 60,
    image: "/images/wishes/wish-watercolors.jpg",
    imageAlt: "A watercolor tin, a brush, and a sheet of blank paper",
    status: "open",
  },
  {
    id: "evening-bicycle",
    title: "A bicycle for the ride to evening class",
    description:
      "A simple bicycle for the ride to my evening classes. The bus home stops early, and a bike would make the trip easy.",
    category: "Everyday essentials",
    displayName: "Jonas",
    country: "Germany",
    currency: "USD",
    estimatedPrice: 320,
    image: "/images/wishes/wish-bicycle.jpg",
    imageAlt: "A cream city bicycle against a warm wall",
    status: "fulfilled",
  },
  {
    id: "recital-tickets",
    title: "Tickets to my sister's first recital",
    description:
      "Two tickets to my sister's first piano recital. I want to be in the room when she walks on stage.",
    category: "Special moments",
    displayName: "Elena",
    country: "Italy",
    currency: "USD",
    estimatedPrice: 90,
    image: "/images/wishes/wish-recital.jpg",
    imageAlt: "A pale rose resting on a folded paper program",
    status: "open",
  },
  {
    id: "sewing-machine",
    title: "A sewing machine for a small studio",
    description:
      "A domestic sewing machine so I can make clothes for my nieces and take on small alterations. I have been sewing by hand, and a machine would open up what I can finish.",
    category: "Creativity",
    displayName: "Amina",
    country: "Morocco",
    currency: "USD",
    estimatedPrice: 280,
    image: "/images/wishes/wish-sewing.jpg",
    imageAlt: "A cream sewing machine beside a spool of coral thread",
    status: "open",
  },
  {
    id: "study-headphones",
    title: "Headphones for studying at home",
    description:
      "Comfortable headphones for studying in a busy apartment. A little quiet would help me finish my coursework.",
    category: "Education",
    displayName: "Noah",
    country: "Canada",
    currency: "USD",
    estimatedPrice: 140,
    image: "/images/wishes/wish-headphones.jpg",
    imageAlt: "Cream over-ear headphones on warm linen",
    status: "open",
    itemUrl: "https://www.bose.com/",
    itemLabel: "Example headphone shop",
  },
  {
    id: "rooftop-telescope",
    title: "A telescope for weekend stargazing",
    description:
      "A beginner telescope for weekend stargazing from the rooftop. I want to learn the night sky properly, one constellation at a time.",
    category: "Experiences",
    displayName: "Mei",
    country: "Singapore",
    currency: "USD",
    estimatedPrice: 220,
    image: "/images/wishes/wish-telescope.jpg",
    imageAlt: "A small brass telescope on a wooden tripod",
    status: "open",
  },
  {
    id: "courtyard-mural",
    title: "Paint for a courtyard mural",
    description:
      "Brushes and exterior paint for a mural I am painting with neighbors on our courtyard wall. The sketch is ready. The color is the missing piece.",
    category: "Creativity",
    displayName: "Mateo",
    country: "Colombia",
    currency: "USD",
    estimatedPrice: 75,
    image: "/images/wishes/wish-paints.jpg",
    imageAlt: "Paintbrushes and jars of coral, yellow, and violet paint",
    status: "open",
  },
  {
    id: "home-keyboard",
    title: "A keyboard to practice piano at home",
    description:
      "A compact keyboard so I can practice piano at home between lessons. I want to keep the feeling of the keys during the week.",
    category: "Music",
    displayName: "Freya",
    country: "Sweden",
    currency: "USD",
    estimatedPrice: 310,
    image: "/images/wishes/wish-keyboard.jpg",
    imageAlt: "A white compact keyboard on warm linen",
    status: "fulfilled",
    itemUrl: "https://www.yamaha.com/",
    itemLabel: "Example keyboard maker",
  },
  {
    id: "tea-kettle",
    title: "A kettle and two mugs for guests",
    description:
      "A sturdy kettle and two good mugs. Friends come by for tea, and our old kettle has finally given out.",
    category: "Other",
    displayName: "Yusuf",
    country: "Kenya",
    currency: "USD",
    estimatedPrice: 45,
    image: "/images/wishes/wish-kettle.jpg",
    imageAlt: "A cream kettle beside a coral mug and a yellow mug",
    status: "open",
  },
  {
    id: "winter-jacket",
    title: "A rain jacket for the walk to work",
    description:
      "A warm rain jacket for the walk to work through winter. The one I have now lets the weather in at the seams.",
    category: "Everyday essentials",
    displayName: "Ingrid",
    country: "Norway",
    currency: "USD",
    estimatedPrice: 110,
    image: "/images/wishes/wish-jacket.jpg",
    imageAlt: "A folded mustard rain jacket on warm linen",
    status: "open",
  },
]

const accentBar: Record<WishCategory, string> = {
  Education: "bg-violet",
  Technology: "bg-violet",
  Creativity: "bg-coral",
  Books: "bg-sunshine",
  Music: "bg-coral",
  "Everyday essentials": "bg-mint",
  Experiences: "bg-sunshine",
  "Special moments": "bg-coral",
  Other: "bg-violet",
}

export function categoryAccent(category: WishCategory): string {
  return accentBar[category]
}

export function getWishes(): Wish[] {
  return wishes
}

export function getWish(id: string): Wish | undefined {
  return wishes.find((wish) => wish.id === id)
}

export function listWishIds(): string[] {
  return wishes.map((wish) => wish.id)
}

export function listWishCountries(): string[] {
  return [...new Set(wishes.map((wish) => wish.country))].sort((a, b) =>
    a.localeCompare(b),
  )
}

export function getRelatedWishes(wish: Wish, limit = 3): Wish[] {
  const others = wishes.filter((item) => item.id !== wish.id)
  const sameCategory = others.filter((item) => item.category === wish.category)
  const rest = others.filter((item) => item.category !== wish.category)
  return [...sameCategory, ...rest].slice(0, limit)
}

export function priceLabel(wish: Pick<Wish, "estimatedPrice" | "currency">): string {
  return `About ${formatMoney(wish.estimatedPrice, wish.currency)}`
}

function matchesBudget(price: number, budget: string): boolean {
  switch (budget) {
    case "under-100":
      return price < 100
    case "100-300":
      return price >= 100 && price <= 300
    case "300-600":
      return price > 300 && price <= 600
    case "over-600":
      return price > 600
    default:
      return true
  }
}

function sortWishes(list: Wish[], sort: string): Wish[] {
  const copy = [...list]
  if (sort === "price-asc") {
    copy.sort((a, b) => a.estimatedPrice - b.estimatedPrice)
  } else if (sort === "price-desc") {
    copy.sort((a, b) => b.estimatedPrice - a.estimatedPrice)
  } else if (sort === "title") {
    copy.sort((a, b) => a.title.localeCompare(b.title))
  }
  return copy
}

export function filterWishes(list: Wish[], query: WishQuery): Wish[] {
  const q = query.q.trim().toLowerCase()
  const filtered = list.filter((wish) => {
    if (
      query.category &&
      query.category !== "All" &&
      wish.category !== query.category
    ) {
      return false
    }
    if (
      query.country &&
      query.country !== "All" &&
      wish.country !== query.country
    ) {
      return false
    }
    if (!matchesBudget(wish.estimatedPrice, query.budget)) return false
    if (!q) return true
    const haystack = [
      wish.title,
      wish.description,
      wish.displayName,
      wish.country,
      wish.category,
    ]
      .join(" ")
      .toLowerCase()
    return haystack.includes(q)
  })
  return sortWishes(filtered, query.sort)
}

export const featuredWishIds = [
  "camera-journey",
  "university-books",
  "first-guitar",
] as const

export function getFeaturedWishes(): Wish[] {
  return featuredWishIds
    .map((id) => getWish(id))
    .filter((wish): wish is Wish => Boolean(wish))
}
