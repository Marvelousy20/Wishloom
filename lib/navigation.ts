export const discoverPath = "/wishes"
export const makeWishPath = "/make-a-wish"
export const howItWorksPath = "/#how-it-works"
export const signInPath = "/sign-in"
export const signUpPath = "/sign-up"
export const dashboardPath = "/dashboard"

export const primaryNav = [
  { href: discoverPath, label: "Discover Wishes" },
  { href: howItWorksPath, label: "How It Works" },
] as const

export const footerExplore = [
  { href: discoverPath, label: "Discover Wishes" },
  { href: makeWishPath, label: "Make a Wish" },
  { href: howItWorksPath, label: "How It Works" },
  { href: "/about", label: "About" },
] as const

export const footerTrust = [
  { href: "/trust-and-safety", label: "Trust & Safety" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
] as const
