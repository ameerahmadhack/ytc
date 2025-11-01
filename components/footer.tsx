"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              YobeTech <span className="text-cyan-400">Connect</span>
            </h3>
            <p className="text-gray-400 mb-4">Building Yobe Through Innovation & Unity</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/learning-hub" className="text-gray-400 hover:text-cyan-400 transition">
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-cyan-400 transition">
                  Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+2349014809711"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
              >
                <Phone size={18} />
                +234 901 480 9711
              </a>
              <a
                href="mailto:infoyobetechconnect@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
              >
                <Mail size={18} />
                infoyobetechconnect@gmail.com
              </a>
              <a
                href="https://chat.whatsapp.com/JT0U79OLuGrIoJmQYuXXIR?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
              >
                <MapPin size={18} />
                WhatsApp Community
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>© 2025 YobeTech Connect. All rights reserved.</p>
            <p className="text-sm mt-2">Building Yobe Through Innovation & Unity</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
