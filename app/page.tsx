"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle, BookOpen, Users, Calendar, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const AnimatedSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "JEE Advanced 2023",
      content:
        "Non-stop's personalized coaching approach helped me understand complex Physics concepts that I had been struggling with for months. The one-on-one sessions were incredibly effective.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "NEET 2023",
      content:
        "The Chemistry sessions with Sheikh sir were game-changing for my NEET preparation. His approach to organic chemistry made even the most difficult reactions seem logical and easy to remember.",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      role: "JEE Mains 2024",
      content:
        "Mathematics was always my weak point until I joined Non-stop. Aditya sir's teaching methods and problem-solving techniques helped me improve my score from 65 to 92 in just three months.",
      rating: 4,
    },
  ]
// asd
  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 z-0"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full">
                <span className="text-blue-400 font-medium">Empowering future engineers</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Where Learning <span className="text-blue-500">Never Ends</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Personalized 1-to-1 coaching for JEE Mains/Advanced, NEET, and CUCET aspirants by NIT Durgapur
                engineering students who've been there and succeeded.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full">
                  <Link href="#courses">Explore Courses</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-full"
                >
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
              <div className="bg-navy-800/50 backdrop-blur-sm p-4 rounded-lg inline-block border border-blue-900/50">
                <p className="text-blue-400 font-bold">FIRST 3 SESSIONS FREE!</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-navy-800 to-navy-900 p-2 rounded-2xl border border-blue-900/50 shadow-xl">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/nonstop-flyer.png"
                    alt="Non-stop Coaching"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <Link href="#why-us" className="flex flex-col items-center text-gray-400 hover:text-blue-400">
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowRight className="h-5 w-5 transform rotate-90" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-800" id="why-us">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Non-stop?</h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                We're a team of passionate engineering students from NIT Durgapur, offering personalized guidance to
                help you achieve your dreams.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="bg-navy-700 p-8 rounded-xl shadow-lg hover:shadow-blue-900/20 hover:translate-y-[-5px] transition-all duration-300 border border-navy-600"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-white h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Personalized Learning</h3>
              <p className="text-gray-300">
                One-on-one sessions tailored to your learning style and pace, ensuring maximum understanding and
                retention.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-navy-700 p-8 rounded-xl shadow-lg hover:shadow-blue-900/20 hover:translate-y-[-5px] transition-all duration-300 border border-navy-600"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expert Mentors</h3>
              <p className="text-gray-300">
                Learn from JEE Advanced qualified students from NIT Durgapur who understand the exam pattern and
                requirements.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-navy-700 p-8 rounded-xl shadow-lg hover:shadow-blue-900/20 hover:translate-y-[-5px] transition-all duration-300 border border-navy-600"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Calendar className="text-white h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Flexible Schedule</h3>
              <p className="text-gray-300">
                Study at your convenience with on-demand access to teachers and flexible scheduling options.
              </p>
            </motion.div>
          </motion.div>

          <AnimatedSection className="mt-16">
            <div className="bg-gradient-to-r from-navy-700 to-navy-800 p-8 rounded-xl border border-navy-600">
              <h3 className="text-2xl font-bold text-white mb-6">Our Comprehensive Approach Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Instant Doubt Solving",
                  "Live Online one-to-one Q&A Discussion",
                  "Bring your own questions to discuss",
                  "PDF of the session available",
                  "Recording of the session available",
                  "Personalized study routine",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-500 h-6 w-6 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-navy-900" id="courses">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Programs</h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Tailored coaching programs for JEE, NEET, and CUCET aspirants
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-navy-800 to-navy-700 p-8 rounded-xl shadow-xl border border-navy-600 relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full text-sm inline-block mb-6">
                  2025-2027 Batches
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Full Online Classroom Program</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive coaching for 11th and 12th standard students preparing for JEE Mains/Advanced, NEET, and
                  CUCET.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "One-on-one personalized coaching",
                    "Customized study routine",
                    "Regular doubt solving sessions",
                    "Comprehensive notes preparation",
                    "On-demand teacher access",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-medium">
                    <Link href="#contact">Enroll Now</Link>
                  </Button>
                  <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-medium">
                    <Link href="https://wa.me/918945828056">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gradient-to-br from-navy-800 to-navy-700 p-8 rounded-xl shadow-xl border border-navy-600 relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full text-sm inline-block mb-6">
                  Last Minute Preparation
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">QAD Series</h3>
                <p className="text-gray-300 mb-6">
                  Question and Answer Discussion series for last-minute practice before JEE, NEET, and CUCET exams.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Focus on important questions",
                    "Concept clarity sessions",
                    "Problem-solving techniques",
                    "Time management strategies",
                    "Mock test discussions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-500 h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-medium">
                    <Link href="#contact">Learn More</Link>
                  </Button>
                  <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-medium">
                    <Link href="https://wa.me/918945828056">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-2"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-16 text-center">
            <div className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-xl text-xl shadow-lg">
              FIRST 3 SESSIONS FREE!
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy-800">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What Our Students Say</h2>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Hear from students who have transformed their preparation journey with Non-stop
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-navy-700 p-8 rounded-xl shadow-xl border border-navy-600 relative">
                <div className="absolute -top-6 -left-6">
                  <div className="text-blue-500 text-8xl">"</div>
                </div>
                <div className="pt-6">
                  <p className="text-gray-200 text-lg mb-6">{testimonials[activeTestimonial].content}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold">{testimonials[activeTestimonial].name}</p>
                      <p className="text-gray-400">{testimonials[activeTestimonial].role}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonials[activeTestimonial].rating ? "text-yellow-500" : "text-gray-600"
                          }`}
                          fill={i < testimonials[activeTestimonial].rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            



