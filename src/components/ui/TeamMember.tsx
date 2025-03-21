
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  className?: string;
  index?: number;
}

const TeamMember = ({
  name,
  role,
  image,
  bio,
  className,
  index = 0,
}: TeamMemberProps) => {
  const memberRef = useRef<HTMLDivElement>(null);

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

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={memberRef}
      className={cn(
        "stagger-item group overflow-hidden rounded-xl transition-all duration-300",
        className
      )}
      style={{ transitionDelay: `${index * 0.1 + 0.1}s` }}
    >
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-hvac-blue">{role}</p>
      <p className="mt-2 text-muted-foreground">{bio}</p>
    </div>
  );
};

export default TeamMember;
