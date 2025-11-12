"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-400/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/solixor-removebg-preview-GpGrS2KdNvrJtu21lxc7aGa4SWnKnI.png"
                alt="Solixor"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-playfair text-lg text-yellow-400">SOLIXOR</span>
            </div>
            <p className="text-gray-400 text-sm">Premium auto detailing in Central Texas</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="font-playfair text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Gallery", "Pricing"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="font-playfair text-lg mb-4 text-white">Contact</h3>
            <p className="text-gray-400 text-sm mb-2">
              <a href="tel:254-975-0864" className="hover:text-yellow-400 transition-colors">
                254-975-0864
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              <a href="mailto:thedetailingscientist@gmail.com" className="hover:text-yellow-400 transition-colors">
                thedetailingscientist@gmail.com
              </a>
            </p>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="font-playfair text-lg mb-4 text-white">Follow Us</h3>
            <a
              href="https://www.facebook.com/profile.php?id=61576909141492"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm inline-block"
            >
              Facebook
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-400/20 pt-8 mt-8">
          <p className="text-center text-gray-500 text-sm">© 2025 Solixor Detailing. Serving All of Central Texas.</p>
        </div>
      </div>
    </footer>
  )
}
