
import React, { useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedButton from "./AnimatedButton";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  className?: string;
  index?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  link,
  className,
  index = 0,
}: ServiceCardProps) => {
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
        "stagger-item glass-card rounded-xl p-6 hover-scale transition-all duration-300",
        className
      )}
      style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-hvac-blue/10 text-hvac-blue">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <AnimatedButton variant="ghost" size="sm" className="px-0 text-hvac-blue">
        Learn more
      </AnimatedButton>
    </div>
  );
};

export default ServiceCard;
