'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Mail } from 'lucide-react'

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Confirmation Content */}
      <section className="py-16 sm:py-24 flex-1">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-6">
              <CheckCircle2 size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-foreground/70 mb-2">
              Thank you for your purchase
            </p>
            <p className="text-sm text-foreground/60">
              Order #APX-2026-001234
            </p>
          </div>

          {/* Order Details */}
          <div className="border border-border rounded-lg p-8 mb-8 bg-muted/30">
            <h2 className="text-2xl font-bold text-foreground mb-6">Order Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Shipping To</h3>
                <p className="text-foreground/70 text-sm space-y-1">
                  <div>John Doe</div>
                  <div>123 Business Street</div>
                  <div>New York, NY 10001</div>
                  <div>United States</div>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Estimated Delivery</h3>
                <p className="text-foreground/70 text-sm space-y-1">
                  <div className="font-semibold text-primary">3-5 Business Days</div>
                  <div>We&apos;ll send you a tracking number via email</div>
                </p>
              </div>
            </div>

            {/* Items */}
            <div className="border-t border-border pt-6 mb-6">
              <h3 className="font-semibold text-foreground mb-4">Items Ordered</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-foreground">Business Cards</p>
                    <p className="text-sm text-foreground/70">500 cards • Full Color • Gloss</p>
                  </div>
                  <p className="font-semibold text-foreground">$49.99</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="border-t border-border pt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-foreground/70">Subtotal</span>
                <span className="font-semibold text-foreground">$49.99</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground/70">Tax (10%)</span>
                <span className="font-semibold text-foreground">$5.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-foreground/70">Shipping</span>
                <span className="font-semibold text-foreground">$0.00</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border">
                <span className="font-bold text-foreground">Total Paid</span>
                <span className="text-2xl font-bold text-primary">$54.99</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <div className="flex gap-4">
              <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Confirmation Email Sent</h3>
                <p className="text-sm text-foreground/70">
                  A detailed confirmation and receipt have been sent to your email address. You can track your order and get updates on our website.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/5 transition">
              View Full Receipt
            </button>
            <Link
              href="/products"
              className="flex-1 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-secondary transition flex items-center justify-center gap-2"
            >
              Continue Shopping <ArrowRight size={20} />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm text-foreground/70 mb-4">
              Have questions about your order?
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-foreground/70">Email: </span>
                <a href="mailto:support@apexprinting.com" className="text-primary hover:underline">
                  support@apexprinting.com
                </a>
              </p>
              <p className="text-sm">
                <span className="text-foreground/70">Phone: </span>
                <a href="tel:+1-800-PRINTING" className="text-primary hover:underline">
                  +1-800-PRINTING
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
