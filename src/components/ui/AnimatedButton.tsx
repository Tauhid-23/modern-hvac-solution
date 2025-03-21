import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "primary" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  showArrow?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const AnimatedButton = ({
  children,
  variant = "default",
  size = "default",
  showArrow = true,
  className,
  href,
  onClick,
  ...props
}: AnimatedButtonProps) => {
  const navigate = useNavigate();
  
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

  // Handle click for both navigation and custom onClick
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    } else if (href) {
      e.preventDefault();
      navigate(href);
    }
  };

  // If href is provided and no onClick, render a Link component
  if (href && !onClick) {
    return (
      <Link to={href} className="inline-block">
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
      </Link>
    );
  }

  // Otherwise render a regular button
  return (
    <Button
      variant={getVariant()}
      size={size}
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        variant === "primary" && "bg-hvac-blue hover:bg-hvac-blue-dark text-white",
        className
      )}
      onClick={handleClick}
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
