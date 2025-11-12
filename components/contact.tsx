"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    date: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", vehicle: "", service: "", date: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-light mb-4">Your Car Deserves the Best</h2>
          <p className="text-gray-400 text-lg">Get in touch to schedule your detailing service</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-playfair mb-1">Phone</h3>
                <a href="tel:254-975-0864" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  254-975-0864
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-playfair mb-1">Email</h3>
                <a
                  href="mailto:thedetailingscientist@gmail.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  thedetailingscientist@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-playfair mb-1">Service Area</h3>
                <p className="text-gray-300">Serving All of Central Texas</p>
                <p className="text-gray-400 text-sm">Mobile Service Available</p>
              </div>
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=61576909141492"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-yellow-400 hover:text-yellow-300 transition-colors mt-4"
            >
              Follow on Facebook →
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-card border-b-2 border-yellow-400/30 focus:border-yellow-400 px-0 py-3 outline-none text-white placeholder-gray-500 transition-colors"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-card border-b-2 border-yellow-400/30 focus:border-yellow-400 px-0 py-3 outline-none text-white placeholder-gray-500 transition-colors"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-card border-b-2 border-yellow-400/30 focus:border-yellow-400 px-0 py-3 outline-none text-white placeholder-gray-500 transition-colors"
              required
            />

            <input
              type="text"
              name="vehicle"
              placeholder="Vehicle Model"
              value={formData.vehicle}
              onChange={handleChange}
              className="w-full bg-card border-b-2 border-yellow-400/30 focus:border-yellow-400 px-0 py-3 outline-none text-white placeholder-gray-500 transition-colors"
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-card border-b-2 border-yellow-400/30 focus:border-yellow-400 px-0 py-3 outline-none text-white transition-colors"
              required
            >
              <option value="">Select a Service</option>
              <option value="exterior">Exterior Cleaning</option>
              <option value="interior">Interior Cleaning</option>
              <option value="detail">Full Detail</option>
              <option value="ceramic">Ceramic Coating</option>
              <option value="headlight">Headlight Restoration</option>
              <option value="paint">Paint Correction</option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-card border-b-2 border-yellow-400/30 focus:border-yellow-400 px-0 py-3 outline-none text-white transition-colors"
              required
            />

            <textarea
              name="message"
              placeholder="Additional Details"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-card border-b-2 border-yellow-400/30 focus:border-yellow-400 px-0 py-3 outline-none text-white placeholder-gray-500 transition-colors resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-300 transition-all"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
