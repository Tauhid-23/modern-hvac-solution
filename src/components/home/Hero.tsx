import React, { useEffect, useRef } from "react";
import { ArrowRight, Shield, Star, Clock } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

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
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Background gradient circles - keep but make less visible with video */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-hvac-blue/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-30 z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-hvac-blue/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl opacity-30 z-0" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 gap-12 items-center py-16">
          {/* Content - now centered */}
          <div ref={contentRef} className="fade-up max-w-xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-hvac-blue/10 text-white backdrop-blur-sm">
              <span className="mr-2">Professional HVAC Services</span>
              <ArrowRight size={14} />
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl md:leading-tight text-white">
              <span className="block">Expert Heating & Cooling</span>
              <span className="text-gradient">Solutions for Your Comfort</span>
            </h1>
            <p className="mb-8 text-xl text-white">
              Trusted by homeowners and businesses for over 25 years, we deliver reliable,
              energy-efficient HVAC services tailored to your needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <AnimatedButton variant="primary" size="lg" href="/contact">
                Schedule Service
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg" href="/services">
                Explore Services
              </AnimatedButton>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
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
                  <span className="font-medium text-white">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
