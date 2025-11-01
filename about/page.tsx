"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Heart, Target, Eye, Sparkles } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About YobeTech Connect</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bridging the gap between Yobe State and global technology opportunities
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              YobeTech Connect was founded with a vision to transform Yobe State into a hub of technological innovation.
              We believe that technology is the key to unlocking opportunities and creating sustainable growth.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our mission is to connect innovators, developers, entrepreneurs, and tech enthusiasts within Yobe State
              and beyond, fostering collaboration and knowledge sharing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through our platform, we provide resources, education, and networking opportunities to help individuals
              and businesses thrive in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Heart className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">We are passionate about technology and its transformative potential</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Target className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Purpose</h3>
              <p className="text-gray-600">We are committed to creating meaningful impact in our community</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Eye className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vision</h3>
              <p className="text-gray-600">We envision a connected and empowered tech community in Yobe</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Sparkles className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do and deliver</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Leadership Team</h2>
          <p className="text-lg text-gray-600 text-center mb-12">Meet the visionaries behind YobeTech Connect</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Team Member {member}</h3>
                <p className="text-blue-600 font-semibold mb-2">Leadership Position</p>
                <p className="text-gray-600">Dedicated to innovation and community growth</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
