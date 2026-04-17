'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="Apex Printing Solutions"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline">
              Apex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/products"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition"
            >
              Contact
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent hover:text-accent-foreground transition"
            >
              <ShoppingCart size={20} />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-muted"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/products"
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
