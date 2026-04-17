'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-primary text-lg mb-4">Apex Printing</h3>
            <p className="text-sm text-foreground/70">
              Professional printing solutions for businesses of all sizes.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/business-cards" className="text-foreground/70 hover:text-primary">
                  Business Cards
                </Link>
              </li>
              <li>
                <Link href="/products/flyers" className="text-foreground/70 hover:text-primary">
                  Flyers
                </Link>
              </li>
              <li>
                <Link href="/products/posters" className="text-foreground/70 hover:text-primary">
                  Posters
                </Link>
              </li>
              <li>
                <Link href="/products/folders" className="text-foreground/70 hover:text-primary">
                  Folders
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-foreground/70 hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-foreground/70 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-foreground/70 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-foreground/70">
            &copy; 2026 Apex Printing Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
