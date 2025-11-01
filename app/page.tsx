"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import RulesModal from "@/components/rules-modal"
import InfoModal from "@/components/info-modal"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Zap, Users, Trophy, Code } from "lucide-react"

export default function Home() {
  const [showRules, setShowRules] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  const features = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Latest tech trends and cutting-edge solutions",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded tech enthusiasts",
    },
    {
      icon: Trophy,
      title: "Growth",
      description: "Develop skills and advance your career",
    },
    {
      icon: Code,
      title: "Learning",
      description: "Professional courses and resources",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="relative w-40 h-40 rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-200 hover:scale-105 transition-transform duration-300">
              <Image src="/yobetech-logo.png" alt="YobeTech Connect" fill className="object-contain" priority />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance leading-tight animate-fade-in-up animation-delay-200">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              YobeTech Connect
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-semibold animate-fade-in-up animation-delay-400">
            Building Yobe Through Innovation & Unity
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            Join a thriving community of innovators, developers, and tech enthusiasts dedicated to transforming Yobe
            State through technology
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-800">
            <Button
              onClick={() => setShowRules(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-lg rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Button>
            <Button
              onClick={() => setShowInfo(true)}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-10 py-7 text-lg rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white"
            >
              Learn More
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in-up animation-delay-1000">
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-sm text-gray-600">Members</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <p className="text-3xl font-bold text-blue-600">50+</p>
              <p className="text-sm text-gray-600">Events</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <p className="text-3xl font-bold text-blue-600">25+</p>
              <p className="text-sm text-gray-600">Courses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Join YobeTech Connect?</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Experience a comprehensive platform designed for your growth and success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Movement?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your journey with YobeTech Connect today and unlock endless opportunities
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Modals */}
      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
      <InfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />

      <Footer />
    </main>
  )
}
