"use client"

import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

interface WelcomeScreenProps {
  onStart: () => void
}

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Welcome to Yobe Tech Connect Registration Portal"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-background to-secondary flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        {/* Logo Animation */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="mb-6 flex justify-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/backup-file-78994.appspot.com/o/file_000000002274620a8bc1c942af702bb7.png?alt=media&token=4b43cfa9-7608-453d-8089-fe0e990a1e21"
              alt="YOBE TECH CONNECT Logo"
              className="w-32 h-32 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Animated Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 h-20 flex items-center justify-center">
            <span className="inline-block">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-accent to-secondary p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Assalamu Alaikum Warahmatullahi Wabarakatuh</h2>
            <p className="text-accent-foreground/90">Your Gateway to Technology Excellence</p>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-8">
            {/* Purpose Section */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">📋</span> Purpose of Registration
              </h3>
              <div className="space-y-3 text-foreground">
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg mt-1">✓</span>
                  <span>Receive official recognition as part of YTC</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg mt-1">✓</span>
                  <span>Get access to training programs, awareness campaigns, and workshops</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg mt-1">✓</span>
                  <span>Be part of a growing digital community focused on technology, leadership, and innovation</span>
                </p>
              </div>
            </div>

            {/* Fee Section */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <span className="text-2xl">💰</span> Why We Collect a Registration Fee
              </h3>
              <p className="text-foreground mb-4">
                The registration fee is a small contribution to support our ongoing projects and awareness campaigns. It
                helps us cover:
              </p>
              <div className="bg-primary/5 border-l-4 border-accent rounded p-4 space-y-2 text-foreground">
                <p className="flex items-center gap-2">
                  <span className="text-accent font-bold">•</span> Printing of official materials and certificates
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-accent font-bold">•</span> Transportation and logistics for school technology
                  awareness programs
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-accent font-bold">•</span> Maintenance of our official website and digital
                  platforms
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-accent font-bold">•</span> Expanding our programs to reach more schools and
                  young people in Yobe State
                </p>
              </div>
            </div>

            {/* Commitment Section */}
            <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
              <p className="text-green-900 font-semibold">
                Your registration shows your commitment to building Yobe through Innovation and Unity. Together, we are
                creating a new generation of thinkers, problem-solvers, and tech leaders.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-50 rounded p-4 space-y-2 text-sm">
              <p className="text-blue-900 font-semibold mb-3">Contact Us</p>
              <p className="text-blue-900 flex items-center gap-2">
                <span>📩</span> infoyobetechconnect@gmail.com
              </p>
              <p className="text-blue-900 flex items-center gap-2">
                <span>📞</span> 09014480971
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="bg-gray-50 p-8 border-t border-gray-200">
            <button
              onClick={onStart}
              className="w-full px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white font-bold text-lg rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Start Registration
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-muted-foreground text-sm mt-4">
              Thank you for joining us — your support makes the difference!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
