"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const articleImages = {
    "study-routine": "/images/study-routine.jpg",
    "21-day-habit": "/images/habit.jpg",
    "consistency-importance": "/images/consistency.jpg",
    "life-after-selection": "/images/iit-campus.jpg",
    "placement-opportunities": "/images/placement.jpg",
    "physics-preparation": "/images/physics.jpg",
  }

  const articles = {
    "study-routine": {
      title: "Creating an Effective Study Routine for Competitive Exams",
      date: "April 10, 2025",
      author: "Bibek Yadav",
      image: articleImages["study-routine"],
      content: `
        <p>Preparing for competitive exams like JEE, NEET, or CUCET requires not just hard work but smart work. A well-structured study routine can make all the difference in your preparation journey.</p>
        
        <h2>Why a Study Routine Matters</h2>
        <p>A consistent study routine helps your brain form patterns and improves retention. It also ensures that you cover all subjects systematically without neglecting any important topics.</p>
        
        <h2>Creating Your Personalized Routine</h2>
        <p>Start by analyzing your energy levels throughout the day. Are you more alert in the morning or evening? Schedule your most challenging subjects during your peak concentration hours.</p>
        
        <h3>Sample Daily Schedule</h3>
        <ul>
          <li><strong>5:30 AM - 6:00 AM:</strong> Wake up and light exercise</li>
          <li><strong>6:00 AM - 8:00 AM:</strong> Study session 1 (Focus on conceptual understanding)</li>
          <li><strong>8:00 AM - 9:00 AM:</strong> Breakfast and short break</li>
          <li><strong>9:00 AM - 12:00 PM:</strong> Study session 2 (Problem-solving)</li>
          <li><strong>12:00 PM - 2:00 PM:</strong> Lunch and rest</li>
          <li><strong>2:00 PM - 5:00 PM:</strong> Study session 3 (New topics)</li>
          <li><strong>5:00 PM - 6:00 PM:</strong> Physical activity/relaxation</li>
          <li><strong>6:00 PM - 8:00 PM:</strong> Study session 4 (Revision)</li>
          <li><strong>8:00 PM - 9:00 PM:</strong> Dinner</li>
          <li><strong>9:00 PM - 10:30 PM:</strong> Final revision and planning for next day</li>
          <li><strong>10:30 PM:</strong> Sleep</li>
        </ul>
        
        <h2>Balancing Subjects</h2>
        <p>Allocate time to each subject based on your strengths and weaknesses. Spend more time on challenging subjects but don't neglect your strong areas.</p>
        
        <h2>The Importance of Breaks</h2>
        <p>Short breaks between study sessions help prevent burnout and improve focus. Use techniques like the Pomodoro method (25 minutes of focused study followed by a 5-minute break).</p>
        
        <h2>Weekly Planning</h2>
        <p>Set specific goals for each week. Review your progress every Sunday and adjust your plan for the coming week. Include buffer time for unexpected events or difficult topics that might require extra attention.</p>
        
        <h2>Consistency is Key</h2>
        <p>The most effective routine is one that you can follow consistently. Start with realistic goals and gradually increase your study hours as you build stamina.</p>
        
        <h2>Final Thoughts</h2>
        <p>Remember that everyone's ideal routine is different. Experiment with different schedules until you find what works best for you. The goal is to create a sustainable system that maximizes your learning potential while maintaining your well-being.</p>
      `,
    },
    "21-day-habit": {
      title: "The 21-Day Study Habit Challenge for Beginners",
      date: "April 5, 2025",
      author: "Aman Singh Rathore",
      image: articleImages["21-day-habit"],
      content: `
        <p>Building consistent study habits is one of the most challenging aspects of exam preparation. The 21-day challenge is designed to help you establish a solid foundation for long-term success.</p>
        
        <h2>The Science Behind Habit Formation</h2>
        <p>Research suggests that it takes approximately 21 days to form a new habit. By committing to a specific study routine for three weeks, you can transform occasional studying into an automatic behavior.</p>
        
        <h2>The 21-Day Challenge Structure</h2>
        
        <h3>Week 1: Establishing the Foundation</h3>
        <p>Start with just 1-2 hours of focused study each day. The goal is consistency, not quantity.</p>
        <ul>
          <li>Day 1-3: Set up your study environment and gather resources</li>
          <li>Day 4-7: Establish a fixed study time and stick to it no matter what</li>
        </ul>
        
        <h3>Week 2: Building Momentum</h3>
        <p>Increase your study time to 2-3 hours daily. Introduce specific subject goals.</p>
        <ul>
          <li>Day 8-10: Add a second study session to your day</li>
          <li>Day 11-14: Implement active learning techniques like practice problems</li>
        </ul>
        
        <h3>Week 3: Solidifying the Habit</h3>
        <p>Aim for 3-4 hours of quality study time. Focus on challenging yourself.</p>
        <ul>
          <li>Day 15-18: Introduce timed practice tests</li>
          <li>Day 19-21: Review your progress and plan for continued growth</li>
        </ul>
        
        <h2>Tips for Success</h2>
        
        <h3>1. Start Small</h3>
        <p>Begin with achievable goals to build confidence. It's better to consistently study for 30 minutes than to burn out after a 6-hour marathon.</p>
        
        <h3>2. Create Triggers</h3>
        <p>Associate your study time with specific cues, like studying right after breakfast or after a short evening walk.</p>
        
        <h3>3. Remove Distractions</h3>
        <p>Put your phone in another room, use website blockers, and create a dedicated study space.</p>
        
        <h3>4. Track Your Progress</h3>
        <p>Keep a habit tracker and mark each day you complete your study goal. Don't break the chain!</p>
        
        <h3>5. Reward Yourself</h3>
        <p>Create small rewards for hitting milestones, like watching an episode of your favorite show after completing a week.</p>
        
        <h2>What to Expect</h2>
        <p>Days 1-7: You'll need to consciously remind yourself to study.<br>
        Days 8-14: The routine will start feeling more natural.<br>
        Days 15-21: Studying will begin to feel like a normal part of your day.</p>
        
        <h2>After the Challenge</h2>
        <p>Once you've completed the 21 days, you'll have established a solid foundation. From here, you can gradually increase your study time and complexity as needed for your specific exam goals.</p>
        
        <p>Remember, the goal isn't just to study for 21 days—it's to create a sustainable habit that will carry you through your entire exam preparation journey.</p>
      `,
    },
    "consistency-importance": {
      title: "Why Consistency is the Key to Cracking Competitive Exams",
      date: "March 28, 2025",
      author: "Sheikh MD Joyeb",
      image: articleImages["consistency-importance"],
      content: `
        <p>When it comes to competitive exams like JEE, NEET, or CUCET, consistency in your preparation approach can be the difference between success and disappointment.</p>
        
        <h2>The Myth of Overnight Success</h2>
        <p>Many students fall into the trap of believing that last-minute cramming or studying in bursts can lead to success. The reality is that competitive exams test your understanding developed over years, not just memorized facts.</p>
        
        <h2>Why Consistency Matters</h2>
        
        <h3>1. Building Neural Pathways</h3>
        <p>Consistent study strengthens neural connections in your brain, making it easier to recall information during exams. This process, known as myelination, requires regular practice over time.</p>
        
        <h3>2. Compound Learning</h3>
        <p>Like compound interest, knowledge builds upon itself. Studying consistently allows concepts to connect and form a comprehensive understanding that's greater than the sum of its parts.</p>
        
        <h3>3. Reduced Stress</h3>
        <p>Last-minute cramming creates enormous pressure and anxiety. Consistent preparation distributes this stress over a longer period, making it more manageable.</p>
        
        <h3>4. Deeper Understanding</h3>
        <p>Regular engagement with the material allows you to move beyond surface-level memorization to true conceptual understanding—exactly what competitive exams test.</p>
        
        <h2>The Mathematics of Consistency</h2>
        <p>Consider these two scenarios:</p>
        <ul>
          <li>Student A studies 12 hours a day for the 15 days before the exam (180 hours total)</li>
          <li>Student B studies 3 hours a day for 120 days (360 hours total)</li>
        </ul>
        <p>Not only does Student B accumulate more study hours, but those hours are significantly more effective due to better retention and reduced fatigue.</p>
        
        <h2>Maintaining Consistency</h2>
        
        <h3>1. Set Realistic Goals</h3>
        <p>Aim for sustainable daily targets rather than ambitious but unsustainable ones.</p>
        
        <h3>2. Create a Routine</h3>
        <p>Study at the same times each day to establish a habit.</p>
        
        <h3>3. Use a Study Planner</h3>
        <p>Map out your syllabus over the available time to ensure steady progress.</p>
        
        <h3>4. Build Accountability</h3>
        <p>Join study groups or work with a mentor who can help keep you on track.</p>
        
        <h3>5. Celebrate Small Wins</h3>
        <p>Acknowledge your daily achievements to maintain motivation.</p>
        
        <h2>Handling Disruptions</h2>
        <p>Life inevitably brings disruptions. The key is not perfect consistency but returning to your routine quickly after interruptions. One missed day doesn't break your consistency—giving up does.</p>
        
        <h2>The Psychological Advantage</h2>
        <p>Consistent preparation builds confidence. Walking into the exam knowing you've prepared thoroughly for months provides a mental edge that can significantly impact your performance.</p>
        
        <h2>Conclusion</h2>
        <p>In the race to crack competitive exams, consistency is your most powerful ally. The tortoise's steady approach beats the hare's sprints every time. Start today, maintain discipline, and trust the process—your future success depends on the habits you build today.</p>
      `,
    },
    "life-after-selection": {
      title: "Life After Selection: What to Expect at IITs and NITs",
      date: "March 20, 2025",
      author: "Aditya Kumar Singh",
      image: articleImages["life-after-selection"],
      content: `
        <p>Congratulations on setting your sights on India's premier technical institutions! While preparing for JEE is your current focus, it's also worth understanding what awaits you after selection.</p>
        
        <h2>The Transition Period</h2>
        <p>The shift from school/coaching to IITs and NITs can be both exciting and challenging. You'll move from a structured environment to one that offers tremendous freedom and responsibility.</p>
        
        <h3>Orientation Week</h3>
        <p>Most institutes begin with an orientation week (often called 'induction' at IITs) where you'll learn about campus facilities, departments, and student activities. This is your first opportunity to make friends and begin building your network.</p>
        
        <h2>Academic Life</h2>
        
        <h3>Curriculum Structure</h3>
        <p>The first year typically consists of common courses across all engineering disciplines, including mathematics, physics, chemistry, and basic engineering principles. Specialization begins in the second year.</p>
        
        <h3>Teaching Style</h3>
        <p>Unlike coaching centers that focus on exam preparation, college education emphasizes conceptual understanding and application. Professors expect you to take initiative in your learning journey.</p>
        
        <h3>Grading System</h3>
        <p>Most IITs and NITs follow a relative grading system (or grading on a curve), where your performance is measured against your peers rather than absolute standards.</p>
        
        <h3>Research Opportunities</h3>
        <p>These institutions offer numerous opportunities to engage in cutting-edge research, even as an undergraduate. Summer internships, research assistantships, and project work can open doors to academic and industry careers.</p>
        
        <h2>Campus Life</h2>
        
        <h3>Hostel Living</h3>
        <p>Most students live in hostels (dormitories), which become centers of social life and personal growth. You'll learn to manage your time, finances, and personal responsibilities.</p>
        
        <h3>Student Clubs and Activities</h3>
        <p>From technical clubs like robotics and coding to cultural activities like music, dance, and drama, campus life offers diverse opportunities to develop your interests and skills.</p>
        
        <h3>Technical and Cultural Festivals</h3>
        <p>IITs and NITs host some of India's largest college festivals, attracting participants from across the country. These events offer networking opportunities and the chance to showcase your talents.</p>
        
        <h2>Challenges You Might Face</h2>
        
        <h3>Academic Pressure</h3>
        <p>The curriculum is rigorous, and many students who excelled in school find themselves average in this new environment. This adjustment can be challenging but is part of the growth process.</p>
        
        <h3>Time Management</h3>
        <p>With numerous academic and extracurricular opportunities, learning to prioritize becomes essential.</p>
        
        <h3>Homesickness</h3>
        <p>For many students, this is their first time living away from home. Building a support network of friends and mentors helps ease this transition.</p>
        
        <h2>Career Preparation</h2>
        
        <h3>Internships</h3>
        <p>Summer internships, typically after your third year, provide practical experience and often lead to job offers.</p>
        
        <h3>Placement Process</h3>
        <p>Campus placements begin in the final year, with companies visiting campus to recruit students. The placement cell helps prepare you through mock interviews and resume workshops.</p>
        
        <h3>Higher Education</h3>
        <p>Many students pursue graduate studies in India or abroad. IITs and NITs provide excellent preparation for competitive exams like GATE, GRE, and GMAT.</p>
        
        <h2>Making the Most of Your Time</h2>
        
        <h3>Balance Academics and Extracurriculars</h3>
        <p>While maintaining good grades is important, participating in clubs, competitions, and projects helps develop soft skills valued by employers.</p>
        
        <h3>Build Your Network</h3>
        <p>The connections you make with professors, alumni, and fellow students can open doors throughout your career.</p>
        
        <h3>Explore Interdisciplinary Interests</h3>
        <p>Take elective courses outside your department to broaden your perspective and discover new interests.</p>
        
        <h2>Conclusion</h2>
        <p>Life at IITs and NITs offers tremendous opportunities for personal and professional growth. The skills and experiences you gain extend far beyond technical knowledge, preparing you for success in whatever path you choose after graduation.</p>
      `,
    },
    "placement-opportunities": {
      title: "Placement Opportunities After B.Tech from IITs and NITs",
      date: "March 15, 2025",
      author: "Bibek Yadav",
      image: articleImages["placement-opportunities"],
      content: `
        <p>One of the most compelling reasons to aim for IITs and NITs is the exceptional career opportunities they offer. Let's explore the placement landscape for graduates from these premier institutions.</p>
        
        <h2>The Placement Advantage</h2>
        <p>IITs and NITs consistently achieve placement rates of 80-95%, with top institutes like IIT Bombay, Delhi, and Madras often reaching nearly 100% placement for eligible students.</p>
        
        <h2>Industry Sectors</h2>
        
        <h3>1. Information Technology</h3>
        <p>Tech giants like Google, Microsoft, Amazon, and Facebook regularly recruit from IITs and NITs, offering roles in software development, data science, and product management. These companies often offer the highest packages, sometimes exceeding ₹1 crore per annum for exceptional candidates.</p>
        
        <h3>2. Core Engineering</h3>
        <p>Companies like Larsen & Toubro, Tata Steel, BHEL, and Reliance Industries hire for roles in mechanical, civil, electrical, and chemical engineering. While salaries may be lower than IT roles, these positions offer valuable industry experience.</p>
        
        <h3>3. Consulting</h3>
        <p>Management consulting firms like McKinsey, Boston Consulting Group, and Bain & Company recruit engineering graduates for their analytical skills and problem-solving abilities. These roles typically offer packages ranging from ₹15-25 lakhs per annum.</p>
        
        <h3>4. Finance</h3>
        <p>Investment banks, financial services firms, and fintech companies hire engineers for quantitative roles, trading, and technology development. Goldman Sachs, JP Morgan, and Morgan Stanley are regular recruiters.</p>
        
        <h3>5. Research & Development</h3>
        <p>Organizations like ISRO, DRDO, and corporate R&D centers offer opportunities for those interested in innovation and advanced technology development.</p>
        
        <h3>6. Startups</h3>
        <p>Many graduates join or found startups, leveraging the entrepreneurial ecosystem fostered at these institutions. Campus incubators often provide support for student ventures.</p>
        
        <h2>Salary Trends</h2>
        
        <h3>Average Packages</h3>
        <p>While media often highlights crore-plus packages, these represent outliers rather than the norm. Realistic expectations for average packages are:</p>
        <ul>
          <li>Top IITs (Bombay, Delhi, Madras, Kanpur): ₹15-25 lakhs per annum</li>
          <li>Other IITs: ₹10-18 lakhs per annum</li>
          <li>Top NITs (Trichy, Warangal, Surathkal): ₹8-15 lakhs per annum</li>
          <li>Other NITs: ₹6-12 lakhs per annum</li>
        </ul>
        <p>These figures vary significantly by branch, with Computer Science, Electrical Engineering, and Electronics typically commanding higher packages.</p>
        
        <h3>International Offers</h3>
        <p>Some students receive international offers, particularly in technology, finance, and research roles. These positions, often in the US, Singapore, Japan, or Europe, can offer significantly higher compensation.</p>
        
        <h2>Factors Influencing Placement</h2>
        
        <h3>1. Academic Performance</h3>
        <p>While not the only factor, a good CGPA (typically above 7.5/10) opens doors to more companies, especially for first-time job seekers.</p>
        
        <h3>2. Skills Beyond Curriculum</h3>
        <p>Proficiency in programming, data analysis, and domain-specific tools often matters more than theoretical knowledge alone.</p>
        
        <h3>3. Projects and Internships</h3>
        <p>Practical experience through projects, internships, and research work significantly enhances employability.</p>
        
        <h3>4. Soft Skills</h3>
        <p>Communication, teamwork, and leadership abilities, often developed through extracurricular activities, play a crucial role in selection processes.</p>
        
        <h2>Beyond Campus Placements</h2>
        
        <h3>Higher Education</h3>
        <p>Approximately 30-40% of IIT graduates and 15-25% of NIT graduates pursue higher studies in India or abroad, often at prestigious institutions like MIT, Stanford, and Ivy League universities.</p>
        
        <h3>Civil Services</h3>
        <p>Some graduates prepare for UPSC and other competitive examinations, leveraging their analytical skills for administrative careers.</p>
        
        <h3>Entrepreneurship</h3>
        <p>The startup ecosystem in India has been significantly influenced by IIT and NIT alumni, with successful ventures like Flipkart, Zomato, and Ola founded by graduates of these institutions.</p>
        
        <h2>Long-term Career Trajectory</h2>
        <p>The IIT/NIT brand continues to provide advantages throughout one's career, with alumni networks facilitating job changes, business partnerships, and mentorship opportunities.</p>
        
        <h2>Preparing for Placements</h2>
        
        <h3>Start Early</h3>
        <p>Begin building your profile from the first year through projects, competitions, and skill development.</p>
        
        <h3>Leverage Campus Resources</h3>
        <p>Utilize training and placement cells, alumni networks, and career development workshops.</p>
        
        <h3>Develop Technical and Soft Skills</h3>
        <p>Balance academic excellence with practical skills and interpersonal abilities.</p>
        
        <h2>Conclusion</h2>
        <p>While the journey through JEE and engineering education is challenging, the career opportunities that await IIT and NIT graduates make the effort worthwhile. These institutions provide not just technical knowledge but a platform for holistic development that prepares students for diverse and rewarding career paths.</p>
      `,
    },
    "physics-preparation": {
      title: "Mastering Physics for JEE: A Comprehensive Approach",
      date: "March 8, 2025",
      author: "Aman Singh Rathore",
      image: articleImages["physics-preparation"],
      content: `
        <p>Physics often proves to be the most challenging section for many JEE aspirants. As a Physics specialist and JEE Advanced qualifier, I'd like to share strategies that can help you master this subject effectively.</p>
        
        <h2>Understanding the JEE Physics Syllabus</h2>
        <p>The JEE Physics syllabus can be broadly categorized into:</p>
        <ul>
          <li><strong>Mechanics:</strong> Kinematics, Laws of Motion, Work-Energy-Power, Rotational Motion</li>
          <li><strong>Electrodynamics:</strong> Electrostatics, Current Electricity, Magnetism, EMI</li>
          <li><strong>Optics and Modern Physics:</strong> Wave Optics, Ray Optics, Atomic Structure, Nuclear Physics</li>
          <li><strong>Thermodynamics and Waves:</strong> Heat Transfer, Kinetic Theory, Wave Motion, Sound</li>
        </ul>
        
        <h2>Building a Strong Foundation</h2>
        
        <h3>1. Master the Fundamentals</h3>
        <p>Begin with NCERT textbooks to build a solid conceptual foundation. Understand the basic principles thoroughly before moving to advanced reference books.</p>
        
        <h3>2. Develop Mathematical Fluency</h3>
        <p>Physics in JEE requires strong mathematical skills. Practice calculus, vector algebra, and coordinate geometry regularly to solve physics problems efficiently.</p>
        
        <h3>3. Understand Derivations</h3>
        <p>Don't memorize formulas; understand how they're derived. This approach helps you apply concepts to unfamiliar problems—a common challenge in JEE.</p>
        
        <h2>Effective Study Techniques</h2>
        
        <h3>1. Concept Mapping</h3>
        <p>Create visual maps connecting related concepts. For example, link Newton's laws with friction, circular motion, and conservation principles to see the bigger picture.</p>
        
        <h3>2. The Feynman Technique</h3>
        <p>Explain concepts in simple language as if teaching someone else. This approach reveals gaps in your understanding and reinforces learning.</p>
        
        <h3>3. Dimensional Analysis</h3>
        <p>Verify your solutions using dimensional analysis. This quick check can help identify errors in your approach.</p>
        
        <h2>Problem-Solving Strategies</h2>
        
        <h3>1. Systematic Approach</h3>
        <p>Follow these steps for each problem:</p>
        <ul>
          <li>Identify the concepts involved</li>
          <li>Draw diagrams and define coordinate systems</li>
          <li>List known and unknown quantities</li>
          <li>Select appropriate equations</li>
          <li>Solve mathematically</li>
          <li>Verify units and reasonableness of the answer</li>
        </ul>
        
        <h3>2. Practice Categorized Problems</h3>
        <p>Start with topic-wise problems before attempting mixed exercises. This builds confidence and reinforces concept application.</p>
        
        <h3>3. Time-Bound Practice</h3>
        <p>As the exam approaches, practice solving problems within time constraints to improve speed and accuracy.</p>
        
        <h2>Recommended Resources</h2>
        
        <h3>Books</h3>
        <ul>
          <li><strong>Concepts of Physics by H.C. Verma:</strong> Excellent for building fundamentals</li>
          <li><strong>Problems in Physics by S.S. Krotov:</strong> Challenging problems for advanced preparation</li>
          <li><strong>Fundamentals of Physics by Halliday, Resnick & Walker:</strong> Comprehensive explanations with real-world examples</li>
          <li><strong>DC Pandey Physics for JEE:</strong> Topic-wise exercises with varying difficulty levels</li>
        </ul>
        
        <h3>Online Resources</h3>
        <ul>
          <li><strong>Khan Academy:</strong> Visual explanations of fundamental concepts</li>
          <li><strong>MIT OpenCourseWare:</strong> University-level physics lectures</li>
          <li><strong>Physics Galaxy by Ashish Arora:</strong> Concept videos and problem-solving techniques</li>
        </ul>
        
        <h2>Common Pitfalls to Avoid</h2>
        
        <h3>1. Overemphasis on Numerical Practice</h3>
        <p>While problem-solving is crucial, don't neglect conceptual understanding. JEE tests application of concepts, not just calculation skills.</p>
        
        <h3>2. Ignoring Experimental Physics</h3>
        <p>Questions based on experiments and practical applications appear regularly in JEE. Study experimental setups, graphs, and error analysis.</p>
        
        <h3>3. Selective Studying</h3>
        <p>Avoid focusing only on topics you find interesting or easy. The JEE syllabus is comprehensive, and questions can come from any area.</p>
        
        <h2>Topic-Wise Strategies</h2>
        
        <h3>Mechanics</h3>
        <p>Start with kinematics and build up to more complex topics like rotational dynamics. Use free-body diagrams consistently and practice problems involving multiple concepts.</p>
        
        <h3>Electrodynamics</h3>
        <p>Visualize electric and magnetic fields. Practice Gauss's law applications and circuit analysis thoroughly.</p>
        
        <h3>Modern Physics</h3>
        <p>Focus on understanding the experimental basis of quantum mechanics and nuclear physics. This area often features conceptual questions rather than heavy calculations.</p>
        
        <h2>Revision Strategy</h2>
        <p>Create concise notes with key concepts, formulas, and typical problem approaches. Review these regularly, especially in the weeks before the exam.</p>
        
        <h2>Final Thoughts</h2>
        <p>Physics for JEE requires patience, consistent practice, and conceptual clarity. Don't be discouraged by initial difficulties—with the right approach, you can transform physics from a challenging subject into your strength in the examination.</p>
        
        <p>Remember that understanding the "why" behind phenomena is just as important as knowing "how" to solve problems. This deeper understanding is what separates top performers in JEE Physics.</p>
      `,
    },
  }

  const article = articles[params.slug] || {
    title: "Article Not Found",
    date: "",
    author: "",
    image: "/images/placeholder.svg",
    content: "<p>The requested article could not be found.</p>",
  }

  return (
    <div className="min-h-screen bg-navy-900">
      <section className="relative pt-20 pb-10 bg-navy-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 z-0"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Button asChild variant="ghost" className="mb-8 text-blue-400 hover:text-blue-300 hover:bg-blue-900/30">
            <Link href="/articles" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Articles
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-10 bg-navy-800">
        <div className="container mx-auto px-4 md:px-6">
          <motion.article initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto">
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60"></div>
            </div>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h1>
              {article.date && (
                <div className="flex items-center gap-2 text-gray-400">
                  <time>{article.date}</time>
                  {article.author && (
                    <>
                      <span>•</span>
                      <span>By {article.author}</span>
                    </>
                  )}
                </div>
              )}
            </header>

            <div
              className="prose prose-invert prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="mt-12 pt-8 border-t border-navy-700">
              <h3 className="text-xl font-bold text-white mb-4">Continue Learning</h3>
              <p className="text-gray-300 mb-6">
                Want to dive deeper into this topic? Schedule a one-on-one session with our expert tutors.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/#contact">Contact Us</Link>
              </Button>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  )
}
