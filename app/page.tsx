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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-purple-50/80 border border-gray-200/50 shadow-2xl backdrop-blur-sm">
        <div className="p-12 md:p-16 lg:p-20">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
                  <Badge
                    variant="outline"
                    className="border-blue-200 text-blue-700 bg-blue-50/80 w-fit px-4 py-2 text-sm font-medium"
                  >
                    {currentCase.category}
                  </Badge>
                  <span className="text-sm text-gray-500 font-medium">{currentCase.year}</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {currentCase.title}
                </h3>
                <p className="text-xl md:text-2xl text-blue-600 font-semibold">{currentCase.subtitle}</p>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg md:text-xl">{currentCase.description}</p>

              {/* Key Details - Stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="flex items-center gap-4 text-gray-600">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">{currentCase.location}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">{currentCase.duration}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <Building className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">{currentCase.client}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span className="text-lg">{currentCase.outcome}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-6">
                <h4 className="font-bold text-gray-900 text-xl">Key Achievements:</h4>
                <ul className="space-y-4">
                  {currentCase.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-4 text-gray-600 text-lg">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Value Display - Responsive sizing */}
            <div className="text-center lg:text-right">
              <div className="inline-block p-10 md:p-12 rounded-3xl bg-white/90 border border-gray-200/50 shadow-xl backdrop-blur-sm w-full max-w-sm mx-auto lg:max-w-none">
                <div className="space-y-6 md:space-y-8">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {currentCase.value}
                  </div>
                  <div className="text-gray-600 font-semibold text-lg md:text-xl">Transaction Value</div>
                  <div className="flex justify-center lg:justify-end">
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-gray-500 italic font-medium">"Exceptional service and expertise"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-6">
          <Button
            variant="outline"
            size="lg"
            onClick={prevSlide}
            className="border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 px-6 py-3"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={nextSlide}
            className="border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 px-6 py-3"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        {/* Dots Indicator */}
        <div className="flex items-center gap-3">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-600 to-purple-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
        <div className="w-32"></div> {/* Spacer for balance */}
      </div>

      {/* Progress Bar */}
      <div className="mt-8 w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / caseStudies.length) * 100}%` }}
        />
      </div>
    </div>
  )
}

