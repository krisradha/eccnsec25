import Image from "next/image"

const images = [
  { src: "/images/moments/RANSECECDHE.png", alt: "Eco Cultural Club creative poster" },
  { src: "/images/moments/RANSECECDHE2.jpg", alt: "Eco Cultural Club event moment 2" },
  { src: "/images/moments/RANSECECDHE3.jpg", alt: "Eco Cultural Club event moment 3" },
  { src: "/images/moments/RANSECECDHE4.jpg", alt: "Eco Cultural Club event moment 4" },
  { src: "/images/moments/RANSECECDHE5.jpg", alt: "Eco Cultural Club event moment 5" },
  { src: "/images/moments/RANSECECDHE6.jpg", alt: "Eco Cultural Club event moment 6" },
]

export default function MomentsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">Moments</h1>
        <p className="mt-2 text-muted-foreground">Snapshots from performances, showcases, and campus celebrations.</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <figure key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-card">
            <Image
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(min-width: 768px) 33vw, 50vw"
            />
            <figcaption className="sr-only">{img.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
