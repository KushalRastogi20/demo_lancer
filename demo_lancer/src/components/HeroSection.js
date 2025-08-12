// components/HeroSection.js
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection({ config }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        delay: 0.4
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <Image
          src='/img6.jpg'
          alt="Hero Background"
          fill
          className="object-cover opacity-30"
          priority
          quality={85}
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left text-white"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            >
              {config.hero.headline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
            >
              {config.hero.subheadline}
            </motion.p>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-orange-500/25 transition-shadow duration-300"
            >
              {config.hero.ctaText}
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative lg:block hidden"
          >
            <div className="relative">
              {/* <Image
                src="/img6.jpg"
                alt="Hero Illustration"
                width={600}
                height={500}
                className="drop-shadow-2xl"
                priority
              /> */}
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80"
              />
              <motion.div
                animate={{
                  y: [10, -10, 10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-70"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/70 text-center"
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mx-auto mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
