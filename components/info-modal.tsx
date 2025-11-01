"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface InfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InfoModal({ isOpen, onClose }: InfoModalProps) {
  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">YobeTech Connect</h2>
          <button onClick={onClose} className="hover:bg-white/20 rounded-full p-2 transition">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Vision & Mission */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">🎯 Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To see Yobe State transformed into a hub of innovation, where technology is used to solve local problems,
              empower youth, and build unity and progress.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">🚀 Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To connect and empower talented individuals in Yobe State through technology, training, collaboration, and
              innovation, creating practical solutions for community challenges and opportunities for a better future.
            </p>
          </div>

          {/* Motto & Aim */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">💙 Our Motto</h3>
            <p className="text-gray-700 text-lg font-semibold">"Building Yobe Through Innovation and Unity"</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">🎯 Our Aim</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To transform Yobe State into a thriving hub of innovation and digital empowerment, where technology
              becomes a tool for solving real-life challenges, creating opportunities, and building unity among our
              people.
            </p>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Objectives</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: "💻",
                  title: "Empower Youth with Digital Skills",
                  desc: "Train and equip young people in coding, cybersecurity, digital marketing, and tech entrepreneurship.",
                },
                {
                  icon: "🔧",
                  title: "Promote Tech-Driven Solutions",
                  desc: "Identify local challenges and use technology to design innovative solutions tailored to Yobe's context.",
                },
                {
                  icon: "🤝",
                  title: "Foster Collaboration and Innovation",
                  desc: "Build networks among tech enthusiasts, professionals, and institutions to drive real impact.",
                },
                {
                  icon: "🌐",
                  title: "Bridge the Digital Divide",
                  desc: "Advocate for digital inclusion in rural areas with access to technology and literacy.",
                },
              ].map((obj, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-2xl mb-2">{obj.icon}</p>
                  <h4 className="font-bold text-gray-900 mb-2">{obj.title}</h4>
                  <p className="text-gray-600 text-sm">{obj.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Goals</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-300 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">🎯 Short-term Goals (6-12 Months)</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Successfully launch YobeTech Connect as a recognized tech community</li>
                  <li>• Organize virtual and physical tech events and trainings</li>
                  <li>• Start our first collaborative tech project</li>
                  <li>• Build strong partnerships with institutions</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">📈 Mid-term Goals (1-3 Years)</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Train at least 500 youths in different tech skills</li>
                  <li>• Develop 3+ impactful digital solutions</li>
                  <li>• Create tech job opportunities and startups</li>
                  <li>• Establish mentorship programs</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">🚀 Long-term Goals (3-5+ Years)</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Position Yobe as a leading tech innovation state</li>
                  <li>• Significantly reduce youth unemployment</li>
                  <li>• Inspire a culture of technology for progress</li>
                  <li>• Build sustainable tech ecosystem</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">💡 Our Philosophy</h3>
            <p className="text-lg leading-relaxed">
              "At the heart of YobeTech Connect lies one belief: The solutions to our challenges are within us. Our
              people, our culture, and our collective brilliance can shape a new future for Yobe, using technology not
              just for profit, but for purpose. We are not waiting for change. We are building it."
            </p>
            <p className="text-sm mt-4 opacity-90">#YobeTechConnect #TechForYobe #UnityInInnovation</p>
          </div>

          {/* Close Button */}
          <Button
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
