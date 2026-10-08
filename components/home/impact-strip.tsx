import { Spark } from "@/components/decor/shapes"

const phrases = [
  "Kindness has no borders",
  "Every wish starts with a little hope",
  "Anyone can give. Anyone can wish.",
  "No begging. No contests. No pressure.",
  "A wish is a hope, not a hardship story",
]

export function ImpactStrip() {
  const loop = [...phrases, ...phrases]

  return (
    <section aria-label="What this place stands for" className="border-y border-line bg-white">
      <p className="sr-only">{phrases.join(". ")}.</p>
      <div className="overflow-hidden py-4">
        <div className="marquee-track flex w-max items-center gap-10 pr-10" aria-hidden="true">
          {loop.map((phrase, index) => (
            <span key={`${phrase}-${index}`} className="inline-flex items-center gap-10">
              <span className="text-sm font-semibold text-ink">{phrase}</span>
              <Spark className="h-3.5 w-3.5 text-coral" />
            </span>
          ))}
        </div>
        <ul className="marquee-static flex-wrap justify-center gap-x-8 gap-y-2 px-5">
          {phrases.map((phrase) => (
            <li key={phrase} className="text-sm font-semibold text-ink">
              {phrase}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
