import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <section>
      <div className="relative">
        {/* Hero */}
        <div className="absolute inset-0">
          <Image
            src="/images/club-1.jpg"
            alt="Eco Cultural Club performance"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-semibold text-balance">Eco Cultural Club of NSEC</h1>
          <p className="mt-4 text-lg md:text-xl text-pretty max-w-2xl">
            Reviving culture in a unique way. Stay tuned for more.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Radhe Radhe.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="bg-primary text-primary-foreground">
              <Link href="/events">Explore Events</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="https://www.instagram.com/ecoculturalclub_nsec/" target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Culture Revival</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              “What eludes other clubs, this family achieves effortlessly.”
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Mesmerizer</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The biggest cultural fest of NSEC — a celebration of art and innovation.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold">Prelude 2023</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              NSEC Freshers&apos; Welcome — a warm beginning to a vibrant journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
