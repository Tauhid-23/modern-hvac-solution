
import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image?: string;
  className?: string;
  index?: number;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  rating,
  image,
  className,
  index = 0,
}: TestimonialCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "stagger-item glass-card rounded-xl p-6 transition-all duration-300",
        className
      )}
      style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
    >
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="mb-4 text-lg font-medium italic text-gray-700">"{quote}"</p>
      <div className="flex items-center">
        {image && (
          <div className="mr-3 h-10 w-10 overflow-hidden rounded-full">
            <img src={image} alt={author} className="h-full w-full object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