export default function LawFirmLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const tools = [
    {
      icon: <Brain className="h-10 w-10" />,
      animatedIcon: <Globe className="h-10 w-10" />,
      title: "Cross-Border M&A",
      description: "Building bridges between cultures and jurisdictions with genuine understanding",
      metric: "Global Reach",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <Database className="h-10 w-10" />,
      animatedIcon: <TrendingUp className="h-10 w-10" />,
      title: "Corporate Finance",
      description: "From startup dreams to £1.2B ventures - we're with you every step",
      metric: "£1.2B Ventures",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      animatedIcon: <Network className="h-10 w-10" />,
      title: "Distribution & Franchising",
      description: "Connecting passionate brands with global markets through human insight",
      metric: "Global Markets",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Eye className="h-10 w-10" />,
      animatedIcon: <Lightbulb className="h-10 w-10" />,
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

  const allTeamMembers = [
    { name: "Simon Walker", title: "Founding Partner, Chairman", image: "/Team photos/1.png", type: "core" },
    { name: "Susy Aryani", title: "Partner", image: "/Team photos/2.png", type: "core" },
    { name: "Damola Oluwatade", title: "CTO", image: "/Team photos/3.png", type: "core" },
    { name: "James Cadbury", title: "Senior Advisor", image: "/Team photos/4.png", type: "advisory" },
    { name: "Dr Mansour Malik", title: "Senior Advisor", image: "/Team photos/5.png", type: "advisory" },
  ]

  const coreTeam = allTeamMembers.filter((member) => member.type === "core")
  const advisoryPanel = allTeamMembers.filter((member) => member.type === "advisory")

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
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6 border-b border-gray-200/50 backdrop-blur-xl bg-white/95 shadow-sm">
        <div className="max-w-8xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 md:space-x-4">
            <Image
              src="/Skywaker logos/Skyewalker law logo-01.png"
              alt="Skyewalker Law"
              width={200}
              height={50}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-12">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg">
              Services
            </Link>
            <Link href="#expertise" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg">
              Expertise
            </Link>
            <Link href="#results" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg">
              Results
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg">
              Team
            </Link>
          </nav>

          <div className="flex items-center space-x-4 md:space-x-6">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-6 md:px-8 py-3 md:py-4 hidden sm:inline-flex font-medium shadow-lg">
              Begin Partnership
            </Button>
            <button className="lg:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 md:h-7 md:w-7" /> : <Menu className="h-6 w-6 md:h-7 md:w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl">
            <nav className="px-6 py-8 space-y-6">
              <Link
                href="/"
                className="block text-gray-700 hover:text-gray-900 transition-colors py-3 text-lg font-medium"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block text-gray-700 hover:text-gray-900 transition-colors py-3 text-lg font-medium"
              >
                Services
              </Link>
              <Link
                href="#expertise"
                className="block text-gray-700 hover:text-gray-900 transition-colors py-3 text-lg font-medium"
              >
                Expertise
              </Link>
              <Link
                href="#results"
                className="block text-gray-700 hover:text-gray-900 transition-colors py-3 text-lg font-medium"
              >
                Results
              </Link>
              <Link
                href="#team"
                className="block text-gray-700 hover:text-gray-900 transition-colors py-3 text-lg font-medium"
              >
                Team
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full mt-6 py-4 text-lg font-medium">
                Begin Partnership
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 md:pt-40 pb-32 md:pb-40 px-6 md:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="text-center space-y-12 md:space-y-16">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="border-blue-200 text-blue-700 bg-blue-50/80 px-6 py-3 text-lg font-semibold"
              >
                <Zap className="h-4 w-4 mr-2" />
                BLUE SKYE THINKING
              </Badge>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                  Where Law Meets
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Human Connection
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-6 font-medium">
                We don't just practice law—we build lasting partnerships. Behind every complex transaction is a human
                story, and our blue SKYE thinking starts with understanding yours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl px-10 md:px-12 py-6 md:py-8 w-full sm:w-auto font-semibold shadow-xl"
                onClick={() => setIsConsultationFormOpen(true)}
              >
                Begin Partnership
                <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 text-xl px-10 md:px-12 py-6 md:py-8 w-full sm:w-auto font-semibold"
              >
                Client Stories
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-20 md:pt-24 px-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-3 md:space-y-4 group cursor-pointer">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-900 font-semibold text-lg md:text-xl">{stat.label}</div>
                  <div className="text-sm md:text-base text-gray-500 font-medium">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="results" className="relative z-10 py-24 md:py-32 px-6 md:px-8 bg-gray-50/50">
        <div className="max-w-8xl mx-auto">
          <div className="text-center space-y-8 mb-24">
            <Badge
              variant="outline"
              className="border-purple-200 text-purple-700 bg-purple-50/80 px-6 py-3 text-lg font-semibold"
            >
              <Award className="h-4 w-4 mr-2" />
              CLIENT SUCCESS STORIES
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
              Real partnerships, transformative outcomes. See how our blue SKYE approach has delivered exceptional
              results for clients across the globe.
            </p>
          </div>

          <CaseStudyCarousel />
        </div>
      </section>

      {/* Tech Arsenal Section */}
      <section id="expertise" className="relative z-10 py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="text-center space-y-8 mb-24">
            <Badge
              variant="outline"
              className="border-indigo-200 text-indigo-700 bg-indigo-50/80 px-6 py-3 text-lg font-semibold"
            >
              <Shield className="h-4 w-4 mr-2" />
              AREAS OF EXPERTISE
            </Badge>

            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
              Every client relationship begins with listening. We combine deep technical knowledge with genuine care for
              your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <CardContent className="p-12">
                  <div className="flex items-start space-x-8">
                    <div
                      className={`p-5 rounded-2xl bg-gradient-to-r ${tool.color} relative overflow-hidden shadow-lg`}
                    >
                      <div className="relative z-10 group-hover:scale-0 transition-transform duration-300 text-white">
                        {tool.icon}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                        <AnimatedIcon type="pulse">
                          <div className="text-white">{tool.animatedIcon}</div>
                        </AnimatedIcon>
                      </div>
                    </div>
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900">{tool.title}</h3>
                        <Badge variant="outline" className="border-gray-300 text-gray-600 px-4 py-2 font-medium">
                          {tool.metric}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">{tool.description}</p>
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto text-lg font-medium"
                      >
                        Learn More <ChevronRight className="ml-2 h-5 w-5" />
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
      <section id="services" className="relative z-10 py-24 md:py-32 px-6 md:px-8 bg-gray-50/50">
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="space-y-10 md:space-y-12 order-2 lg:order-1">
              <div className="space-y-8">
                <Badge
                  variant="outline"
                  className="border-emerald-200 text-emerald-700 bg-emerald-50/80 px-6 py-3 text-lg font-semibold"
                >
                  <Gavel className="h-4 w-4 mr-2" />
                  ELITE LEGAL SERVICES
                </Badge>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Redefining Legal Excellence
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                  We handle the impossible cases others won't touch. Our approach combines traditional legal mastery
                  with genuine understanding of what matters most to you.
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                {[
                  "Cross-Border M&A & Corporate Finance",
                  "Distribution, Franchising & Licensing",
                  "Joint Ventures & Strategic Partnerships",
                  "UHNW Individual & Corporate Advisory",
                ].map((service, index) => (
                  <AnimatedIcon key={index} delay={index * 100}>
                    <div className="flex items-center space-x-6 text-gray-600 group cursor-pointer">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-150 transition-transform duration-200 flex-shrink-0" />
                      <span className="group-hover:text-gray-900 transition-colors duration-200 text-lg md:text-xl font-medium">
                        {service}
                      </span>
                    </div>
                  </AnimatedIcon>
                ))}
              </div>

              <Link href="/services">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full sm:w-auto text-xl px-10 py-6 font-semibold shadow-xl">
                  Explore All Services
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-square w-full max-w-lg mx-auto lg:max-w-none rounded-3xl border border-gray-200/50 shadow-2xl overflow-hidden relative">
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
                <div className="relative z-10 h-full flex items-center justify-center p-10 md:p-12">
                  <div className="text-center space-y-6 md:space-y-8">
                    <div className="relative">
                      <AnimatedIcon type="pulse" delay={1000}>
                        <Lock className="h-16 w-16 md:h-20 md:w-20 mx-auto text-white" />
                      </AnimatedIcon>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Client Success Stories</h3>
                    <p className="text-white/90 text-lg md:text-xl font-medium">
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
      <section id="team" className="relative z-10 py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="text-center space-y-8 mb-24">
            <Badge
              variant="outline"
              className="border-blue-200 text-blue-700 bg-blue-50/80 px-6 py-3 text-lg font-semibold"
            >
              <Users className="h-4 w-4 mr-2" />
              OUR TEAM
            </Badge>

            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">The Team</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
              Our strength lies not just in our expertise, but in our ability to connect with clients and understand
              what truly matters to them.
            </p>
          </div>

          {/* Core Team */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
              {coreTeam.map((member, index) => (
                <div key={index}>
                  <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    <CardContent className="p-8 md:p-10 text-center">
                      <div className="mb-8">
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto group">
                          {/* Pulsing glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-lg opacity-40 animate-pulse"></div>

                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                              <Image
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                width={160}
                                height={160}
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
                              width={160}
                              height={160}
                              className="rounded-full object-cover w-full h-full"
                              style={{
                                objectPosition: "center top",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{member.name}</div>
                      <div className="text-gray-600 text-lg md:text-xl font-medium">{member.title}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Panel */}
          <div>
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advisory Panel</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
              {advisoryPanel.map((member, index) => (
                <div key={index}>
                  <Card className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    <CardContent className="p-8 md:p-10 text-center">
                      <div className="mb-8">
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto group">
                          {/* Pulsing glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-full blur-lg opacity-40 animate-pulse"></div>

                          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                              <Image
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                width={160}
                                height={160}
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
                              width={160}
                              height={160}
                              className="rounded-full object-cover w-full h-full"
                              style={{
                                objectPosition: "center top",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{member.name}</div>
                      <div className="text-gray-600 text-lg md:text-xl font-medium">{member.title}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 md:py-32 px-6 md:px-8 bg-gray-50/50">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Let's Start a Conversation
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
            Behind every successful legal outcome is a strong partnership built on trust, understanding, and shared
            vision. We'd love to learn about your challenges and explore how our blue SKYE approach can help you achieve
            your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl px-12 py-8 font-semibold shadow-xl"
              onClick={() => setIsConsultationFormOpen(true)}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Consultation Form Modal */}
      {isConsultationFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-200/50">
            <div className="p-8 border-b border-gray-200/50">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Schedule Consultation</h3>
                <button
                  onClick={() => setIsConsultationFormOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>
            </div>
            <form className="p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-lg font-semibold text-gray-700 mb-3">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-lg font-semibold text-gray-700 mb-3">
                  Service Interest
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                >
                  <option value="">Select a service</option>
                  <option value="cross-border-ma">Cross-Border M&A</option>
                  <option value="corporate-finance">Corporate Finance</option>
                  <option value="distribution-franchising">Distribution & Franchising</option>
                  <option value="joint-ventures">Joint Ventures</option>
                  <option value="uhnw-advisory">UHNW Advisory</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="Tell us about your legal needs..."
                ></textarea>
              </div>
              <div className="flex gap-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 py-4 text-lg font-medium"
                  onClick={() => setIsConsultationFormOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-medium"
                >
                  Send Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200/50 py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src="/Skywaker logos/Skyewalker law logo-01.png"
                  alt="Skyewalker Law"
                  width={220}
                  height={55}
                  className="h-14 md:h-16 w-auto"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-gray-900 text-xl">Services</h4>
              <div className="space-y-4 text-lg text-gray-600">
                <div>Cross-Border M&A</div>
                <div>Distribution & Franchising</div>
                <div>Joint Ventures</div>
                <div>UHNW Advisory</div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-gray-900 text-xl">Expertise</h4>
              <div className="space-y-4 text-lg text-gray-600">
                <div>Global Transactions</div>
                <div>Corporate Finance</div>
                <div>Strategic Partnerships</div>
                <div>International Law</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200/50 mt-16 pt-12 text-center text-lg text-gray-500 font-medium">
            <p>&copy; 2025 Skyewalker Law. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
