'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { products } from '@/lib/products'

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Our Products
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Choose from our comprehensive selection of professional printing solutions
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300 bg-card hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom"
                style={{
                  animationDelay: `${index * 50}ms`,
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-base sm:text-lg font-bold text-primary">
                      ${product.basePrice.toFixed(2)}
                    </span>
                    <div className="flex items-center text-primary font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all duration-300 transform group-hover:translate-x-1">
                      View <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
