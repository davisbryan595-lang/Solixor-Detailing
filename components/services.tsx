"use client"

import { motion } from "framer-motion"
import { Sparkles, Shield, Zap, Wrench, Eye, Palette } from "lucide-react"

const services = [
  {
    title: "Exterior Cleaning",
    price: "$150–$250",
    icon: Sparkles,
    description: "Professional wash, clay bar treatment, and protection coating application",
  },
  {
    title: "Interior Cleaning",
    price: "$180–$300",
    icon: Zap,
    description: "Vacuum, upholstery detail, leather conditioning, odor elimination",
  },
  {
    title: "Full Detail",
    price: "$400–$800",
    icon: Palette,
    description: "Complete exterior and interior detail with all premium services",
  },
  {
    title: "Ceramic Coating",
    price: "$900–$2,200",
    icon: Shield,
    description: "3–9 year protection with professional application and warranty",
  },
  {
    title: "Headlight Restoration",
    price: "$120",
    icon: Eye,
    description: "Remove oxidation and restore clarity for enhanced visibility",
  },
  {
    title: "Paint Correction",
    price: "$600–$1,800",
    icon: Wrench,
    description: "Professional swirl mark removal and paint enhancement",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-light mb-4">Our Services</h2>
          <p className="text-gray-400 text-lg">Precision. Protection. Perfection.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255, 215, 0, 0.2)" }}
                className="bg-secondary/30 border border-yellow-400/20 rounded-lg p-8 group hover:border-yellow-400/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  <span className="text-yellow-400 font-playfair text-lg">{service.price}</span>
                </div>
                <h3 className="text-2xl font-playfair font-light mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all font-medium"
                >
                  Details
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Promo Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 py-6 border-t border-b border-yellow-400/30 text-center"
        >
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-xl text-yellow-400 font-light tracking-wide"
          >
            ✦ Military & First Responders – 15% OFF ✦
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
