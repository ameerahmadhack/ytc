"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Code, Palette, BarChart3, Zap, Users } from "lucide-react"

export default function LearningHub() {
  const courses = [
    {
      icon: Code,
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript from scratch",
      level: "Beginner",
      instructor: "Expert Developers",
      students: "234 enrolled",
    },
    {
      icon: Code,
      title: "Advanced React & Next.js",
      description: "Master modern React patterns and Next.js framework",
      level: "Advanced",
      instructor: "Lead Engineer",
      students: "156 enrolled",
    },
    {
      icon: Palette,
      title: "UI/UX Design Principles",
      description: "Create beautiful and functional user experiences",
      level: "Intermediate",
      instructor: "Design Lead",
      students: "189 enrolled",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Visualization",
      description: "Transform data into actionable insights",
      level: "Intermediate",
      instructor: "Data Scientist",
      students: "142 enrolled",
    },
    {
      icon: Zap,
      title: "Mobile App Development",
      description: "Build iOS and Android apps with Flutter",
      level: "Intermediate",
      instructor: "Mobile Expert",
      students: "167 enrolled",
    },
    {
      icon: Users,
      title: "Tech Leadership & Mentorship",
      description: "Develop leadership skills in tech industry",
      level: "Advanced",
      instructor: "Industry Leaders",
      students: "98 enrolled",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-blue-100 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-600 font-semibold">Knowledge is Power</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Learning Hub</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive collection of courses designed to elevate your tech skills and career
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 h-24 flex items-center justify-center">
                    <Icon className="text-white" size={40} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                    <div className="space-y-2 mb-4 text-sm">
                      <p className="text-gray-700">
                        <span className="font-semibold">Level:</span>{" "}
                        <span className="text-blue-600">{course.level}</span>
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Instructor:</span> {course.instructor}
                      </p>
                      <p className="text-gray-500">{course.students}</p>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors duration-200">
                      Explore Course
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Teach?</h2>
          <p className="text-blue-100 mb-6">Share your expertise and help others grow</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors duration-200">
            Become an Instructor
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
