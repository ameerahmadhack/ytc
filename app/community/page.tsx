"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { MessageCircle, Users, Lightbulb, Share2 } from "lucide-react"

export default function Community() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect, collaborate, and grow with thousands of tech professionals
          </p>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Join Our Community Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <MessageCircle className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp Group</h3>
              <p className="text-gray-600 mb-6">
                Join our active WhatsApp community for daily discussions, quick tips, and instant networking
              </p>
              <Link
                href="https://chat.whatsapp.com/JT0U79OLuGrIoJmQYuXXIR?mode=wwt"
                target="_blank"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors duration-200"
              >
                Join WhatsApp
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Meetups & Events</h3>
              <p className="text-gray-600 mb-6">
                Attend monthly meetups, workshops, and networking events in Yobe State
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors duration-200">
                View Events
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Lightbulb className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ideas & Innovation</h3>
              <p className="text-gray-600 mb-6">
                Share your ideas, collaborate on projects, and turn innovations into reality
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors duration-200">
                Explore Ideas
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Share2 className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Knowledge Sharing</h3>
              <p className="text-gray-600 mb-6">
                Learn from peers, share expertise, and build a repository of tech knowledge
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors duration-200">
                Share Knowledge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Community Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((story) => (
              <div key={story} className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
                  <div>
                    <p className="font-bold text-gray-900">Success Story {story}</p>
                    <p className="text-sm text-gray-600">Community Member</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Through YobeTech Connect, I found mentorship, learned new skills, and landed my dream job in tech.
                  The community is truly amazing!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
