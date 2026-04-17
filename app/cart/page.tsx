'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from 'lucide-react'

export default function CartPage() {
  const cartItems = []
  const subtotal = 0
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + tax + shipping

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-8 sm:py-12 md:py-16 animate-in fade-in slide-in-from-top duration-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Shopping Cart
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/90">
            Review your items and proceed to checkout
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-8 sm:py-12 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-12 sm:py-16 animate-in fade-in slide-in-from-bottom duration-500">
              <div className="flex justify-center mb-6 animate-bounce">
                <ShoppingCart size={56} className="sm:w-20 sm:h-20 text-muted-foreground" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Your cart is empty
              </h2>
              <p className="text-sm sm:text-base text-foreground/70 mb-8">
                Start shopping to add items to your cart
              </p>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-secondary transition-all transform hover:scale-105 duration-200"
              >
                Continue Shopping <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-border rounded-lg p-4 sm:p-6 flex gap-4 sm:gap-6 hover:shadow-lg transition-all transform hover:scale-102 duration-200 animate-in fade-in slide-in-from-left"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationDuration: '500ms'
                    }}
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-base sm:text-lg text-foreground mb-2">
                        Product Name
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 mb-4">
                        Size • Color • Finish
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-base sm:text-lg font-bold text-primary">
                          $0.00
                        </span>
                        <button className="text-destructive hover:bg-destructive/10 p-2 rounded transition-all transform hover:scale-110 duration-200">
                          <Trash2 size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="border border-border rounded-lg p-4 sm:p-6 h-fit bg-muted/30 sticky top-24 shadow-lg animate-in fade-in slide-in-from-right duration-700">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-6">
                  Order Summary
                </h3>
                <div className="space-y-2 sm:space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-foreground/70">Subtotal</span>
                    <span className="font-semibold text-foreground">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-foreground/70">Tax (10%)</span>
                    <span className="font-semibold text-foreground">
                      ${tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-foreground/70">
                      Shipping
                      {shipping === 0 && (
                        <span className="text-primary text-xs ml-1">(Free)</span>
                      )}
                    </span>
                    <span className="font-semibold text-foreground">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-base sm:text-lg font-bold text-foreground">Total</span>
                  <span className="text-xl sm:text-2xl font-bold text-primary">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <Link
                  href="/checkout"
                  className="w-full block py-2 sm:py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-secondary transition-all transform hover:scale-105 mb-3 text-center text-sm sm:text-base"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/products"
                  className="block text-center text-xs sm:text-sm text-primary hover:underline transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
