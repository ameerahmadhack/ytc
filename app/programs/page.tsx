"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, Users, Award, Briefcase } from "lucide-react"

export default function Programs() {
  const programs = [
    {
      icon: Award,
      title: "Bootcamp Program",
      description: "Intensive 12-week program to master in-demand tech skills",
      duration: "12 weeks",
      commitment: "Full-time",
      benefits: ["Certificate", "Job placement", "Mentorship"],
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Get matched with experienced tech professionals for guidance",
      duration: "Ongoing",
      commitment: "Flexible",
      benefits: ["1-on-1 sessions", "Career guidance", "Network access"],
    },
    {
      icon: Briefcase,
      title: "Internship Program",
      description: "Gain practical experience through real-world projects",
      duration: "3-6 months",
      commitment: "Part-time/Full-time",
      benefits: ["Experience", "Stipend", "Portfolio building"],
    },
    {
      icon: Calendar,
      title: "Workshop Series",
      description: "Monthly workshops on trending tech topics",
      duration: "2-4 hours",
      commitment: "Flexible",
      benefits: ["Networking", "Hands-on learning", "Certificate"],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Programs & Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of programs designed to accelerate your tech career
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 h-20 flex items-center justify-center">
                    <Icon className="text-white" size={36} />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-bold text-gray-900">{program.duration}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-600">Commitment</p>
                        <p className="font-bold text-gray-900">{program.commitment}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gray-700 mb-2">What you get:</p>
                      <ul className="space-y-1">
                        {program.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600">
                            <span className="text-blue-600 font-bold">✓</span> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
