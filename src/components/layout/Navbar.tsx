
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedButton from "../ui/AnimatedButton";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // Create dynamic background styles based on device type and scroll state
  const getHeaderStyles = () => {
    if (isMobile) {
      return scrolled 
        ? "bg-black/90 backdrop-blur-md shadow-md py-2" 
        : "bg-black/70 backdrop-blur-sm py-4";
    } else {
      return scrolled 
        ? "bg-white/80 backdrop-blur-md shadow-md py-2" 
        : "bg-transparent py-4";
    }
  };

  // Text color based on if mobile or desktop
  const getTextColorClass = () => {
    return isMobile ? "text-white" : "text-gray-700";
  };

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        getHeaderStyles()
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-hvac-blue">CoolAir</span>
            <span className={`text-2xl font-bold ${isMobile ? "text-white" : ""}`}>HVAC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.path
                    ? "text-hvac-blue"
                    : `${getTextColorClass()} hover:text-hvac-blue hover:bg-blue-50`
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone number for desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+18001234567"
              className={`mr-4 flex items-center text-sm font-medium ${getTextColorClass()} hover:text-hvac-blue transition-colors`}
            >
              <Phone size={16} className="mr-2" />
              (800) 123-4567
            </a>
            <AnimatedButton variant="primary" size="sm" href="/contact">
              Get Quote
            </AnimatedButton>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${isMobile ? "text-white" : "text-gray-800"} hover:text-hvac-blue`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black z-40 transition-all duration-300 flex flex-col pt-20",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container-custom flex-1 flex flex-col">
          <nav className="flex flex-col space-y-2 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={cn(
                  "px-4 py-3 text-lg font-medium rounded-md transition-colors",
                  location.pathname === link.path
                    ? "text-hvac-blue bg-blue-950"
                    : "text-white hover:text-hvac-blue hover:bg-blue-950"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto mb-8">
            <a
              href="tel:+18001234567"
              className="flex items-center justify-center w-full px-4 py-3 mb-4 text-lg font-medium text-white rounded-md hover:text-hvac-blue hover:bg-blue-950 transition-colors"
            >
              <Phone size={20} className="mr-2" />
              (800) 123-4567
            </a>
            <AnimatedButton
              variant="primary"
              className="w-full justify-center"
              href="/contact"
              onClick={closeMenu}
            >
              Get Quote
            </AnimatedButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
