"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
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
  Globe,
  TrendingUp,
  Network,
  Lightbulb,
  ChevronLeft,
  Star,
  Building,
  MapPin,
  Calendar,
  Award,
} from "lucide-react"
import Link from "next/link"

// Simple CSS Animation Component
function AnimatedIcon({
  children,
  className = "",
  delay = 0,
  type = "float" | "pulse" | "rotate" | "bounce",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  type?: "float" | "pulse" | "rotate" | "bounce"
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const getAnimationClass = () => {
    switch (type) {
      case "pulse":
        return "animate-pulse"
      case "rotate":
        return "animate-spin"
      case "bounce":
        return "animate-bounce"
      default:
        return "animate-pulse"
    }
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? getAnimationClass() : ""} transition-all duration-1000`}
      style={{ animationDelay: `${delay}ms`, animationDuration: "3s" }}
    >
      {children}
    </div>
  )
}

// Case Study Carousel Component
function CaseStudyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const caseStudies = [
    {
      id: 1,
      title: "Global Tech Merger",
      subtitle: "Cross-Border M&A Success",
      value: "£850M",
      description:
        "Facilitated a complex three-jurisdiction merger between a UK fintech and US payment processor, navigating regulatory challenges across multiple markets.",
      client: "Leading Fintech Company",
      location: "London • New York • Dubai",
      duration: "18 months",
      outcome: "Successful merger creating market leader",
      highlights: [
        "Regulatory approval in 3 jurisdictions",
        "Zero compliance issues post-merger",
        "15% cost synergies achieved",
      ],
      category: "M&A",
      year: "2024",
    },
    {
      id: 2,
      title: "Franchise Expansion",
      subtitle: "Global Distribution Strategy",
      value: "£1.2B",
      description:
        "Structured international franchise agreements for luxury retail brand expanding into 12 new markets, ensuring brand protection and operational consistency.",
      client: "Luxury Retail Group",
      location: "UAE • Europe • Asia",
      duration: "24 months",
      outcome: "Successful launch in 12 markets",
      highlights: ["12 new market entries", "Brand protection secured globally", "200% revenue growth achieved"],
      category: "Franchising",
      year: "2023",
    },
    {
      id: 3,
      title: "Strategic Joint Venture",
      subtitle: "Energy Sector Partnership",
      value: "£2.1B",
      description:
        "Established joint venture between renewable energy companies, creating one of the largest clean energy partnerships in the Middle East.",
      client: "Renewable Energy Consortium",
      location: "Dubai • London",
      duration: "12 months",
      outcome: "Market-leading clean energy JV",
      highlights: ["Largest renewable JV in region", "Government partnership secured", "Carbon neutral by 2030 target"],
      category: "Joint Venture",
      year: "2024",
    },
    {
      id: 4,
      title: "UHNW Estate Planning",
      subtitle: "Multi-Generational Wealth Strategy",
      value: "£500M+",
      description:
        "Comprehensive estate planning and succession strategy for ultra-high-net-worth family, spanning three generations and five jurisdictions.",
      client: "Private Family Office",
      location: "Global",
      duration: "36 months",
      outcome: "Seamless wealth transition",
      highlights: ["Tax-efficient structure created", "Multi-generational planning", "Privacy and legacy protected"],
      category: "Wealth Planning",
      year: "2023",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentCase = caseStudies[currentIndex]

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200">
        <div className="p-6 md:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2 md:space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3">
                  <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 w-fit">
                    {currentCase.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{currentCase.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{currentCase.title}</h3>
                <p className="text-base md:text-lg text-blue-600 font-medium">{currentCase.subtitle}</p>
              </div>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">{currentCase.description}</p>

              {/* Key Details - Stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>{currentCase.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>{currentCase.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Building className="h-5 w-5 text-blue-600" />
                  <span>{currentCase.client}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span>{currentCase.outcome}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                <ul className="space-y-2">
                  {currentCase.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Value Display - Responsive sizing */}
            <div className="text-center lg:text-right">
              <div className="inline-block p-6 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm w-full max-w-sm mx-auto lg:max-w-none">
                <div className="space-y-3 md:space-y-4">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {currentCase.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">Transaction Value</div>
                  <div className="flex justify-center lg:justify-end">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 italic">"Exceptional service and expertise"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        {/* Dots Indicator */}
        <div className="flex items-center gap-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
        <div className="w-20"></div> {/* Spacer for balance */}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / caseStudies.length) * 100}%` }}
        />
      </div>
    </div>
  )
}

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
      animatedIcon: <Globe className="h-8 w-8" />,
      title: "Cross-Border M&A",
      description: "Building bridges between cultures and jurisdictions with genuine understanding",
      metric: "Global Reach",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <Database className="h-8 w-8" />,
      animatedIcon: <TrendingUp className="h-8 w-8" />,
      title: "Corporate Finance",
      description: "From startup dreams to £1.2B ventures - we're with you every step",
      metric: "£1.2B Ventures",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      animatedIcon: <Network className="h-8 w-8" />,
      title: "Distribution & Franchising",
      description: "Connecting passionate brands with global markets through human insight",
      metric: "Global Markets",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      animatedIcon: <Lightbulb className="h-8 w-8" />,
      title: "Strategic Advisory",
      description: "Blue SKYE thinking that puts your vision at the center of every solution",
      metric: "Blue SKYE",
      color: "from-pink-600 to-blue-600",
    },
  ]

  const stats = [
    { value: "£2.5B+", label: "Transactions", sublabel: "Built on Trust" },
    { value: "15+", label: "Jurisdictions", sublabel: "Connected" },
    { value: "UAE+UK+US", label: "Global Offices", sublabel: "Local Hearts" },
    { value: "UHNW", label: "Client Tier", sublabel: "Personal Touch" },
  ]

  const coreTeam = [
    { name: "Simon Walker", title: "Founding Partner, Chairman", image: "/Team photos/1.png" },
    { name: "Susy Aryani", title: "Partner", image: "/Team photos/2.png" },
    { name: "Damola Oluwatade", title: "CTO", image: "/Team photos/3.png" },
  ]

  const advisoryPanel = [
    { name: "James Cadbury", title: "Senior Advisor", image: "/Team photos/4.png" },
    { name: "Dr Mansour Malik", title: "Senior Advisor", image: "/Team photos/5.png" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Light Mode Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        {/* Subtle light mode parallax effect */}
        <div
          className="absolute inset-0 opacity-30 transition-transform duration-75 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        {/* Additional subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50/20 via-transparent to-gray-50/20" />
      </div>

      {/* Header */}
      <header className="sticky top-0 relative z-50 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200 backdrop-blur-xl bg-white/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <Image
              src="/Skywaker logos/Skyewalker law logo-01.png"
              alt="Skyewalker Law"
              width={180}
              height={40}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="#tools" className="text-gray-600 hover:text-gray-900 transition-colors">
              Expertise
            </Link>
            <Link href="#results" className="text-gray-600 hover:text-gray-900 transition-colors">
              Results
            </Link>
            <Link href="#team" className="text-gray-600 hover:text-gray-900 transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-base px-3 md:px-4 py-2 hidden sm:inline-flex">
              Start Our Partnership
            </Button>
            <button className="lg:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <Link href="#services" className="block text-gray-600 hover:text-gray-900 transition-colors py-2">
                Services
              </Link>
              <Link href="#tools" className="block text-gray-600 hover:text-gray-900 transition-colors py-2">
                Expertise
              </Link>
              <Link href="#results" className="block text-gray-600 hover:text-gray-900 transition-colors py-2">
                Results
              </Link>
              <Link href="#team" className="block text-gray-600 hover:text-gray-900 transition-colors py-2">
                Team
              </Link>
              <Link href="#contact" className="block text-gray-600 hover:text-gray-900 transition-colors py-2">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full mt-4">
                Start Our Partnership
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 md:pt-20 pb-24 md:pb-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                <Zap className="h-3 w-3 mr-1" />
                BLUE SKYE THINKING
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                  With Us, Law Meets
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Human Connection
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                We don't just practice law—we build lasting partnerships. Behind every complex transaction is a human
                story, and our blue SKYE thinking starts with understanding yours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
              >
                Start Our Partnership
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
              >
                Hear Client Stories
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 md:pt-16 px-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-1 md:space-y-2 group cursor-pointer">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-900 font-medium text-sm md:text-base">{stat.label}</div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="results" className="relative z-10 py-16 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-purple-200 text-purple-700 bg-purple-50">
              <Award className="h-3 w-3 mr-1" />
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real partnerships, transformative outcomes. See how our blue SKYE approach has delivered exceptional
              results for clients across the globe.
            </p>
          </div>

          <CaseStudyCarousel />
        </div>
      </section>

      {/* Tech Arsenal Section */}
      <section id="tools" className="relative z-10 py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-indigo-200 text-indigo-700 bg-indigo-50">
              <Shield className="h-3 w-3 mr-1" />
              Areas of Expertise
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every client relationship begins with listening. We combine deep technical knowledge with genuine care for
              your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${tool.color} relative overflow-hidden`}>
                      <div className="relative z-10 group-hover:scale-0 transition-transform duration-300 text-white">
                        {tool.icon}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                        <AnimatedIcon type="pulse">
                          <div className="text-white">{tool.animatedIcon}</div>
                        </AnimatedIcon>
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900">{tool.title}</h3>
                        <Badge variant="outline" className="border-gray-300 text-gray-600">
                          {tool.metric}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                      <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
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
      <section id="services" className="relative z-10 py-12 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50">
                  <Gavel className="h-3 w-3 mr-1" />
                  Elite Legal Services
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Redefining Legal Excellence
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  We handle the impossible cases others won't touch. Our approach combines traditional legal mastery
                  with genuine understanding of what matters most to you.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {[
                  "Cross-Border M&A & Corporate Finance",
                  "Distribution, Franchising & Licensing",
                  "Joint Ventures & Strategic Partnerships",
                  "UHNW Individual & Corporate Advisory",
                ].map((service, index) => (
                  <AnimatedIcon key={index} delay={index * 100}>
                    <div className="flex items-center space-x-3 text-gray-600 group cursor-pointer">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-150 transition-transform duration-200 flex-shrink-0" />
                      <span className="group-hover:text-gray-900 transition-colors duration-200 text-sm md:text-base">
                        {service}
                      </span>
                    </div>
                  </AnimatedIcon>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full sm:w-auto">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-2xl border border-gray-200 shadow-sm overflow-hidden relative">
                {/* Video Background with fallback */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  poster="/placeholder.svg?height=400&width=400"
                  onError={(e) => {
                    // Fallback if video fails to load
                    e.currentTarget.style.display = "none"
                    const fallback = e.currentTarget.nextElementSibling
                    if (fallback) fallback.style.display = "block"
                  }}
                >
                  <source src="/8061751-uhd_2160_3840_25fps.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Fallback background image */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 hidden"
                  style={{ display: "none" }}
                />

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content overlay */}
                <div className="relative z-10 h-full flex items-center justify-center p-6 md:p-8">
                  <div className="text-center space-y-3 md:space-y-4">
                    <div className="relative">
                      <AnimatedIcon type="pulse" delay={1000}>
                        <Lock className="h-12 w-12 md:h-16 md:w-16 mx-auto text-white" />
                      </AnimatedIcon>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Client Success Stories</h3>
                    <p className="text-white/90 text-sm md:text-base">
                      Real partnerships, real outcomes, real impact on people's lives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative z-10 py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
              <Users className="h-3 w-3 mr-1" />
              Our Team
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">The Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strength lies not just in our expertise, but in our ability to connect with clients and understand
              what truly matters to them.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {coreTeam.map((member, index) => (
              <div key={index}>
                <Card className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="mb-4">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              width={120}
                              height={120}
                              className="rounded-full object-cover"
                              style={{
                                objectPosition: "center top",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        {/* Normal border when not hovering */}
                        <div className="absolute inset-0 border-2 border-gray-200 rounded-full group-hover:opacity-0 transition-opacity duration-300">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="rounded-full object-cover w-full h-full"
                            style={{
                              objectPosition: "center top",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                    </div>
                    <div className="text-lg md:text-xl font-bold text-gray-900">{member.name}</div>
                    <div className="text-gray-600 text-sm md:text-base">{member.title}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4 mb-8">
            <Badge variant="outline" className="border-orange-200 text-orange-700 bg-orange-50">
              <Users className="h-3 w-3 mr-1" />
              Advisory Panel
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {advisoryPanel.map((member, index) => (
              <div key={index}>
                <Card className="bg-white border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="relative w-32 h-32 mx-auto group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              width={120}
                              height={120}
                              className="rounded-full object-cover"
                              style={{
                                objectPosition: "center top",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                        {/* Normal border when not hovering */}
                        <div className="absolute inset-0 border-2 border-gray-200 rounded-full group-hover:opacity-0 transition-opacity duration-300">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="rounded-full object-cover w-full h-full"
                            style={{
                              objectPosition: "center top",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-gray-900">{member.name}</div>
                    <div className="text-gray-600">{member.title}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 md:py-24 px-4 md:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Let's Start a Conversation
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Behind every successful legal outcome is a strong partnership built on trust, understanding, and shared
            vision. We'd love to learn about your challenges and explore how our blue SKYE approach can help you achieve
            your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 py-8 md:py-12 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/Skywaker logos/Skyewalker law logo-01.png"
                  alt="Skyewalker Law"
                  width={200}
                  height={45}
                  className="h-12 md:h-14 w-auto"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Services</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Cross-Border M&A</div>
                <div>Distribution & Franchising</div>
                <div>Joint Ventures</div>
                <div>UHNW Advisory</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Expertise</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Global Transactions</div>
                <div>Corporate Finance</div>
                <div>Strategic Partnerships</div>
                <div>International Law</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2025 Skyewalker Law. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
