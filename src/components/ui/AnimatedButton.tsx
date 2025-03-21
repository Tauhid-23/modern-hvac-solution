
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "primary" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  showArrow?: boolean;
  className?: string;
}

const AnimatedButton = ({
  children,
  variant = "default",
  size = "default",
  showArrow = true,
  className,
  ...props
}: AnimatedButtonProps) => {
  // Map custom variants to shadcn variants
  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "default";
      case "secondary":
        return "secondary";
      default:
        return variant;
    }
  };

  return (
    <Button
      variant={getVariant()}
      size={size}
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        variant === "primary" && "bg-hvac-blue hover:bg-hvac-blue-dark text-white",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight 
            size={16} 
            className="transition-transform duration-300 group-hover:translate-x-1" 
          />
        )}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-hvac-blue to-hvac-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
    </Button>
  );
};

export default AnimatedButton;
