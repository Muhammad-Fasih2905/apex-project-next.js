'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary-foreground">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-sm max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Privacy Policy</h2>
              <p className="text-foreground/70 mb-4">
                Last updated: April 2026
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Introduction</h3>
              <p className="text-foreground/70 mb-4">
                Apex Printing Solutions (&apos;Company&apos;, &apos;we&apos;, &apos;our&apos;, or &apos;us&apos;) operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Information Collection and Use</h3>
              <p className="text-foreground/70 mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                <li>Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&apos;Personal Data&apos;). This may include: Email address, First and last name, Phone number, Address, City, State, Province, ZIP/Postal code, Cookies and Usage Data</li>
                <li>Usage Data: We may also collect information on how the Service is accessed and used (&apos;Usage Data&apos;). This may include information such as your computer&apos;s Internet Protocol address, browser type, browser version, the pages you visit, the time and date of your visit, and other diagnostic data.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Use of Data</h3>
              <p className="text-foreground/70 mb-4">
                Apex Printing Solutions uses the collected data for various purposes:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Security of Data</h3>
              <p className="text-foreground/70 mb-4">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Contact Us</h3>
              <p className="text-foreground/70">
                If you have any questions about this Privacy Policy, please contact us at: support@apexprinting.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
