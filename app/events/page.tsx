import { EventCard } from "@/components/event-card"

export default function EventsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">Events</h1>
        <p className="mt-2 text-muted-foreground">
          From flagship fests to freshers’ welcomes — craft, culture, and community.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <EventCard
          title="Mesmerizer"
          subtitle="The biggest cultural fest of NSEC"
          description="An enchanting celebration of performance, art, and innovation. Stay tuned — something mesmerizing is coming soon."
          ctaHref="https://www.instagram.com/ecoculturalclub_nsec/"
          ctaLabel="See updates"
        />
        <EventCard
          title="Prelude 2023"
          subtitle="NSEC Freshers' Welcome"
          description="Introducing the eagerly awaited freshers’ welcome — a vibrant start for the newest batch."
          ctaHref="https://www.facebook.com/ecoculturalclubofnsec"
          ctaLabel="View moments"
        />
      </div>
    </section>
  )
}
