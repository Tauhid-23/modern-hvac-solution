
import React, { useEffect, useRef } from "react";
import { ArrowRight, Shield, Star, Clock } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const trustBadges = [
    {
      icon: Shield,
      text: "Licensed & Insured",
    },
    {
      icon: Star,
      text: "5-Star Service",
    },
    {
      icon: Clock,
      text: "24/7 Emergency Service",
    },
  ];

  return (
    <div
      ref={heroRef}
      className={cn(
        "relative min-h-screen flex items-center pt-20 overflow-hidden",
        className
      )}
    >
      {/* Background gradient circles */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-hvac-blue/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hvac-blue/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left column - Content */}
          <div ref={contentRef} className="fade-up max-w-xl">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-hvac-blue/10 text-hvac-blue">
              <span className="mr-2">Professional HVAC Services</span>
              <ArrowRight size={14} />
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl md:leading-tight">
              <span className="block">Expert Heating & Cooling</span>
              <span className="text-gradient">Solutions for Your Comfort</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Trusted by homeowners and businesses for over 25 years, we deliver reliable,
              energy-efficient HVAC services tailored to your needs.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <AnimatedButton variant="primary" size="lg">
                Schedule Service
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg">
                Explore Services
              </AnimatedButton>
            </div>

            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <badge.icon
                    size={20}
                    className="mr-2 text-hvac-blue"
                  />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Image */}
          <div
            ref={imageRef}
            className="fade-up relative lg:h-[600px] flex items-center justify-center"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-hvac-blue/10 to-transparent rounded-3xl" />
            <div className="relative p-2 w-full max-w-lg">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1614605858674-52ecee6d17b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=1200&q=80"
                  alt="HVAC Technician servicing an air conditioning unit"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="glass-card rounded-lg p-4 backdrop-blur-md bg-white/20 border border-white/20">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <span className="ml-2 text-white font-medium">4.9 (580+ reviews)</span>
                    </div>
                    <p className="text-white text-sm">
                      "The technicians were professional, efficient, and clearly explained everything.
                      My new AC system works perfectly!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
