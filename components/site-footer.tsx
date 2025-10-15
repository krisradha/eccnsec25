import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Eco Cultural Club • NSEC</h3>
          <p className="text-sm text-muted-foreground mt-2 text-pretty">
            Reviving culture in a unique way. Radhe Radhe.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Follow</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link
                className="underline underline-offset-4"
                href="https://www.instagram.com/ecoculturalclub_nsec/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                className="underline underline-offset-4"
                href="https://www.facebook.com/ecoculturalclubofnsec"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">College</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link
                className="underline underline-offset-4"
                href="https://www.nsec.ac.in/page.php?id=528"
                target="_blank"
                rel="noopener noreferrer"
              >
                About the Club at NSEC
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground border-t">
        © {new Date().getFullYear()} Eco Cultural Club of NSEC. All rights reserved.
      </div>
    </footer>
  )
}
