'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { getProductBySlug, getAllProductSlugs } from '@/lib/products'
import { ArrowLeft, ShoppingCart, Plus, Minus } from 'lucide-react'

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = getProductBySlug(slug)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedFinish, setSelectedFinish] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Set defaults
    if (product?.specs.sizes) {
      setSelectedSize(product.specs.sizes[0])
    }
    if (product?.specs.colors) {
      setSelectedColor(product.specs.colors[0])
    }
    if (product?.specs.finishes) {
      setSelectedFinish(product.specs.finishes[0])
    }
  }, [product])

  if (!mounted) return null

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
            <Link href="/products" className="text-primary hover:underline">
              Back to products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const minQuantity = product.specs.minQuantity
  const maxQuantity = product.specs.maxQuantity
  const quantityError = quantity < minQuantity ? `Minimum quantity is ${minQuantity}` : quantity > maxQuantity ? `Maximum quantity is ${maxQuantity}` : ''
  
  const finalPrice = product.basePrice * (quantity / 100)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <Link href="/products" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Product Detail */}
      <section className="py-12 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="flex items-center justify-center bg-muted rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-foreground/70 mb-4">
                  {product.description}
                </p>
                {product.specs.dimension && (
                  <p className="text-sm text-foreground/60 mb-2">
                    <span className="font-semibold">Dimension:</span> {product.specs.dimension}
                  </p>
                )}
              </div>

              {/* Configurator */}
              <div className="space-y-6 border-t pt-6 border-border">
                {/* Size Selection */}
                {product.specs.sizes && product.specs.sizes.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Size
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {product.specs.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`p-3 rounded-lg border transition text-sm font-medium ${
                            selectedSize === size
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50 text-foreground'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection */}
                {product.specs.colors && product.specs.colors.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Color
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {product.specs.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`p-3 rounded-lg border transition text-sm font-medium ${
                            selectedColor === color
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50 text-foreground'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Finish Selection */}
                {product.specs.finishes && product.specs.finishes.length > 0 && (
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Finish
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {product.specs.finishes.map((finish) => (
                        <button
                          key={finish}
                          onClick={() => setSelectedFinish(finish)}
                          className={`p-3 rounded-lg border transition text-sm font-medium ${
                            selectedFinish === finish
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50 text-foreground'
                          }`}
                        >
                          {finish}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity Selection */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Quantity ({minQuantity} - {maxQuantity})
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(minQuantity, quantity - 1))}
                        className="p-2 hover:bg-muted transition"
                      >
                        <Minus size={20} />
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.min(maxQuantity, Math.max(minQuantity, parseInt(e.target.value) || minQuantity)))}
                        className="w-20 text-center border-0 outline-none bg-transparent font-semibold"
                      />
                      <button
                        onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
                        className="p-2 hover:bg-muted transition"
                      >
                        <Plus size={20} />
                      </button>
                    </div>
                  </div>
                  {quantityError && (
                    <p className="text-sm text-destructive mt-2">{quantityError}</p>
                  )}
                </div>
              </div>

              {/* Price and Add to Cart */}
              <div className="border-t pt-6 border-border space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-foreground/60">Price:</span>
                  <span className="text-4xl font-bold text-primary">
                    ${finalPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  disabled={!!quantityError}
                  className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <p className="text-xs text-foreground/60 text-center">
                  Fast turnaround • Free design consultation • 100% satisfaction guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
