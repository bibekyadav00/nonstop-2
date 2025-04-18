import Link from "next/link"
import Image from "next/image"

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
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12\
