import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/nonstop-logo.png" alt="Non-stop Logo" width={150} height={50} />
            </Link>
            <p className="text-gray-400">
              Where Learning Never Ends - Personalized coaching for JEE Mains/Advanced, NEET, and CUCET aspirants.
            </p>
            <div className="flex space-x-4">
              <Link href="https://t.me/nonstop_wlne" className="hover:text-blue-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.846 1.467 1.618 2.92 2.286 4.347.613 1.308 1.629 3.41 2.72 4.08.586.362 1.259.232 1.701-.067.283-.191.532-.318 1.139-.318 1.141 0 1.304.819 1.364 1.197.245 1.239.882 3.818 1.104 4.481.22.663.6 1.364 1.683 1.364 1.071 0 1.952-.917 2.723-1.82 1.908-2.228 3.829-4.586 5.583-6.787.884-1.102 1.589-1.552 2.292-1.73.949-.198 1.398-.726 1.398-1.413 0-.301-.074-.579-.213-.833-.535-.953-3.752-3.106-6.194-5.059l-.162-.125a.881.881 0 0 0-.695-.133c-.387.096-.872.396-1.136.662-.613.626-1.563 1.153-2.423 1.604l-.059.033c-.305.177-.565.336-.865.336a.56.56 0 0 1-.33-.094c-.054-.036-.116-.117-.164-.185-.274-.387-.392-.676-.392-.955 0-.492.212-.923.575-1.133.125-.07.231-.129.328-.186l.393-.223 13.423-7.059c.401-.21.757-.612.757-1.146 0-.79-.543-1.126-1.15-1.177l-.12-.009z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="sr-only">Telegram</span>
              </Link>
              <Link href="https://www.instagram.com/nonstop_wlne" className="hover:text-blue-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.facebook.com/share/1JGrWnQons/?mibextid=wwXIfr"
                className="hover:text-blue-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-blue-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-blue-400 transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#courses" className="hover:text-blue-400 transition-colors">
                  JEE Mains/Advanced
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-blue-400 transition-colors">
                  NEET
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-blue-400 transition-colors">
                  CUCET
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-blue-400 transition-colors">
                  QAD Series
                </Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-blue-400 transition-colors">
                  1-on-1 Coaching
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>+91 8945828056</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>nonstopwlne49@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>NIT Durgapur, West Bengal, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Non-stop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}