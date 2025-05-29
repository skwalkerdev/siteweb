"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Globe,
  Handshake,
  Banknote,
  Users,
  ChevronRight,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "General Corporate and Corporate Finance",
      description:
        "Comprehensive corporate legal services covering entity formation, governance, compliance, and strategic corporate finance solutions. We guide businesses through complex regulatory landscapes while optimizing their corporate structure for growth and efficiency.",
      features: [
        "Corporate governance and compliance",
        "Entity formation and restructuring",
        "Regulatory compliance and reporting",
        "Corporate finance strategy",
      ],
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Investments and Private Equity Transactions",
      description:
        "Expert guidance for institutional investors, portfolio companies, and management teams across the full spectrum of private equity transactions. From early-stage venture capital to complex leveraged buyouts, we structure deals that drive value creation and sustainable growth.",
      features: [
        "Equity and debt financing structures",
        "Convertible bonds and mezzanine financing",
        "Management buyouts and leveraged transactions",
        "Institutional investor representation",
      ],
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Stock Exchange Listings and Capital Markets",
      description:
        "Navigate the complexities of public markets with our comprehensive capital markets expertise. We facilitate successful IPOs, secondary offerings, and ongoing public company compliance across multiple jurisdictions, ensuring regulatory adherence while maximizing market opportunities.",
      features: [
        "Initial Public Offerings (IPOs)",
        "Secondary market transactions",
        "Public company compliance",
        "Cross-border listings and regulations",
      ],
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Handshake className="h-10 w-10" />,
      title: "Share and Business Acquisitions",
      description:
        "Strategic M&A advisory across diverse jurisdictions, including complex transactions involving publicly listed companies. Our cross-border expertise ensures seamless execution of acquisitions, from due diligence through post-merger integration, maximizing value while mitigating risks.",
      features: [
        "Cross-jurisdictional M&A transactions",
        "Public company acquisitions",
        "Due diligence and risk assessment",
        "Post-merger integration support",
      ],
      color: "from-pink-600 to-red-600",
    },
    {
      icon: <Banknote className="h-10 w-10" />,
      title: "Banking Transactions",
      description:
        "Comprehensive banking and finance solutions covering complex loan structures, security arrangements, and project finance. We work with major financial institutions and borrowers to structure innovative financing solutions for large-scale infrastructure and development projects.",
      features: [
        "Complex loan agreements and security structures",
        "Project finance and infrastructure funding",
        "Banking documentation for major institutions",
        "Syndicated lending and debt restructuring",
      ],
      color: "from-red-600 to-orange-600",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Domestic and International Joint Ventures",
      description:
        "Strategic partnership structuring for complex joint ventures spanning multiple sectors and jurisdictions. From property development and hospitality ventures to technology partnerships, we create frameworks that align interests and drive collaborative success.",
      features: [
        "Property and development joint ventures",
        "Hotel and hospitality partnerships",
        "Technology and innovation collaborations",
        "Cross-border strategic alliances",
      ],
      color: "from-orange-600 to-yellow-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6 border-b border-gray-200/50 backdrop-blur-xl bg-white/95 shadow-sm">
        <div className="max-w-8xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 md:space-x-4">
            <Image
              src="/Skywaker logos/Skyewalker law logo-01.png"
              alt="Skyewalker Law"
              width={200}
              height={50}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-12">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg">
              Home
            </Link>
            <Link href="/services" className="text-blue-600 font-semibold text-lg">
              Services
            </Link>
            <Link
              href="/#expertise"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
            >
              Expertise
            </Link>
            <Link href="/#results" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg">
              Results
            </Link>
            <Link href="/#team" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg">
              Team
            </Link>
          </nav>

          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-6 md:px-8 py-3 md:py-4 font-medium shadow-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-8 bg-gradient-to-br from-gray-50/80 via-white to-blue-50/80">
        <div className="max-w-8xl mx-auto text-center">
          <div className="space-y-12">
            <Badge
              variant="outline"
              className="border-blue-200 text-blue-700 bg-blue-50/80 px-6 py-3 text-lg font-semibold"
            >
              <Briefcase className="h-4 w-4 mr-2" />
              COMPREHENSIVE LEGAL SERVICES
            </Badge>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                Expert Legal Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Across All Sectors
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              From corporate finance to international joint ventures, our comprehensive suite of legal services is
              designed to support your business at every stage of growth and expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="grid gap-16 md:gap-20">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <CardContent className="p-12 md:p-16">
                  <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Icon and Title */}
                    <div className="space-y-8">
                      <div className={`p-6 rounded-3xl bg-gradient-to-r ${service.color} w-fit shadow-lg`}>
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-1 space-y-6">
                      <p className="text-gray-600 leading-relaxed text-xl font-medium">{service.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-8">
                      <h4 className="font-bold text-gray-900 text-2xl">Key Services:</h4>
                      <ul className="space-y-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-4 text-gray-600">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-lg font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700 p-0 h-auto mt-8 text-lg font-medium"
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

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-gray-50/50">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
            Our team of experts is ready to provide tailored legal solutions for your specific needs. Let's discuss how
            we can support your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl px-12 py-8 font-semibold shadow-xl"
              >
                Schedule Consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/#team">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 text-xl px-12 py-8 font-semibold"
              >
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200/50 py-16 md:py-20 px-6 md:px-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <Link href="/">
                <Image
                  src="/Skywaker logos/Skyewalker law logo-01.png"
                  alt="Skyewalker Law"
                  width={220}
                  height={55}
                  className="h-14 md:h-16 w-auto"
                />
              </Link>
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
