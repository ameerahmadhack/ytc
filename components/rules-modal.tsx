"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Download, ArrowRight } from "lucide-react"

interface RulesModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RulesModal({ isOpen, onClose }: RulesModalProps) {
  const [accepted, setAccepted] = useState(false)

  if (!isOpen) return null

  const handleAccept = () => {
    if (accepted) {
      window.open("https://yobe-tech-registration.netlify.app/", "_blank")
    }
  }

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Rules & Regulations</h2>
          <button onClick={onClose} className="hover:bg-white/20 rounded-full p-2 transition">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* PDF Download Section */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 flex items-start gap-4">
            <div className="text-blue-600 mt-1">
              <Download size={28} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">Download Required Document</h3>
              <p className="text-gray-700 mb-4">
                You must download and review the complete rules and regulations before proceeding with registration.
              </p>
              <a
                href="https://drive.google.com/file/d/1ZBjvVa5svfepFYXj5SFHr_VcRA5Ltm9U/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Download PDF
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Rules Summary */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Key Terms & Conditions</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>All members must commit to ethical tech practices and community values</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Respect for diversity, inclusion, and peaceful collaboration is mandatory</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Active participation in community events and initiatives is encouraged</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>No harassment, discrimination, or malicious conduct is tolerated</span>
              </li>
            </ul>
          </div>

          {/* Acceptance Checkbox */}
          <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
            <input
              type="checkbox"
              id="accept"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="w-5 h-5 text-blue-600 mt-1 cursor-pointer"
            />
            <label htmlFor="accept" className="text-gray-700 cursor-pointer">
              I have downloaded and reviewed the rules and regulations, and I accept all terms and conditions
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button onClick={onClose} variant="outline" className="flex-1 py-3 rounded-lg font-semibold bg-transparent">
              Cancel
            </Button>
            <Button
              onClick={handleAccept}
              disabled={!accepted}
              className={`flex-1 py-3 rounded-lg font-semibold transition ${
                accepted ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              I Accept & Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
