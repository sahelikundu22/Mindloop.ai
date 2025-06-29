"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
  BrainCircuit,
  Sun,
  Moon,
  MessageCircle,
  FileText,
  Users,
  BarChart3,
  Briefcase,
  LineChart,
  ScrollText,
  Network,
  UserCheck,
  BookOpen,
  ShieldCheck,
  Rocket,
  Star,
  Code,
  HeartHandshake,
  Play,
  Zap,
  TrendingUp,
  Award,
  Globe,
  Clock,
  Shield,
  Lightbulb,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useTheme } from "./provider";
import { faqs } from "@/data/faqs";

export default function LandingPage() {
  const { user } = useUser();
  const { theme, toggleTheme } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState({
    hero: false,
    stats: false,
    features: false,
    industries: false,
    testimonials: false,
    cta: false
  });
  const [statsInView, setStatsInView] = useState(false);
  const statsRef = useRef(null);
  const [featuresInView, setFeaturesInView] = useState(false);
  const featuresRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Staggered animations
    const timer1 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, hero: true })), 100);
    const timer2 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, stats: true })), 800);
    const timer3 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, features: true })), 1200);
    const timer4 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, industries: true })), 1600);
    const timer5 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, testimonials: true })), 2000);
    const timer6 = setTimeout(() => setAnimatedElements(prev => ({ ...prev, cta: true })), 2400);

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Intersection Observer for stats section
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Intersection Observer for features section
    const featuresObserver = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFeaturesInView(true);
          featuresObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (featuresRef.current) {
      featuresObserver.observe(featuresRef.current);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearInterval(interval);
      observer.disconnect();
      featuresObserver.disconnect();
    };
  }, []);

  const testimonials = [
    {
      quote: "The AI-powered interview prep was a game-changer. Landed my dream job at a top tech company!",
      author: "Sarah Chen",
      role: "Software Engineer",
      company: "Tech Giant Co.",
      rating: 5
    },
    {
      quote: "The industry insights helped me pivot my career successfully. The salary data was spot-on!",
      author: "Michael Rodriguez",
      role: "Product Manager",
      company: "StartUp Inc.",
      rating: 5
    },
    {
      quote: "My resume's ATS score improved significantly. Got more interviews in two weeks than in six months!",
      author: "Priya Patel",
      role: "Marketing Director",
      company: "Global Corp",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "AI Career Chat",
      description: "Get personalized career advice and guidance from our advanced AI mentor available 24/7.",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Resume Analyzer",
      description: "Upload your resume and get detailed feedback, ATS optimization, and improvement suggestions.",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Career Roadmap",
      description: "Generate personalized career roadmaps based on your goals, skills, and industry trends.",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Mock Interviews",
      description: "Practice interviews with our AI interviewer and get real-time feedback on performance.",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Contest Tracker",
      description: "Track and compete in coding contests, view leaderboards, and improve your ranking.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      borderColor: "border-indigo-200 dark:border-indigo-800"
    },
    {
      icon: <ScrollText className="h-8 w-8" />,
      title: "Quiz",
      description: "Test your knowledge and skills with interactive quizzes tailored to your career path.",
      color: "text-teal-600",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      borderColor: "border-teal-200 dark:border-teal-800"
    }
  ];

  const stats = [
    { number: "50+", label: "Industries Covered", icon: <Globe className="h-6 w-6" /> },
    { number: "1000+", label: "Interview Questions", icon: <Target className="h-6 w-6" /> },
    { number: "95%", label: "Success Rate", icon: <Trophy className="h-6 w-6" /> },
    { number: "24/7", label: "AI Support", icon: <Clock className="h-6 w-6" /> },
    { number: "10K+", label: "Active Users", icon: <Users className="h-6 w-6" /> },
    { number: "500+", label: "Companies", icon: <Briefcase className="h-6 w-6" /> }
  ];

  const industries = [
    "Technology", "Finance", "Healthcare", "Manufacturing", "Retail", "Media",
    "Education", "Energy", "Consulting", "Telecom", "Transportation"
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Image src="/logo.png?v=2" alt="Mindloop.ai" width={120} height={40} className="h-8 w-auto" />
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 hover:bg-accent rounded-lg transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
              
              {!user ? (
                <SignInButton mode="modal" signUpForceRedirectUrl="/dashboard">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Started
                  </Button>
                </SignInButton>
              ) : (
                <UserButton />
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ease-out ${animatedElements.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 mb-8 transition-all duration-700 delay-200 ${animatedElements.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  AI-Powered Career Development Platform
                </span>
              </div>
              
              <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight transition-all duration-1000 delay-300 ${animatedElements.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Your AI Career
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Self-Assessment Platform
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${animatedElements.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Get personalized career guidance, interview preparation, and professional development insights powered by our advanced AI self-assessment platform.
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${animatedElements.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto">
                  <Link href="/dashboard">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className={`absolute top-20 left-10 transition-all duration-1000 delay-1000 ${animatedElements.hero ? 'animate-bounce opacity-100' : 'opacity-0'}`}>
          <div className="w-4 h-4 bg-blue-500 rounded-full opacity-20"></div>
        </div>
        <div className={`absolute top-40 right-20 transition-all duration-1000 delay-1200 ${animatedElements.hero ? 'animate-pulse opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-6 bg-purple-500 rounded-full opacity-30"></div>
        </div>
        <div className={`absolute bottom-20 left-1/4 transition-all duration-1000 delay-1400 ${animatedElements.hero ? 'animate-ping opacity-100' : 'opacity-0'}`}>
          <div className="w-3 h-3 bg-green-500 rounded-full opacity-40"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${animatedElements.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Key Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to accelerate your career journey, from AI-powered guidance to interactive learning and competitions.
            </p>
          </div>
          {/* Animated, alternating left/right features in a 3x2 grid */}
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 w-full max-w-4xl mx-auto py-4 md:py-8">
            {features.map((feature, index) => {
              // Determine animation direction by column
              const col = index % 3;
              let animateClass = '';
              if (col === 0) animateClass = featuresInView ? 'md:animate-featureSlideInLeft animate-featureSlideInUp' : 'md:-translate-x-32 translate-y-16 opacity-0 scale-95';
              else if (col === 2) animateClass = featuresInView ? 'md:animate-featureSlideInRight animate-featureSlideInUp' : 'md:translate-x-32 translate-y-16 opacity-0 scale-95';
              else animateClass = featuresInView ? 'animate-featureSlideInUp' : 'translate-y-16 opacity-0 scale-95';
              return (
                <div
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-700 delay-${index * 250} transform border-2 hover:border-primary ${feature.bgColor} ${feature.borderColor} ${animateClass} rounded-2xl flex flex-col justify-center items-center`}
                  style={{ aspectRatio: '1/1', minWidth: 200, maxWidth: 340, minHeight: 200, maxHeight: 340 }}
                >
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6 w-full h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/20 dark:bg-white/10 shadow-md border border-border ${feature.color} group-hover:scale-110 transition-transform duration-300 text-3xl`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-center">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </div>
              );
            })}
          </div>

          {/* Stats Section - moved below features */}
          <div ref={statsRef} className={`mt-20 py-12 bg-muted/30 rounded-2xl shadow-inner transition-all duration-1000 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
                {stats.map((stat, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`text-center group transition-all duration-700 delay-${index * 120} 
                        ${statsInView
                          ? `opacity-100 translate-y-0 scale-100 ${isLeft ? 'md:animate-statSlideInLeft' : 'md:animate-statSlideInRight'} animate-statSlideInUp`
                          : `${isLeft ? 'md:-translate-x-32' : 'md:translate-x-32'} translate-y-16 opacity-0 scale-95'}`}
                      `}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => {
              const [open, setOpen] = useState(false);
              return (
                <div key={idx} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <button
                    className="w-full text-left font-semibold text-lg text-primary mb-2 focus:outline-none flex justify-between items-center"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-expanded={open}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    {faq.question.replace(/MindloopMentor\.ai|MindloopMentor|Mindloop/gi, 'Mindloop Self-Assessment Platform')}
                    <span className={`ml-2 transition-transform ${open ? 'rotate-90' : ''}`}>▶</span>
                  </button>
                  {open && (
                    <div id={`faq-answer-${idx}`} className="mt-2 text-muted-foreground">
                      {faq.answer.replace(/MindloopMentor\.ai|MindloopMentor|Mindloop/gi, 'Mindloop Self-Assessment Platform')}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${animatedElements.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Users <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Say</span>
            </h2>
          </div>
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${animatedElements.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-foreground text-center mb-8 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-foreground">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                </div>
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-primary' : 'bg-muted'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden transition-all duration-1000 ${animatedElements.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Accelerate Your Career?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Join thousands of professionals who are advancing their careers with AI-powered guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
                  <Link href="/dashboard">
                    Start Your Journey Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-blue-600">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image src="/logo.png?v=2" alt="Mindloop.ai" width={120} height={40} className="h-8 w-auto mb-4" />
              <p className="text-muted-foreground">
                Your AI-powered self-assessment platform for professional growth and success.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Community</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Mindloop.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}