'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is your turnaround time?',
    answer: 'We offer fast turnaround times starting at 24 hours for most products. Standard orders typically complete within 3-5 business days. Rush orders and expedited shipping are available for an additional fee.',
  },
  {
    question: 'What file formats do you accept?',
    answer: 'We accept PDF, AI, PSD, EPS, TIFF, JPG, and PNG files. For best results, we recommend high-resolution files (300 DPI). Our design team can also help you prepare your files if needed.',
  },
  {
    question: 'Do you offer design services?',
    answer: 'Yes! Our professional design team can help bring your vision to life. We offer custom design services, template design, and file preparation. Contact us for a quote.',
  },
  {
    question: 'What are your shipping options?',
    answer: 'We offer several shipping options including ground, 2-day, and overnight delivery. Free shipping is available on orders over $100. International shipping is also available.',
  },
  {
    question: 'Can I order samples?',
    answer: 'Absolutely! We recommend ordering sample sets before placing large orders. Our samples help you verify color accuracy, finish quality, and overall appearance.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, bank transfers, and wire transfers. All transactions are secure and encrypted.',
  },
  {
    question: 'Do you offer bulk discounts?',
    answer: 'Yes! Bulk discounts are available based on quantity. The more you order, the better the per-unit price. Contact our sales team for a custom quote.',
  },
  {
    question: 'What is your quality guarantee?',
    answer: 'We guarantee 100% satisfaction with every order. If you&apos;re not happy with your prints, we&apos;ll reprint them at no charge.',
  },
  {
    question: 'Can I reorder previous orders?',
    answer: 'Yes! Once you&apos;ve placed an order, you can easily reorder with the same specifications. We keep your order history on file for quick reordering.',
  },
  {
    question: 'How do I track my order?',
    answer: 'You&apos;ll receive a tracking number via email as soon as your order ships. You can use this number to track your package in real-time.',
  },
]

export default function FAQPage() {
  const [openIndices, setOpenIndices] = useState<number[]>([])

  const toggleFAQ = (index: number) => {
    setOpenIndices(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Find answers to common questions about our printing services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 sm:py-24 flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition text-left"
                >
                  <h3 className="font-semibold text-foreground text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-primary transition-transform flex-shrink-0 ml-4 ${
                      openIndices.includes(index) ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndices.includes(index) && (
                  <div className="px-6 py-4 bg-muted/30 border-t border-border">
                    <p className="text-foreground/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Didn&apos;t find your answer?
            </h2>
            <p className="text-foreground/70 mb-6">
              Our support team is here to help. Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@apexprinting.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-secondary transition"
              >
                Email Support
              </a>
              <a
                href="tel:+18007748462"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/5 transition"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
