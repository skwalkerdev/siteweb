"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  Brain,
  Shield,
  Zap,
  Database,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  BarChart3,
  Gavel,
  Eye,
  Lock,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function LawFirmLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const tools = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Cross-Border M&A",
      description: "Global transaction expertise across 15+ jurisdictions",
      metric: "Global Reach",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Corporate Finance",
      description: "From seed funding to £1.2B joint ventures",
      metric: "£1.2B Ventures",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Distribution & Franchising",
      description: "Connecting brands with global markets",
      metric: "Global Markets",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Strategic Advisory",
      description: "Blue SKYE thinking for complex business challenges",
      metric: "Blue SKYE",
      color: "from-orange-500 to-blue-500",
    },
  ]

  const stats = [
    { value: "£2.5B+", label: "Transactions", sublabel: "Completed" },
    { value: "15+", label: "Jurisdictions", sublabel: "Worldwide" },
    { value: "UAE+UK+US", label: "Global Offices", sublabel: "Locations" },
    { value: "UHNW", label: "Client Tier", sublabel: "Exclusive" },
  ]

  const teamMembers = [
    { name: "Simon Walker", title: "Founding Partner, Chairman" },
    { name: "Susy Aryani", title: "Partner" },
    { name: "Damola Oluwatade", title: "Chief Technology Officer" },
    { name: "James Cadbury", title: "Senior Advisor" },
    { name: "Dr Mansour Malik", title: "Senior Advisor" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-50 px-6 py-4 border-b border-gray-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Scale className="h-8 w-8 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold tracking-tight">SKYEWALKER LAW</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#tools" className="text-gray-300 hover:text-white transition-colors">
              Expertise
            </Link>
            <Link href="#results" className="text-gray-300 hover:text-white transition-colors">
              Results
            </Link>
            <Link href="#team" className="text-gray-300 hover:text-white transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden md:inline-flex border-gray-700 text-white hover:bg-white hover:text-black"
            >
              Client Portal
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Consultation
            </Button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-purple-500/50 text-purple-300 bg-purple-500/10">
                <Zap className="h-3 w-3 mr-1" />
                BLUE SKYE THINKING
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Where Law Meets
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Blue SKYE Innovation
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We don't just practice law—we pioneer it. Combining global expertise with blue SKYE thinking, we deliver
                cross-border solutions that transcend traditional boundaries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6"
              >
                Engage Our Expertise
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white hover:bg-white hover:text-black text-lg px-8 py-6"
              >
                View Case Studies
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Arsenal Section */}
      <section id="tools" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-300 bg-cyan-500/10">
              <Shield className="h-3 w-3 mr-1" />
              Areas of Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Global legal expertise across various jurisdictions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${tool.color} bg-opacity-20`}>{tool.icon}</div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {tool.metric}
                        </Badge>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{tool.description}</p>
                      <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0 h-auto">
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="relative z-10 py-24 px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-emerald-500/50 text-emerald-300 bg-emerald-500/10">
                  <Gavel className="h-3 w-3 mr-1" />
                  Elite Legal Services
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Redefining Legal Excellence
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We handle the impossible cases others won't touch. Our maverick approach combines traditional legal
                  mastery with revolutionary technology.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Cross-Border M&A & Corporate Finance",
                  "Distribution, Franchising & Licensing",
                  "Joint Ventures & Strategic Partnerships",
                  "UHNW Individual & Corporate Advisory",
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-gray-800 backdrop-blur-sm p-8">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Lock className="h-16 w-16 mx-auto text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">Confidential Case Data</h3>
                    <p className="text-gray-300">Real-time analytics dashboard available to authorized clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-blue-500/50 text-blue-300 bg-blue-500/10">
              <Users className="h-3 w-3 mr-1" />
              Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Meet Our Experts
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300"
              >
                <CardContent className="p-4 text-center">
                  <div className="text-xl font-bold text-white">{member.name}</div>
                  <div className="text-gray-300">{member.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Ready to Think Beyond Boundaries?
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join the elite tier of global legal innovation. Let's discuss how our blue SKYE approach can transform your
            cross-border challenges into competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6"
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-white hover:text-black text-lg px-8 py-6"
            >
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Scale className="h-6 w-6 text-purple-400" />
                <span className="font-bold">SKYEWALKER LAW</span>
              </div>
              <p className="text-gray-400 text-sm">Where legal excellence meets technological innovation.</p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Cross-Border M&A</div>
                <div>Distribution & Franchising</div>
                <div>Joint Ventures</div>
                <div>UHNW Advisory</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Expertise</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Global Transactions</div>
                <div>Corporate Finance</div>
                <div>Strategic Partnerships</div>
                <div>International Law</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>UAE: +971 555 SKYWALK</div>
                <div>London: +44 555 SKYWALK</div>
                <div>Washington: +1 555 SKYWALK</div>
                <div>consultation@skyewalkerlaw.com</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Skyewalker Law. All rights reserved. | Attorney Advertising</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
