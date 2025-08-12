// app/page.tsx
"use client"
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { businessConfig } from '@/config/businessConfig'

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar config={businessConfig} />
      <HeroSection config={businessConfig} />
      <AboutSection config={businessConfig} />
      <ServicesSection config={businessConfig} />
      <TestimonialsSection config={businessConfig} />
      <CTASection config={businessConfig} />
      <Footer config={businessConfig} />
    </main>
  )
}
