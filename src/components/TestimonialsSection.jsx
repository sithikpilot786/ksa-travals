import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, MessageSquare, Check } from 'lucide-react'

const TestimonialsSection = () => {
  const [reviews, setReviews] = useState([])

  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Form State
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [rating, setRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !comment.trim()) return

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      location: location.trim() || 'Traveler',
      rating,
      comment: comment.trim(),
      initials: name.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    }

    setReviews([newReview, ...reviews])
    setSubmitted(true)
    
    // Reset fields
    setName('')
    setLocation('')
    setRating(5)
    setComment('')

    // Reset alert
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setSubmitted(false)
      timeoutRef.current = null
    }, 4000)
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Client <span className="text-primary-main">Reviews</span>
          </h2>
          <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-primary-main to-accent-main"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Read verified feedback from travelers or share your experience directly with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Active reviews list */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-2">
              <MessageSquare className="text-primary-main" size={24} />
              <span>Verified Client Reviews ({reviews.length})</span>
            </h3>

            <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence initial={false}>
                {reviews.map((rev) => (
                  <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-primary-main/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-main text-white font-bold text-base shadow-sm">
                          {rev.initials}
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-950">{rev.name}</h4>
                          <p className="text-xs text-slate-500 font-medium">{rev.location}</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400 font-semibold bg-white px-2.5 py-1 rounded-lg border border-slate-100">{rev.date}</span>
                    </div>

                    {/* Star Rating using Accent Color (Amber Gold) */}
                    <div className="flex gap-1 mb-3 text-accent-main">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < rev.rating ? "fill-accent-main text-accent-main" : "text-slate-200"} 
                        />
                      ))}
                    </div>

                    <p className="text-slate-700 text-sm leading-relaxed italic bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                      "{rev.comment}"
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
              {reviews.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 text-slate-600"
                >
                  <h4 className="text-lg font-semibold mb-2">No reviews yet</h4>
                  <p className="text-sm leading-relaxed">
                    We value real user feedback. Submit your review using the form on the right.
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column: Give a review form */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Write a Review</h3>
                <p className="text-slate-500 text-sm mb-6">Your feedback helps us continuously improve our travel services.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm flex items-center gap-2"
                    >
                      <Check size={18} className="text-emerald-600" />
                      <span className="font-medium">Thank you! Review posted successfully.</span>
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-main focus:ring-1 focus:ring-primary-main/20 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Location / Destination Visited</label>
                    <input
                      type="text"
                      placeholder="Destination, city, or travel purpose"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-main focus:ring-1 focus:ring-primary-main/20 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Your Rating *</label>
                    <div className="flex gap-1.5 items-center bg-slate-50 p-3 rounded-xl border border-slate-200 w-fit">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="focus:outline-none transition-transform active:scale-90"
                        >
                          <Star
                            size={26}
                            className={`${
                              star <= (hoverRating || rating)
                                ? 'fill-accent-main text-accent-main'
                                : 'text-slate-200'
                            } transition-colors duration-150`}
                          />
                        </button>
                      ))}
                      <span className="text-sm font-bold text-slate-600 ml-3">{rating} out of 5</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Review Comment *</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Share your honest experience with our service..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary-main focus:ring-1 focus:ring-primary-main/20 transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-main text-white py-3.5 rounded-xl font-bold hover:bg-primary-dark hover:shadow-lg transition duration-300 text-sm shadow-md flex items-center justify-center gap-2"
                  >
                    Post Review
                  </button>
                </form>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
