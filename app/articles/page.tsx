"use client"

import type React from "react"
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
        "An overview of career prospects, salary packages, and industries that recruit from top engineering colleges.",\
      date: "March
