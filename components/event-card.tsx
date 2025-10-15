import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EventCard({
  title,
  subtitle,
  description,
  ctaHref,
  ctaLabel = "Learn more",
}: {
  title: string
  subtitle?: string
  description?: string
  ctaHref?: string
  ctaLabel?: string
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-balance">{title}</CardTitle>
        {subtitle ? <CardDescription>{subtitle}</CardDescription> : null}
      </CardHeader>
      {description ? (
        <CardContent className="flex flex-col gap-4">
          <p className="text-pretty">{description}</p>
          {ctaHref ? (
            <Button asChild className="self-start bg-primary text-primary-foreground">
              <Link href={ctaHref} target="_blank" rel="noopener noreferrer">
                {ctaLabel}
              </Link>
            </Button>
          ) : null}
        </CardContent>
      ) : null}
    </Card>
  )
}
