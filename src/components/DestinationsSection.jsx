import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ArrowRight, X } from 'lucide-react'

const DestinationsSection = () => {
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const destinations = [
    {
      name: 'Dubai',
      description:
        'Luxury shopping, stunning architecture, and world-class hospitality.',

      imageUrl:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop&q=80',

      gallery: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop&q=80',

        'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1200&auto=format&fit=crop&q=80',

        'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80',
      ],
    },

    {
      name: 'Saudi Arabia',
      description:
        'Rich cultural heritage, spiritual pilgrimages, and modern luxury.',

      imageUrl:
        'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=1200&auto=format&fit=crop&q=80',

      gallery: [
        'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=1200&auto=format&fit=crop&q=80',

        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&auto=format&fit=crop&q=80',

        'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&auto=format&fit=crop&q=80',
      ],
    },

    {
      name: 'Singapore',
      description:
        'Modern cityscape, multicultural experiences, and innovative attractions.',

      imageUrl:
        'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&auto=format&fit=crop&q=80',

      gallery: [
        'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&auto=format&fit=crop&q=80',

        'https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=1200&auto=format&fit=crop&q=80',

        'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1200&auto=format&fit=crop&q=80',
      ],
    },

    {
  name: 'Malaysia',
  description:
    'Twin towers, tropical rainforests, and diverse cultural experiences.',

  imageUrl:
    'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=1200&auto=format&fit=crop&q=80',

  gallery: [
    // Petronas Twin Towers
    'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?w=1200&auto=format&fit=crop&q=80',

    // Kuala Lumpur skyline
    'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&auto=format&fit=crop&q=80',

    // Batu Caves Malaysia
    'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&auto=format&fit=crop&q=80',
  ],
},
    {
      name: 'Turkey',
      description:
        'Historic landmarks, stunning coastlines, and rich Ottoman heritage.',

      imageUrl:
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&auto=format&fit=crop&q=80',

      gallery: [
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&auto=format&fit=crop&q=80',

        'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&auto=format&fit=crop&q=80',

        'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1200&auto=format&fit=crop&q=80',
      ],
    },

    {
      name: 'Maldives',
      description:
        'Paradise islands, crystal-clear waters, and luxurious resorts.',

      imageUrl:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80',

      gallery: [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80',

        'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&auto=format&fit=crop&q=80',

        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&auto=format&fit=crop&q=80',
      ],
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedDestination.gallery.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedDestination.gallery.length - 1 : prev - 1
    )
  }

  return (
    <section
      id="destinations"
      className="py-24 px-4 relative bg-gradient-to-br from-white via-blue-50 to-slate-50 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-main/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary-dark tracking-tight">
            Popular <span className="text-primary-main">Destinations</span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-main to-accent-main mx-auto mb-6 rounded-full"></div>

          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Explore our carefully selected premium travel destinations worldwide
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-3xl min-h-[430px] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 group hover:scale-[1.02] hover:shadow-blue-200/50">

                {/* Image */}
                <img
                  src={dest.imageUrl}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>

                {/* Top Tag */}
                <div className="relative z-10 p-6">
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 px-4 py-2 rounded-2xl">
                    <MapPin size={16} className="text-white" />

                    <span className="text-xs font-bold text-white uppercase tracking-widest">
                      {dest.name}
                    </span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <div className="mt-auto">
                    <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                      {dest.name}
                    </h3>

                    <p className="text-slate-200 text-base leading-relaxed mb-6 min-h-[70px]">
                      {dest.description}
                    </p>

                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        setSelectedDestination(dest)
                        setCurrentImageIndex(0)
                      }}
                      className="flex items-center gap-2 text-white font-semibold text-sm bg-primary-main/90 hover:bg-primary-main px-5 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
                    >
                      <span>Explore</span>

                      <ArrowRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-5 right-5 z-20 bg-white/80 hover:bg-red-500 hover:text-white text-black p-3 rounded-full transition-all duration-300"
              >
                <X size={22} />
              </button>

              {/* Image */}
              <img
                src={selectedDestination.gallery[currentImageIndex]}
                alt={selectedDestination.name}
                className="w-full h-[500px] object-cover"
              />

              {/* Previous */}
              <button
                onClick={prevImage}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-4 py-3 rounded-full transition"
              >
                ←
              </button>

              {/* Next */}
              <button
                onClick={nextImage}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-4 py-3 rounded-full transition"
              >
                →
              </button>

              {/* Bottom Text */}
              <div className="p-8">
                <h2 className="text-4xl font-bold text-primary-dark mb-4">
                  {selectedDestination.name}
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {selectedDestination.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default DestinationsSection