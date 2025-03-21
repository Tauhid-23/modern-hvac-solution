
import React, { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import TeamMember from "../ui/TeamMember";
import { cn } from "@/lib/utils";

interface AboutProps {
  className?: string;
}

const benefits = [
  "25+ years of HVAC experience",
  "Licensed and certified technicians",
  "Energy-efficient solutions",
  "Transparent pricing, no hidden fees",
  "24/7 emergency service",
  "100% satisfaction guarantee",
];

const teamMembers = [
  {
    name: "Robert Smith",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
    bio: "30+ years of HVAC industry experience. Certified Master HVAC Technician.",
  },
  {
    name: "Jennifer Davis",
    role: "Service Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
    bio: "15 years experience ensuring top-quality service for every customer.",
  },
  {
    name: "Michael Johnson",
    role: "Lead Technician",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
    bio: "Specializes in complex HVAC installations and system diagnostics.",
  },
];

const About = ({ className }: AboutProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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

    [sectionRef, contentRef, imageRef, teamRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={cn("section-padding", className)}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left column - Image */}
          <div ref={imageRef} className="fade-up lg:order-1 order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-hvac-blue/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-hvac-blue/20 rounded-lg"></div>
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&h=1000&q=80"
                  alt="CoolAir HVAC Service Team"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div ref={contentRef} className="fade-up lg:order-2 order-1">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-hvac-blue/10 text-hvac-blue">
              <span>About CoolAir HVAC</span>
            </div>
            <h2 className="mb-6">Trusted HVAC Services Since 1995</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At CoolAir HVAC, we've been providing top-quality heating, cooling, and air quality
              solutions to homes and businesses for over 25 years. Our commitment to excellence,
              integrity, and customer satisfaction has made us the trusted choice in the industry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="mr-3 text-hvac-blue shrink-0 mt-1"
                  />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <AnimatedButton variant="primary">
              Learn More About Us
            </AnimatedButton>
          </div>
        </div>

        {/* Team Section */}
        <div ref={teamRef} className="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-muted-foreground">
              Our team of certified technicians and customer service professionals are dedicated
              to providing you with the highest level of service and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
