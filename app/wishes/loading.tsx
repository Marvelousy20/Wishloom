import { Container } from "@/components/layout/container"
import { SkeletonGrid } from "@/components/wishes/skeletons"

export default function Loading() {
  return (
    <Container className="py-16">
      <SkeletonGrid />
    </Container>
  )
}
