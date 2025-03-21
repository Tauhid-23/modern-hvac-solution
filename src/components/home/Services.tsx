
import React, { useEffect, useRef } from "react";
import { Thermometer, Snowflake, Wind, Wrench, AreaChart, Shield, ArrowRight } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import AnimatedButton from "../ui/AnimatedButton";
import { cn } from "@/lib/utils";

interface ServicesProps {
  className?: string;
}

const services = [
  {
    icon: Snowflake,
    title: "AC Installation & Repair",
    description: "Expert installation, maintenance, and repair services for all air conditioning systems.",
    link: "/services#ac",
  },
  {
    icon: Thermometer,
    title: "Heating Systems",
    description: "Full-service solutions for furnaces, heat pumps, and boilers to keep you warm.",
    link: "/services#heating",
  },
  {
    icon: Wind,
    title: "Air Quality Solutions",
    description: "Improve your indoor air with purifiers, humidifiers, and ventilation systems.",
    link: "/services#air-quality",
  },
  {
    icon: Wrench,
    title: "HVAC Maintenance",
    description: "Regular maintenance to prevent issues, extend system life, and improve efficiency.",
    link: "/services#maintenance",
  },
  {
    icon: AreaChart,
    title: "Energy Efficiency",
    description: "Energy audits and solutions to reduce energy consumption and lower utility bills.",
    link: "/services#energy",
  },
  {
    icon: Shield,
    title: "Emergency Services",
    description: "24/7 emergency HVAC services for urgent repairs when you need them most.",
    link: "/services#emergency",
  },
];

const Services = ({ className }: ServicesProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className={cn("section-padding relative overflow-hidden", className)}
    >
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-hvac-blue/5 rounded-full -translate-y-1/2 -translate-x-1/3 blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div ref={headingRef} className="fade-up text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Comprehensive HVAC Services</h2>
          <p className="text-xl text-muted-foreground">
            From installation and repair to maintenance and emergency service, we provide
            complete solutions for all your heating and cooling needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <AnimatedButton variant="primary" size="lg">
            View All Services
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
