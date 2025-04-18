"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function ArticlesPage() {
  const articles = [
    {
      id: "study-routine",
      title: "Creating an Effective Study Routine for Competitive Exams",
      description:
        "Learn how to structure your day for maximum productivity and retention while preparing for JEE, NEET, or CUCET.",
      date: "April 10, 2025",
      readTime: "8 min read",
      category: "Study Tips",
      image: "/images/study-routine.jpg",
    },
    {
      id: "21-day-habit",
      title: "The 21-Day Study Habit Challenge for Beginners",
      description:
        "How to build consistent study habits in just 21 days that will transform your exam preparation journey.",
      date: "April 5, 2025",
      readTime: "6 min read",
      category: "Habits",
      image: "/images/habit.jpg",
    },
    {
      id: "consistency-importance",
      title: "Why Consistency is the Key to Cracking Competitive Exams",
      description: "Discover why consistent effort over time beats cramming and how to maintain your study momentum.",
      date: "March 28, 2025",
      readTime: "7 min read",
      category: "Motivation",
      image: "/images/consistency.jpg",
    },
    {
      id: "life-after-selection",
      title: "Life After Selection: What to Expect at IITs and NITs",
      description:
        "A glimpse into campus life, academic challenges, and opportunities that await you at India's premier technical institutions.",
      date: "March 20, 2025",
      readTime: "10 min read",
      category: "College Life",
      image: "/images/iit-campus.jpg",
    },
    {
      id: "placement-opportunities",
      title: "Placement Opportunities After B.Tech from IITs and NITs",
      description:
        "An overview of career prospects, salary packages, and industries that recruit from top engineering colleges.",
      date: "March 15, 2025",
      readTime: "9 min read",
      category: "Career",
      image: "/images/placement.jpg",
    },
    {
      id: "physics-preparation",
      title: "Mastering Physics for JEE: A Comprehensive Approach",
      description:
        "Expert strategies and resource recommendations to excel in the Physics section of JEE Mains and Advanced.",
      date: "March 8, 2025",
      readTime: "11 min read",
      category: "Subject Guide",
      image: "/images/physics.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-navy-900">
      <section className="relative py-20 md:py-28 bg-navy-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 z-0"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Articles & Resources</h1>
              <p className="text-xl text-gray-300">
                Insights, tips, and guidance to help you navigate your competitive exam preparation journey.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-navy-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article) => (
              <motion.div key={article.id} variants={fadeIn}>
                <Card className="bg-navy-700 border-navy-600 overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 hover:translate-y-[-5px] transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                      {article.category}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white">{article.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {article.date} · {article.readTime}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300 flex-grow">
                    <p>{article.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0"
                    >
                      <Link href={`/articles/${article.id}`} className="flex items-center gap-2">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
