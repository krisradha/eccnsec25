import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PassesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-balance">Passes</h1>
        <p className="mt-2 text-muted-foreground">
          Get updates on passes and registrations for upcoming events and fests.
        </p>
      </header>

      {/* New Events Registration card added */}
      <Card className="max-w-2xl mb-6">
        <CardHeader>
          <CardTitle>Event Registration</CardTitle>
          <CardDescription>Register for upcoming Eco Cultural Club events.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="bg-primary text-primary-foreground">
            {/* TODO: Replace with the live registration form link if available */}
            <Link href="/events">Register Now</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Existing Stay Notified card */}
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Stay Notified</CardTitle>
          <CardDescription>Follow our official channels for pass drops and forms.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <Button asChild className="bg-primary text-primary-foreground">
            <Link href="https://www.instagram.com/ecoculturalclub_nsec/" target="_blank" rel="noopener noreferrer">
              Instagram Updates
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="https://www.facebook.com/ecoculturalclubofnsec" target="_blank" rel="noopener noreferrer">
              Facebook Announcements
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://www.nsec.ac.in/page.php?id=528" target="_blank" rel="noopener noreferrer">
              Club at NSEC
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
