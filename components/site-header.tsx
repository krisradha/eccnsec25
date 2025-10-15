"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/moments", label: "Moments" },
  { href: "/team", label: "Team" },
  { href: "/passes", label: "Passes" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-balance">
          <Image
            src="/images/logo.png"
            alt="Eco Cultural Club NSEC logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span className="text-xl">Eco Cultural Club</span>
          <span className="sr-only">NSEC</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm/6 transition-colors",
                pathname === link.href ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="bg-primary text-primary-foreground">
            {/* TODO: Replace with your actual WhatsApp community invite link */}
            <Link href="https://chat.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              WhatsApp Community
            </Link>
          </Button>
        </div>
      </div>
      <div className="md:hidden border-t">
        <nav className="mx-auto max-w-6xl px-4 py-2 flex items-center gap-2 overflow-x-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm/6 whitespace-nowrap",
                pathname === link.href ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
