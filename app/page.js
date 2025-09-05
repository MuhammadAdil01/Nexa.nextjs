'use client'
import {
  Menu, X, Instagram, Facebook, Twitter, Linkedin, Play, Trophy, Users, Zap, Globe, Blocks, CheckCircle, Lightbulb, ChartCandlestick, Code, BarChart3, MapPin, Mail,Phone ,Clock
} from "lucide-react"
import Link from "next/link";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import ClientWrapper from "@/components/aos"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Landingpage() {
  const [open, setOpen] = useState(false)

  return (
    <ClientWrapper>
      <section>
        <nav className="bg-black shadow-md fixed top-0 left-0 w-full z-50">
          <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl text-white font-serif">Nexa</h1>
            </div>
          <ul className="flex space-x-6">
  <li>
    <Link 
      href="/" 
      className="font-serif text-base lg:text-lg text-white hover:text-green-400 cursor-pointer transition-colors"
    >
      Home
    </Link>
  </li>
  <li>
    <Link 
      href="#about" 
      className="font-serif text-base lg:text-lg text-white hover:text-green-400 cursor-pointer transition-colors"
    >
      About
    </Link>
  </li>
  <li>
    <Link 
      href="
      #services" 
      className="font-serif text-base lg:text-lg text-white hover:text-green-400 cursor-pointer transition-colors"
    >
      Services
    </Link>
  </li>
  <li>
    <Link 
      href="#contact" 
      className="font-serif text-base lg:text-lg text-white hover:text-green-400 cursor-pointer transition-colors"
    >
      Contact
    </Link>
  </li>
    <li>
    <Link 
      href="/dashboard" 
      className="font-serif text-base lg:text-lg text-white hover:text-green-400 cursor-pointer transition-colors"
    >Dashboard
    </Link>
  </li>
</ul>

            <div className="hidden md:flex space-x-3 lg:space-x-4">
              <Instagram className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-gray-300 hover:text-white transition-colors"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-gray-900 shadow-lg border-t border-gray-700">
              <ul className="flex flex-col space-y-3 p-6 text-gray-300 font-medium">
                <li className="hover:text-green-400 cursor-pointer transition-colors py-2">Home</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors py-2">About</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors py-2">Services</li>
                <li className="hover:text-green-400 cursor-pointer transition-colors py-2">Contact</li>
                <div className="flex space-x-4 pt-4 border-t border-gray-700">
                  <Instagram className="w-5 h-5 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
                  <Facebook className="w-5 h-5 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
                  <Twitter className="w-5 h-5 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-green-400 cursor-pointer transition-colors" />
                </div>
              </ul>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 bg-black">
          <div data-aos="flip-up" className="container mx-auto text-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight px-2">
              Innovative Business Solutions for Tomorrow
            </h1>
            <p className="text-gray-300 mt-6 sm:mt-8 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2 leading-relaxed">
              Innovation is the driving force behind modern business success. It goes beyond simply creating new products its about rethinking processes, improving customer experiences, and finding smarter solutions to everyday challenges. Businesses that embrace innovation are able to adapt quickly to changing markets, stay ahead of competitors.
            </p>
            <div data-aos="flip-left" className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-10 px-4">
              <Button variant="journey" className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
                Start your journey
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-3xl text-sm sm:text-base hover:bg-white hover:text-black transition-all">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="bg-black px-4 pb-16">
          <div data-aos="zoom-in" className="flex items-center justify-center">
            <Image
              className="rounded-2xl sm:rounded-3xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
              src="/planning-community.jpg"
              width={500}
              height={300}
              priority={true}
              alt="Planning Community"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-black px-4 pb-20">
          <div data-aos="zoom-in-left" className="flex flex-wrap justify-center gap-4 sm:gap-6 p-4 sm:p-6">
            <Card className="bg-gray-900 border-0 p-4 sm:p-6 w-full sm:w-48 lg:w-56 text-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl m-auto bg-green-700 flex items-center justify-center">
                <Trophy className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <CardContent className="p-2 sm:p-4">
                <p className="text-2xl sm:text-3xl text-white font-extrabold">25+</p>
                <p className="text-sm sm:text-lg text-white">Awards Won</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-0 p-4 sm:p-6 w-full sm:w-48 lg:w-56 text-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl m-auto bg-green-700 flex items-center justify-center">
                <Users className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <CardContent className="p-2 sm:p-4">
                <p className="text-2xl sm:text-3xl text-white font-extrabold">850+</p>
                <p className="text-sm sm:text-lg text-white">Happy Clients</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-0 p-4 sm:p-6 w-full sm:w-48 lg:w-56 text-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl m-auto bg-green-700 flex items-center justify-center">
                <Zap className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <CardContent className="p-2 sm:p-4">
                <p className="text-2xl sm:text-3xl text-white font-extrabold">95%</p>
                <p className="text-sm sm:text-lg text-white">Project success</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-0 p-4 sm:p-6 w-full sm:w-48 lg:w-56 text-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl m-auto bg-green-700 flex items-center justify-center">
                <Globe className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <CardContent className="p-2 sm:p-4">
                <p className="text-2xl sm:text-3xl text-white font-extrabold">12+</p>
                <p className="text-sm sm:text-lg text-white">Country Served</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-black py-16 sm:py-20 px-4 text-center">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">About</h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Our company is built on innovation, trust, and excellence. We strive to deliver high-quality solutions that meet the needs of our clients and create lasting value. With a dedicated team of professionals, we focus on combining creativity and technology to drive growth and success
            </p>
          </div>

          {/* About Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mt-12 sm:mt-16 px-4">
            <div data-aos="zoom-out-up" className="w-full lg:w-1/2">
              <Image
                className="rounded-2xl sm:rounded-3xl w-full max-w-md mx-auto"
                src="/girl-think.jpg"
                width={500}
                height={500}
                priority={true}
                alt="Girl Thinking"
              />
            </div>
            <section className="bg-black text-white py-12 sm:py-16 px-4 lg:px-6 w-full lg:w-1/2">
              {/* Heading */}
              <div data-aos="zoom-out-up" className="max-w-2xl mx-auto text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Empowering <br className="hidden sm:block" /> Businesses Through <br className="hidden sm:block" /> Innovative Solutions
                </h1>
                <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg">
                  Agile methodologies drive our collaborative approach, ensuring optimal outcomes across diverse industry verticals.
                </p>
              </div>

              {/* Cards */}
              <div data-aos="zoom-out-up" className="mt-8 sm:mt-12 max-w-2xl mx-auto space-y-4 sm:space-y-6">
                {/* Card 1 */}
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="bg-green-900/40 p-2 sm:p-3 rounded-xl flex-shrink-0">
                    <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Expert Consulting</h3>
                    <p className="text-gray-400 mt-1 text-sm sm:text-base">
                      In today&apos;s dynamic market landscape, strategic implementation of emerging technologies
                      drives competitive advantage and sustainable growth trajectories.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="bg-green-900/40 p-2 sm:p-3 rounded-xl flex-shrink-0">
                    <Lightbulb className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Innovative Solutions</h3>
                    <p className="text-gray-400 mt-1 text-sm sm:text-base">
                      Leveraging cutting-edge frameworks and methodologies to deliver impactful, scalable,
                      and future-ready solutions.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="bg-green-900/40 p-2 sm:p-3 rounded-xl flex-shrink-0">
                    <ChartCandlestick className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">Growth Strategy</h3>
                    <p className="text-gray-400 mt-1 text-sm sm:text-base">
                      Our comprehensive approach to digital transformation enables organizations to achieve sustainable competitive advantages in their respective markets.
                    </p>
                  </div>
                </div>

                <div data-aos="flip-left" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6 sm:mt-8">
                  <Button variant="journey" className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base">
                    Learn More
                  </Button>
                  <Button variant="outline" className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-3xl text-sm sm:text-base hover:bg-white hover:text-black transition-all">
                    Get Started
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-black px-4 pb-20">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Services</h1>
            <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Our company is built on a passion for innovation, quality, and customer satisfaction. We strive to deliver exceptional solutions that not only meet industry standards but also set new benchmarks for excellence.
            </p>
          </div>
          
          <div data-aos="fade-up" data-aos-duration="3000" className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-6xl mx-auto">
            {/* Card 1 */}
            <Card className="bg-[#1a1d1f] text-white rounded-xl sm:rounded-2xl border-none shadow-lg overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                {/* Icon Section */}
                <div className="bg-[#162221] p-4 sm:p-6 flex items-center justify-center">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                </div>
                {/* Content Section */}
                <div className="flex-1 p-4 sm:p-6 relative">
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg sm:text-xl font-bold">
                      Custom Application Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-3 text-gray-300 text-sm sm:text-base">
                    <p>
                      We create scalable, high-performing applications tailored
                      specifically to your business needs. Our solutions ensure
                      seamless integration and long-term success.
                    </p>
                    <Button className="text-green-500 mt-4 inline-block text-sm sm:text-base hover:text-green-400 transition-colors">
                      Learn More →
                    </Button>
                  </CardContent>
                  <span className="absolute top-2 right-2 sm:top-4 sm:right-4 text-4xl sm:text-6xl font-bold text-gray-700/20">
                    01
                  </span>
                </div>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="bg-[#1a1d1f] text-white rounded-xl sm:rounded-2xl border-none shadow-lg overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                {/* Icon Section */}
                <div className="bg-[#162221] p-4 sm:p-6 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                </div>
                {/* Content Section */}
                <div className="flex-1 p-4 sm:p-6 relative">
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg sm:text-xl font-bold">
                      Strategic Business Planning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-3 text-gray-300 text-sm sm:text-base">
                    <p>
                      Our experts provide insights and strategies that help you
                      optimize operations, reduce risks, and accelerate growth.
                    </p>
                    <Button className="text-green-500 mt-4 inline-block text-sm sm:text-base hover:text-green-400 transition-colors">
                      Learn More →
                    </Button>
                  </CardContent>
                  <span className="absolute top-2 right-2 sm:top-4 sm:right-4 text-4xl sm:text-6xl font-bold text-gray-700/20">
                    02
                  </span>
                </div>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="bg-[#1a1d1f] text-white rounded-xl sm:rounded-2xl border-none shadow-lg overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                {/* Icon Section */}
                <div className="bg-[#162221] p-4 sm:p-6 flex items-center justify-center">
                  <Blocks className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                </div>
                {/* Content Section */}
                <div className="flex-1 p-4 sm:p-6 relative">
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg sm:text-xl font-bold">
                      Brand & Identity Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-3 text-gray-300 text-sm sm:text-base">
                    <p>
                      Our experts provide insights and strategies that help you
                      optimize operations, reduce risks, and accelerate growth.
                    </p>
                    <Button className="text-green-500 mt-4 inline-block text-sm sm:text-base hover:text-green-400 transition-colors">
                      Learn More →
                    </Button>
                  </CardContent>
                  <span className="absolute top-2 right-2 sm:top-4 sm:right-4 text-4xl sm:text-6xl font-bold text-gray-700/20">
                    03
                  </span>
                </div>
              </div>
            </Card>

            {/* Card 4 */}
            <Card className="bg-[#1a1d1f] text-white rounded-xl sm:rounded-2xl border-none shadow-lg overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                {/* Icon Section */}
                <div className="bg-[#162221] p-4 sm:p-6 flex items-center justify-center">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                </div>
                {/* Content Section */}
                <div className="flex-1 p-4 sm:p-6 relative">
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg sm:text-xl font-bold">
                      Digital Marketing & SEO
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-3 text-gray-300 text-sm sm:text-base">
                    <p>
                      Our experts provide insights and strategies that help you
                      optimize operations, reduce risks, and accelerate growth.
                    </p>
                    <Button className="text-green-500 mt-4 inline-block text-sm sm:text-base hover:text-green-400 transition-colors">
                      Learn More →
                    </Button>
                  </CardContent>
                  <span className="absolute top-2 right-2 sm:top-4 sm:right-4 text-4xl sm:text-6xl font-bold text-gray-700/20">
                    04
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
         <>
      {/* Contact Section */}
      <section id="contact" className="bg-black w-full py-12 sm:py-16 px-4">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">Contact</h1>
          <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We&apos;re always here to connect and collaborate. Whether you have a question, 
            need support, or want to explore how our services can help your business grow, 
            our team is ready to assist you.
          </p>
        </div>

        {/* Info + Map */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 max-w-6xl mx-auto w-full">
          
          {/* Info Cards */}
          <section className="bg-teal-700 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 w-full lg:w-1/2 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold">Contact Information</h2>
            <p className="mt-2 sm:mt-3 text-gray-100 text-sm sm:text-base">
              We&apos;re here to answer your questions and provide support. 
              Get in touch with us anytime — we&apos;d love to hear from you.
            </p>

            <div className="mt-6 space-y-3 sm:space-y-4 flex-1">
              {/* Location */}
              <Card className="bg-teal-600 border-none rounded-lg sm:rounded-xl">
                <CardContent className="flex flex-col items-center text-center gap-2 sm:gap-3 p-3 sm:p-4">
                  <div className="bg-teal-500 p-2 sm:p-3 rounded-full">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Our Location</h4>
                  <p className="text-gray-200 text-xs sm:text-sm">4952 Hilltop Dr, Anytown, CA 90210</p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="bg-teal-600 border-none rounded-lg sm:rounded-xl">
                <CardContent className="flex flex-col items-center text-center gap-2 sm:gap-3 p-3 sm:p-4">
                  <div className="bg-teal-500 p-2 sm:p-3 rounded-full">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Email Us</h4>
                  <p className="text-gray-200 text-xs sm:text-sm">info@example.com</p>
                </CardContent>
              </Card>

              {/* Call */}
              <Card className="bg-teal-600 border-none rounded-lg sm:rounded-xl">
                <CardContent className="flex flex-col items-center text-center gap-2 sm:gap-3 p-3 sm:p-4">
                  <div className="bg-teal-500 p-2 sm:p-3 rounded-full">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Call Us</h4>
                  <p className="text-gray-200 text-xs sm:text-sm">+971 3476 752</p>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="bg-teal-600 border-none rounded-lg sm:rounded-xl">
                <CardContent className="flex flex-col items-center text-center gap-2 sm:gap-3 p-3 sm:p-4">
                  <div className="bg-teal-500 p-2 sm:p-3 rounded-full">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Working Hours</h4>
                  <p className="text-gray-200 text-xs sm:text-sm">Mon - Sat: 9AM - 7PM</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Map */}
          <section className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-auto min-h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509394!2d144.95373631531693!3d-37.81627917975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777fa2480b0f!2sEnvato!5e0!3m2!1sen!2sau!4v1614654542379!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
      </section>

      {/* Footer */}
     <footer className="bg-black text-gray-300 py-8 sm:py-10">
  <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
    <p className="text-sm sm:text-base text-center">
      &copy; {new Date().getFullYear()} Your Company. All rights reserved.
    </p>
    <div className="flex space-x-4">
      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
      <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
      <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
    </div>
  </div>
</footer>

    </>
      </section>
    </ClientWrapper>
  )
}

export default Landingpage