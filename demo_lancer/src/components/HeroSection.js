// components/HeroSection.js
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HeroSection({ config }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const slideUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const slideInFromLeft = {
    hidden: { 
      opacity: 0, 
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }
    }
  }

  const slideInFromRight = {
    hidden: { 
      opacity: 0, 
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.9, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.4
      }
    }
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.6
      }
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: { 
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      
      {/* Professional Background with Original Colors */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
        
        {/* Subtle animated background shapes */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 90, 0],
            opacity: [0.05, 0.03, 0.05]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="text-center lg:text-left text-white order-2 lg:order-1"
          >
            
            {/* Clean Professional Badge */}
            <motion.div
              variants={slideInFromLeft}
              className="mb-2"
            >
              <span className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-blue-200 text-sm font-medium border border-white/20 shadow-lg">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                Professional Coaching Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={slideUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                {config?.hero?.headline || "Transform Your Coaching Business"}
              </span>
            </motion.h1>

            <motion.p
              variants={slideUpVariants}
              className="text-lg sm:text-xl text-gray-200/90 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
            >
              {config?.hero?.subheadline || "Leverage advanced tools and proven methodologies to scale your coaching practice and deliver exceptional results for your clients."}
            </motion.p>

            {/* Professional CTA Buttons */}
            <motion.div
              variants={slideUpVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg text-lg shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
              >
                <span className="relative z-10">
                  {config?.hero?.ctaText || "Schedule Consultation"}
                </span>
              </motion.button>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </motion.div>

            {/* Professional Stats Grid */}
            <motion.div
              variants={slideUpVariants}
              className="grid grid-cols-3 gap-6 lg:gap-8 border-t border-white/10 pt-8"
            >
              {[
                { number: "500+", label: "Coaches Served", sublabel: "Globally" },
                { number: "92%", label: "Client Retention", sublabel: "Rate" },
                { number: "15+", label: "Years Experience", sublabel: "Industry" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Professional Visual */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              
              {/* Main Professional Card */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl"
              >
                <div className="text-center text-white">
                  
                  {/* Professional Icon */}
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">
                    Professional Excellence
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Empowering coaches with cutting-edge technology and proven business strategies
                  </p>
                  
                  {/* Professional Features */}
                  <div className="space-y-3">
                    {[
                      "Advanced Analytics Dashboard",
                      "Client Management System", 
                      "Automated Business Tools"
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        className="flex items-center justify-center text-xs text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Professional Floating Elements */}
              <motion.div
                animate={{
                  y: [8, -8, 8],
                  rotate: [0, 3, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl flex items-center justify-center shadow-xl"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </motion.div>

              <motion.div
                animate={{
                  x: [6, -6, 6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Clean Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60 text-center cursor-pointer hover:text-white/80 transition-colors"
        >
          <p className="text-sm mb-3 font-medium">Discover More</p>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full mx-auto relative hover:border-white/40 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/40 rounded-full mx-auto mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
