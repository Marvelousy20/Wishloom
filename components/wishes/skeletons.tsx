import { cn } from "@/lib/cn"

function Bone({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-2xl bg-line", className)} />
}

export function WishCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white">
      <Bone className="aspect-[4/3] rounded-none" />
      <div className="space-y-3 p-5">
        <Bone className="h-6 w-4/5" />
        <Bone className="h-4 w-full" />
        <Bone className="h-4 w-2/3" />
        <Bone className="h-11 w-full" />
      </div>
    </div>
  )
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <WishCardSkeleton key={index} />
      ))}
    </div>
  )
}

export function DetailSkeleton() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2">
      <Bone className="aspect-[4/3]" />
      <div className="space-y-4">
        <Bone className="h-6 w-32" />
        <Bone className="h-12 w-full" />
        <Bone className="h-24 w-full" />
        <Bone className="h-12 w-48" />
      </div>
    </div>
  )
}
