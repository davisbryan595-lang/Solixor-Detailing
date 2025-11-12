"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Signature Detail",
    price: "$450",
    description: "Perfect for regular maintenance",
    features: [
      "Full exterior + interior",
      "6-hour service",
      "Professional wash & clay",
      "Interior vacuum & condition",
      "Wheel & trim detail",
    ],
  },
  {
    name: "Ceramic Pro Package",
    price: "$1,400",
    description: "Ultimate protection & shine",
    features: [
      "9H ceramic coating",
      "5-year warranty",
      "Paint correction included",
      "Premium tire shine",
      "All Signature features",
      "Mobile service available",
    ],
    featured: true,
  },
  {
    name: "Elite Correction",
    price: "$1,200",
    description: "Professional paint restoration",
    features: [
      "Stage 2 paint correction",
      "Headlight restoration",
      "Ceramic coating application",
      "Full detail service",
      "Swirl mark removal",
      "Professional finishing",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-light mb-4">Transparent Luxury Pricing</h2>
          <p className="text-gray-400 text-lg">Serving All of Central Texas | Mobile Service Available</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: tier.featured ? 1.02 : 1.01 }}
              className={`relative rounded-lg border-2 p-8 transition-all ${
                tier.featured
                  ? "border-yellow-400 bg-yellow-400/5 shadow-lg shadow-yellow-400/10"
                  : "border-yellow-400/30 bg-secondary/30 hover:border-yellow-400/50"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                  POPULAR
                </div>
              )}

              <h3 className="text-3xl font-playfair font-light mb-2">{tier.name}</h3>
              <p className="text-gray-400 mb-4">{tier.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-playfair text-yellow-400">{tier.price}</span>
                <p className="text-gray-400 text-sm mt-2">Per service</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-medium mb-8 transition-all ${
                  tier.featured
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                }`}
              >
                {tier.featured ? "Book Now" : "Inquire"}
              </motion.button>

              <div className="space-y-4">
                {tier.features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
