'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const products = [
  {
    name: 'Business Cards',
    slug: 'business-cards',
    description: 'Professional 3.5" x 2" cards for networking',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-09%20at%2010.01.34%20PM%20%282%29-MejxN2KD4x4U03Z6wEK7v77C0z5xdA.jpeg',
  },
  {
    name: 'Flyers',
    slug: 'flyers',
    description: 'Eye-catching promotional materials',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-09%20at%2010.01.34%20PM-1Yzu95oM5qF1oEPElqHD30PX7p45gv.jpeg',
  },
  {
    name: 'Posters',
    slug: 'posters',
    description: 'Large format prints up to 24x35 inches',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-09%20at%2010.01.27%20PM%20%282%29-SBRht5v6vK9Ms0KRBmaRZMCaTan9cR.jpeg',
  },
  {
    name: 'Folders',
    slug: 'folders',
    description: 'Document storage and branding solutions',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-09%20at%2010.01.27%20PM-h0twrqo9bC7xDkjMq2RrJQAEjX8RFb.jpeg',
  },
  {
    name: 'Letterhead',
    slug: 'letterhead',
    description: 'Professional correspondence templates',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-09%20at%2010.01.29%20PM-TxDJ6L00UJgd8cJj2b9OaL9JYRpRHh.jpeg',
  },
  {
    name: 'Envelopes',
    slug: 'envelopes',
    description: 'Custom branded business envelopes',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-09%20at%2010.01.35%20PM%20%281%29-ojEPDYwSmxxRvI0Gofbje5zmGVh0tw.jpeg',
  },
]

const features = [
  {
    title: 'Fast Turnaround',
    description: 'Get your prints ready in as little as 24 hours',
  },
  {
    title: 'Premium Quality',
    description: 'Professional-grade materials and printing technology',
  },
  {
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising quality',
  },
  {
    title: 'Expert Support',
    description: 'Dedicated customer service team ready to help',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                Professional Printing Solutions for Your Business
              </h1>
              <p className="text-base sm:text-lg text-foreground/70">
                From business cards to custom posters, Apex delivers premium quality prints with fast turnaround times and competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Shop Now <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:flex items-center justify-center animate-in fade-in slide-in-from-right duration-700">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-09%20at%2010.01.36%20PM%20%281%29-J9nEKUBwkGEsYmGhspgJXswlenwocY.jpeg"
                  alt="Printing Services"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center animate-in fade-in slide-in-from-top duration-500">
            Why Choose Apex?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="space-y-3 p-4 sm:p-6 rounded-lg border border-border/50 hover:border-primary/50 bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationDuration: '600ms'
                }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 transform group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-foreground">{feature.title}</h3>
                <p className="text-sm sm:text-base text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center animate-in fade-in slide-in-from-top duration-500">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300 bg-background hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom"
                style={{
                  animationDelay: `${index * 75}ms`,
                  animationDuration: '600ms'
                }}
              >
                <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center text-primary font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all duration-300 transform group-hover:translate-x-1">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-pulse" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Browse our full product catalog and create your custom prints today.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 text-base sm:text-lg"
          >
            Explore Products <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
