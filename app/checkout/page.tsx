'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Lock, User, Mail, Phone, CreditCard } from 'lucide-react'
import { getCurrentUser, signupUser, saveUser } from '@/lib/auth'

export default function CheckoutPage() {
  const [step, setStep] = useState<'auth' | 'shipping' | 'payment' | 'review'>('auth')
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup')
  const [currentUser, setCurrentUser] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'other'>('card')
  
  const [authForm, setAuthForm] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  })

  useEffect(() => {
    const user = getCurrentUser()
    if (user) {
      setCurrentUser(user)
      setStep('shipping')
    }
  }, [])

  const subtotal = 0
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + tax + shipping

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (authMode === 'signup') {
      if (authForm.password !== authForm.confirmPassword) {
        alert('Passwords do not match')
        return
      }
      const user = signupUser(authForm.email, authForm.name, authForm.password)
      if (user) {
        setCurrentUser(user)
        setStep('shipping')
      } else {
        alert('Email already in use')
      }
    }
    // For login, just continue with email
    setCurrentUser({ email: authForm.email })
    setFormData(prev => ({ ...prev, email: authForm.email }))
    setStep('shipping')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAuthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAuthForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 'shipping') {
      setStep('payment')
    } else if (step === 'payment') {
      setStep('review')
    } else if (step === 'review') {
      // Handle final submission
      window.location.href = '/order-confirmation'
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-primary py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center animate-bounce">
              <ShoppingCart className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
              Secure Checkout
            </h1>
          </div>
          <p className="text-base sm:text-lg text-primary-foreground/90">
            Complete your order with confidence
          </p>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-8 sm:py-12 flex-1">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Step Indicator */}
          {currentUser && (
            <div className="flex gap-2 sm:gap-4 mb-8 animate-in fade-in slide-in-from-top duration-500">
              {['auth', 'shipping', 'payment', 'review'].map((s) => (
                <div
                  key={s}
                  className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 rounded-lg text-center font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                    step === s
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : ['auth', 'shipping', 'payment'].includes(s) && ['shipping', 'payment', 'review'].includes(step)
                        ? 'bg-primary/30 text-primary'
                        : 'bg-muted text-foreground/70'
                  }`}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </div>
              ))}
            </div>
          )}

          {/* Auth Step */}
          {step === 'auth' && (
            <div className="max-w-md mx-auto animate-in fade-in slide-in-from-bottom duration-500">
              <div className="bg-card border border-border rounded-lg p-6 sm:p-8 shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto mb-6">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                
                <h2 className="text-2xl font-bold text-center text-foreground mb-2">
                  {authMode === 'signup' ? 'Create Account' : 'Sign In'}
                </h2>
                <p className="text-center text-muted-foreground mb-6">
                  {authMode === 'signup'
                    ? 'Create an account to save your information'
                    : 'Continue with your email'}
                </p>

                <form onSubmit={handleAuthSubmit} className="space-y-4">
                  {authMode === 'signup' && (
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Full Name
                        </div>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={authForm.name}
                        onChange={handleAuthInputChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                        placeholder="John Doe"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Address
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={authForm.email}
                      onChange={handleAuthInputChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={authForm.password}
                      onChange={handleAuthInputChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                      placeholder="••••••••"
                    />
                  </div>

                  {authMode === 'signup' && (
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={authForm.confirmPassword}
                        onChange={handleAuthInputChange}
                        required
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                        placeholder="••••••••"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded-lg hover:bg-primary/90 transition transform hover:scale-105 duration-200"
                  >
                    {authMode === 'signup' ? 'Create Account' : 'Continue'}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    {authMode === 'signup'
                      ? 'Already have an account? Sign in'
                      : "Don't have an account? Create one"}
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentUser({ email: 'guest@example.com' })
                      setFormData(prev => ({ ...prev, email: 'guest@example.com' }))
                      setStep('shipping')
                    }}
                    className="w-full text-primary text-sm font-medium py-2 rounded-lg border border-primary hover:bg-primary/5 transition"
                  >
                    Continue as Guest
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Shipping Form */}
          {step === 'shipping' && (
            <form onSubmit={handleSubmit} className="space-y-6 border border-border rounded-lg p-6 sm:p-8 bg-card animate-in fade-in slide-in-from-bottom duration-500">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Phone className="h-6 w-6 text-primary" />
                Shipping Information
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || currentUser?.email || ''}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition font-semibold transform hover:scale-105 duration-200"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {/* Payment Step */}
          {step === 'payment' && (
            <form onSubmit={handleSubmit} className="space-y-6 border border-border rounded-lg p-6 sm:p-8 bg-card animate-in fade-in slide-in-from-bottom duration-500">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-primary" />
                Payment Method
              </h2>

              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-muted/50 transition transform hover:scale-102 duration-200"
                  style={{borderColor: paymentMethod === 'card' ? 'var(--primary)' : 'var(--border)'}}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'card')}
                    className="mr-3 h-4 w-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Credit/Debit Card</div>
                    <div className="text-sm text-muted-foreground">Visa, Mastercard, American Express</div>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-muted/50 transition transform hover:scale-102 duration-200"
                  style={{borderColor: paymentMethod === 'other' ? 'var(--primary)' : 'var(--border)'}}>
                  <input
                    type="radio"
                    name="payment"
                    value="other"
                    checked={paymentMethod === 'other'}
                    onChange={(e) => setPaymentMethod(e.target.value as 'other')}
                    className="mr-3 h-4 w-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">PayPal / Other Methods</div>
                    <div className="text-sm text-muted-foreground">Available after order review</div>
                  </div>
                </label>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 pt-6 border-t border-border">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required={paymentMethod === 'card'}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required={paymentMethod === 'card'}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required={paymentMethod === 'card'}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleInputChange}
                        placeholder="123"
                        required={paymentMethod === 'card'}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep('shipping')}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition font-semibold transform hover:scale-105 duration-200"
                >
                  Review Order
                </button>
              </div>
            </form>
          )}

          {/* Review Step */}
          {step === 'review' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
              <div className="bg-card border border-border rounded-lg p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-foreground">Subtotal</span>
                    <span className="font-semibold text-foreground">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-foreground">Tax (10%)</span>
                    <span className="font-semibold text-foreground">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-foreground">Shipping</span>
                    <span className="font-semibold text-foreground">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-4">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep('payment')}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-primary text-primary rounded-lg hover:bg-primary/5 transition font-semibold"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 transition font-semibold transform hover:scale-105 duration-200 text-lg"
                >
                  Complete Order
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
