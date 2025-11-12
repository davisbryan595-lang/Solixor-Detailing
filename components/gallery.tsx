"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/luxury-black-car-ceramic-coating-shine.jpg",
    alt: "Ceramic Coated Black Luxury Car",
    category: "Ceramic",
  },
  {
    id: 2,
    src: "/car-before-after-paint-correction.jpg",
    alt: "Paint Correction Before & After",
    category: "Paint Correction",
  },
  {
    id: 3,
    src: "/headlight-restoration-clear-bright.jpg",
    alt: "Restored Clear Headlights",
    category: "Headlights",
  },
  {
    id: 4,
    src: "/pristine-glossy-car-detail-shine.jpg",
    alt: "Pristine Detailed Vehicle",
    category: "Ceramic",
  },
  {
    id: 5,
    src: "/professional-car-interior-detail-clean.jpg",
    alt: "Interior Detail Service",
    category: "All",
  },
  {
    id: 6,
    src: "/water-beads-ceramic-coating-protection.jpg",
    alt: "Water Beading on Ceramic Coating",
    category: "Ceramic",
  },
  {
    id: 7,
    src: "/swirl-mark-removal-paint-correction.jpg",
    alt: "Paint Correction Detail",
    category: "Paint Correction",
  },
  {
    id: 8,
    src: "/luxury-sports-car-polished-detail.jpg",
    alt: "Premium Sports Car Detail",
    category: "All",
  },
  {
    id: 9,
    src: "/crystal-clear-headlights-restored.jpg",
    alt: "Headlight Restoration Result",
    category: "Headlights",
  },
]

const categories = ["All", "Ceramic", "Paint Correction", "Headlights"]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const currentImage = filteredImages[currentImageIndex]

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length)
  }

  return (
    <section id="gallery" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-light mb-4">Before & After Mastery</h2>
          <p className="text-gray-400 text-lg">Witness the transformation</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setCurrentImageIndex(0)
              }}
              className={`px-6 py-2 rounded-lg font-medium transition-all relative ${
                activeCategory === cat
                  ? "text-black bg-yellow-400"
                  : "text-gray-300 border border-yellow-400/30 hover:border-yellow-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="active-category"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" layout>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedImage(image)
                setCurrentImageIndex(filteredImages.indexOf(image))
              }}
              className="group relative h-64 rounded-lg overflow-hidden cursor-pointer border border-yellow-400/10 hover:border-yellow-400/50 transition-all"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full"
              >
                <div className="relative rounded-lg overflow-hidden border-2 border-yellow-400">
                  <Image
                    src={currentImage.src || "/placeholder.svg"}
                    alt={currentImage.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />

                  {/* Navigation */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-300"
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-300"
                  >
                    <ChevronRight size={24} />
                  </motion.button>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-300 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  {/* Caption */}
                  <div className="bg-black/80 text-yellow-400 p-4 text-center">{currentImage.alt}</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
