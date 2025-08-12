// components/CTASection.js
'use client'

import { motion } from 'framer-motion'

export default function CTASection({ config }) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {config.type === 'coaching' && "Ready to Start Your Journey?"}
            {config.type === 'bakery' && "Taste the Difference Today!"}
            {config.type === 'restaurant' && "Reserve Your Table Now!"}
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {config.type === 'coaching' && "Join thousands of successful students who transformed their lives with our expert guidance."}
            {config.type === 'bakery' && "Experience freshly baked goodness made with love and the finest ingredients."}
            {config.type === 'restaurant' && "Indulge in an exceptional dining experience crafted by our award-winning chefs."}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold py-4 px-12 rounded-full text-lg hover:bg-gray-50 transition-colors duration-300 shadow-2xl"
          >
            {config.type === 'coaching' && "Enroll Today – Start Your Journey"}
            {config.type === 'bakery' && "Order Fresh – Taste the Love"}
            {config.type === 'restaurant' && "Book Table – Taste Excellence"}
          </motion.button>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="font-semibold">{config.contact.phone}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-2xl mb-2">✉️</div>
              <div className="font-semibold">{config.contact.email}</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="text-2xl mb-2">📍</div>
              <div className="font-semibold">{config.contact.address}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
