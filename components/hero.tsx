"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="animated-gradient-bg absolute inset-0" />
        <img
          src="/luxury-black-car-ceramic-coating-water-beads.jpg"
          alt="Luxury Car Detailing"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-light text-white mb-4 tracking-wide">
            SOLIXOR DETAILING
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl text-yellow-400 font-light tracking-widest mb-2"
          >
            The Science of Shine
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-300 mb-8 font-light"
          >
            Premium Auto Detailing | Central Texas
          </motion.p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="#gallery"
            className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all"
          >
            View Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-300 transition-all"
          >
            Book Detail
          </Link>
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 left-0 right-0 px-4"
        >
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
            <div>
              <motion.div
                className="text-4xl font-playfair text-yellow-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                500+
              </motion.div>
              <p className="text-sm text-gray-400">Cars Detailed</p>
            </div>
            <div>
              <motion.div
                className="text-4xl font-playfair text-yellow-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                9H
              </motion.div>
              <p className="text-sm text-gray-400">Ceramic Certified</p>
            </div>
            <div>
              <motion.div
                className="text-4xl font-playfair text-yellow-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                5★
              </motion.div>
              <p className="text-sm text-gray-400">Rating Always</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400"
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
