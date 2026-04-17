'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary-foreground">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 flex-1">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Terms of Service</h2>
              <p className="text-foreground/70 mb-4">
                Last updated: April 2026
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">1. Agreement to Terms</h3>
              <p className="text-foreground/70 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">2. Use License</h3>
              <p className="text-foreground/70 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Apex Printing Solutions&apos; website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 mb-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or &apos;mirroring&apos; the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">3. Disclaimer</h3>
              <p className="text-foreground/70 mb-4">
                The materials on Apex Printing Solutions&apos; website are provided on an &apos;as is&apos; basis. Apex Printing Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">4. Limitations</h3>
              <p className="text-foreground/70 mb-4">
                In no event shall Apex Printing Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Apex Printing Solutions&apos; website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">5. Accuracy of Materials</h3>
              <p className="text-foreground/70 mb-4">
                The materials appearing on Apex Printing Solutions&apos; website could include technical, typographical, or photographic errors. Apex Printing Solutions does not warrant that any of the materials on its website are accurate, complete, or current. Apex Printing Solutions may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">6. Links</h3>
              <p className="text-foreground/70 mb-4">
                Apex Printing Solutions has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Apex Printing Solutions of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">7. Modifications</h3>
              <p className="text-foreground/70 mb-4">
                Apex Printing Solutions may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">8. Governing Law</h3>
              <p className="text-foreground/70 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
              <p className="text-foreground/70">
                If you have any questions about these Terms of Service, please contact us at: support@apexprinting.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
