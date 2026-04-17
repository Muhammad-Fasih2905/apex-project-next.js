'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Award, Users, Zap, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    {
      icon: Users,
      value: '5,000+',
      label: 'Happy Customers',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
    },
    {
      icon: Zap,
      value: '24hr',
      label: 'Fast Turnaround',
    },
    {
      icon: TrendingUp,
      value: '99.8%',
      label: 'Quality Rate',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            About Apex Printing Solutions
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Leading the printing industry with innovation and quality
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-foreground/70 leading-relaxed">
                Apex Printing Solutions was founded with a mission to provide exceptional printing services to businesses of all sizes. For over 15 years, we&apos;ve been committed to delivering premium quality prints with fast turnaround times and competitive pricing.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                What started as a small local print shop has grown into a trusted partner for thousands of businesses nationwide. We&apos;ve invested in cutting-edge printing technology and assembled a team of passionate professionals dedicated to excellence.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, we&apos;re proud to offer a comprehensive range of printing solutions, from business cards to large format posters, all backed by our commitment to quality and customer satisfaction.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-09%20at%2010.01.36%20PM%20%281%29-J9nEKUBwkGEsYmGhspgJXswlenwocY.jpeg"
                alt="Apex Printing Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 py-12 border-t border-b border-border">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon size={32} className="text-primary mx-auto mb-4" />
                  <p className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              )
            })}
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-border rounded-lg p-8">
                <h3 className="font-semibold text-lg text-foreground mb-4">Quality First</h3>
                <p className="text-foreground/70">
                  We never compromise on quality. Every print is carefully inspected to ensure it meets our exacting standards.
                </p>
              </div>
              <div className="border border-border rounded-lg p-8">
                <h3 className="font-semibold text-lg text-foreground mb-4">Customer Focused</h3>
                <p className="text-foreground/70">
                  Your satisfaction is our priority. Our team is dedicated to understanding your needs and exceeding expectations.
                </p>
              </div>
              <div className="border border-border rounded-lg p-8">
                <h3 className="font-semibold text-lg text-foreground mb-4">Innovation</h3>
                <p className="text-foreground/70">
                  We continuously invest in the latest printing technology to offer you cutting-edge solutions and capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Johnson', role: 'Founder & CEO' },
                { name: 'Michael Chen', role: 'VP of Operations' },
                { name: 'Emily Rodriguez', role: 'Director of Quality' },
              ].map((person, index) => (
                <div key={index} className="text-center">
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl text-primary/50">{person.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {person.name}
                  </h3>
                  <p className="text-sm text-foreground/70">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
