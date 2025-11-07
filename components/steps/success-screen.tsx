"use client"

import { CheckCircle, MessageCircle } from "lucide-react"

interface SuccessScreenProps {
  onPaymentComplete?: () => void
}

export default function SuccessScreen({ onPaymentComplete }: SuccessScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-primary via-background to-secondary">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle className="w-14 h-14 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center">Thank You!</h1>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-8">
            {/* Main Message */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold text-primary">Registration Complete</h2>
              <p className="text-lg text-foreground font-semibold">🎉 Welcome to Yobe Tech Connect!</p>
              <p className="text-muted-foreground">
                Your registration has been successfully completed. We're excited to have you on board!
              </p>
            </div>

            {/* Motivational Message */}
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border-2 border-accent rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-3">You're Now Part of Our Community</h3>
              <p className="text-foreground leading-relaxed">
                Your commitment to building Yobe through innovation and unity is now official. Join us and thousands of
                other tech leaders, problem-solvers, and innovators who are shaping the digital future of Yobe State.
                Together, we're creating opportunities, sharing knowledge, and making a real difference.
              </p>
            </div>

            {/* Confirmation Details */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-3">
              <h3 className="font-semibold text-primary">What's Next?</h3>
              <div className="space-y-2 text-sm text-foreground">
                <p className="flex items-start gap-2">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Check your email for a confirmation message</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>You'll receive information about upcoming training programs and workshops</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent font-bold text-lg">✓</span>
                  <span>Join our community group to connect with other members</span>
                </p>
              </div>
            </div>

            {/* WhatsApp Group CTA */}
            <a
              href="https://chat.whatsapp.com/EMm9esHZ96bEdBkQzFMqOV?mode=wwt"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5" />
              Join Our WhatsApp Community
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Footer Message */}
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Have questions? Contact us at infoyobetechconnect@gmail.com or call 09014480971
              </p>
              <p className="text-xs text-muted-foreground font-semibold">
                Yobe Tech Connect - Empowering Innovation, Building Futures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
