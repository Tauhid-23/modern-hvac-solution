
import React, { useEffect, useRef } from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  className?: string;
}

const testimonials = [
  {
    quote: "The technicians were professional, efficient, and clearly explained everything. My new AC system works perfectly!",
    author: "Sarah Johnson",
    role: "Homeowner",
    rating: 5,
  },
  {
    quote: "I've been using CoolAir HVAC for my business for over 5 years. Their service is always reliable and their team is knowledgeable.",
    author: "Michael Thomas",
    role: "Business Owner",
    rating: 5,
  },
  {
    quote: "They responded to my emergency call within an hour. The technician diagnosed and fixed the issue quickly. Great service!",
    author: "Emma Rodriguez",
    role: "Homeowner",
    rating: 5,
  },
  {
    quote: "I appreciate their honesty and fair pricing. They didn't try to upsell me on unnecessary services and fixed my furnace right the first time.",
    author: "David Wilson",
    role: "Homeowner",
    rating: 4,
  },
];

const Testimonials = ({ className }: TestimonialsProps) => {
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
      id="testimonials"
      className={cn("section-padding bg-gradient-to-b from-white to-hvac-blue/5", className)}
    >
      <div className="container-custom">
        <div ref={headingRef} className="fade-up text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it – see what our satisfied customers have to say about
            our HVAC services and dedication to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
