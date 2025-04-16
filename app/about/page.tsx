"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"

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

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-navy-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 z-0"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Non-stop</h1>
              <p className="text-xl text-gray-300">
                Empowering future engineers through personalized coaching and mentorship
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-navy-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-navy-700 to-navy-800 p-2 rounded-2xl border border-blue-900/50 shadow-xl">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src="/images/nonstop-logo.png"
                      alt="Non-stop Logo"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain p-8"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our Story</h2>
                <p className="text-gray-300">
                  NONSTOP – Where Learning Never Ends – was built to guide, mentor, and inspire students with focused
                  attention, conceptual clarity, and structured support.
                </p>
                <p className="text-gray-300">
                  We are a team of passionate engineering students from NIT Durgapur, offering personalized 1-to-1
                  sessions to JEE Mains/Advanced, NEET, and CUCET aspirants through our initiative.
                </p>
                <p className="text-gray-300">
                  Having successfully navigated the competitive exam journey ourselves, we understand the challenges and
                  pressures students face. Our approach combines academic excellence with practical strategies that
                  helped us succeed in our own JEE Advanced exams.
                </p>
                <p className="text-gray-300">
                  We believe that personalized attention is key to unlocking each student's potential. That's why we
                  focus on one-on-one coaching that addresses individual learning styles, strengths, and areas for
                  improvement.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 mt-4">
                  <Link href="/#courses">Explore Our Programs</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300">
                To empower students with the knowledge, skills, and confidence needed to excel in competitive exams and
                build successful careers in engineering and medicine.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="bg-navy-800 p-8 rounded-xl border border-navy-700 shadow-lg hover:shadow-blue-900/20 hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quality Education</h3>
                <p className="text-gray-300">
                  Delivering high-quality education that focuses on conceptual understanding rather than rote
                  memorization, ensuring students develop problem-solving skills that last a lifetime.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-navy-800 p-8 rounded-xl border border-navy-700 shadow-lg hover:shadow-blue-900/20 hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Personalized Approach</h3>
                <p className="text-gray-300">
                  Recognizing that each student is unique, we tailor our teaching methods to individual learning styles,
                  ensuring maximum comprehension and retention.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-navy-800 p-8 rounded-xl border border-navy-700 shadow-lg hover:shadow-blue-900/20 hover:translate-y-[-5px] transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Continuous Innovation</h3>
                <p className="text-gray-300">
                  Constantly evolving our teaching methodologies and materials to incorporate the latest exam patterns,
                  technologies, and educational research.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Team - Tutors */}
      <section className="py-20 bg-navy-800">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Tutors</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Meet our team of specialized instructors who are passionate about helping you succeed
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="group">
              <div className="bg-navy-700 rounded-xl overflow-hidden shadow-xl border border-navy-600 transition-all duration-300 group-hover:shadow-blue-900/20 group-hover:translate-y-[-5px]">
                <div className="h-80 relative overflow-hidden">
                  <Image
                    src="/images/aman.png"
                    alt="Aman Singh Rathore"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-10 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    <span className="font-bold">Physics Specialist</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-2">Aman Singh Rathore</h3>
                  <p className="text-blue-400 font-medium">B.Tech in Electrical Engineering</p>
                  <p className="text-gray-300 mt-4">
                    JEE Advanced Qualified graduate from NIT Durgapur with a passion for making Physics concepts
                    accessible and engaging for all students.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="group">
              <div className="bg-navy-700 rounded-xl overflow-hidden shadow-xl border border-navy-600 transition-all duration-300 group-hover:shadow-blue-900/20 group-hover:translate-y-[-5px]">
                <div className="h-80 relative overflow-hidden">
                  <Image
                    src="/images/joyeb.png"
                    alt="Sheikh MD Joyeb"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-10 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    <span className="font-bold">Chemistry Specialist</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-2">Sheikh MD Joyeb</h3>
                  <p className="text-blue-400 font-medium">B.Tech in Chemical Engineering</p>
                  <p className="text-gray-300 mt-4">
                    JEE Advanced Qualified graduate from NIT Durgapur who excels at breaking down complex chemical
                    concepts into simple, understandable components.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="group">
              <div className="bg-navy-700 rounded-xl overflow-hidden shadow-xl border border-navy-600 transition-all duration-300 group-hover:shadow-blue-900/20 group-hover:translate-y-[-5px]">
                <div className="h-80 relative overflow-hidden">
                  <Image
                    src="/images/aditya.png"
                    alt="Aditya Kumar Singh"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-10 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    <span className="font-bold">Mathematics Specialist</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-2">Aditya Kumar Singh</h3>
                  <p className="text-blue-400 font-medium">B.Tech in Mechanical Engineering</p>
                  <p className="text-gray-300 mt-4">
                    JEE Advanced Qualified graduate from NIT Durgapur with a knack for making mathematics approachable
                    and building students' problem-solving abilities.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Operations Team */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Operations Team</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                The dedicated professionals who ensure smooth functioning of our programs
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="bg-navy-800 rounded-xl overflow-hidden shadow-xl border border-navy-600 transition-all duration-300 hover:shadow-blue-900/20 group">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-80 md:h-auto">
                    <Image
                      src="/images/bibek.png"
                      alt="Bibek Yadav"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-transparent opacity-60 md:block hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60 md:hidden"></div>
                  </div>
                  <div className="md:w-3/5 p-8 relative">
                    <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                      <span className="font-bold">Operations Lead</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-6">Bibek Yadav</h3>
                    <p className="text-blue-400 font-medium">B.Tech in Computer Science Engineering</p>
                    <p className="text-gray-300 mt-4">
                      JEE Advanced Qualified graduate from NIT Durgapur who oversees all operational aspects of
                      Non-stop. Bibek ensures that our systems run smoothly, allowing our tutors to focus entirely on
                      teaching.
                    </p>
                    <p className="text-gray-300 mt-4">
                      With his background in Computer Science, Bibek has implemented innovative technological solutions
                      to enhance the learning experience for our students, including our online classroom platform and
                      resource management systems.
                    </p>
                    <div className="mt-6 flex gap-4">
                      <Link href="/#contact" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                        Contact <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-800">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Students Choose Us</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                What sets Non-stop apart from other coaching institutes
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-navy-700 p-8 rounded-xl border border-navy-600 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Our Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600/20 p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Personalized Learning Plans</p>
                      <p className="text-gray-300">
                        Customized study schedules and materials based on individual strengths and weaknesses
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600/20 p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Concept-Based Teaching</p>
                      <p className="text-gray-300">
                        Focus on building strong fundamentals rather than just solving problems
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600/20 p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Regular Progress Tracking</p>
                      <p className="text-gray-300">Continuous assessment and feedback to ensure steady improvement</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600/20 p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Doubt Resolution Priority</p>
                      <p className="text-gray-300">
                        Immediate attention to questions and difficulties to prevent learning gaps
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-navy-700 p-8 rounded-xl border border-navy-600 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Our Difference</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600/20 p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Taught by Recent Qualifiers</p>
                      <p className="text-gray-300">
                        Our tutors have recently cleared the same exams, understanding current patterns and challenges
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600/20 p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Small Batch Sizes</p>
                      <p className="text-gray-300">
                        Limited enrollment ensures each student receives adequate attention
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600/20 p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Holistic Development</p>
                      <p className="text-gray-300">
                        Focus on building not just knowledge but also confidence, time management, and exam temperament
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-600/20 p-1 rounded-full mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Affordable Excellence</p>
                      <p className="text-gray-300">
                        Quality education at reasonable rates with flexible payment options
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Preparation?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join Non-stop today and experience the difference personalized coaching can make in your competitive
                exam journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full">
                  <Link href="/#courses">Explore Courses</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-full"
                >
                  <Link href="/#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
