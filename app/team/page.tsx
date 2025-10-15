import Image from "next/image"

export default function TeamPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">Team</h1>
        <p className="mt-2 text-muted-foreground">
          Ex-Core Members of Eco Cultural Club of NSEC — the pillars who shaped the journey (2022–2023).
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">Core Spirit</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Gaze to the left — stand the true pillars of this club. A community where collaboration and craft come
            together to revive culture in thoughtful, innovative ways.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-0 overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/club-2.png"
              alt="Core members and performers"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
