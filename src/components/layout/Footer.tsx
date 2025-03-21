
import React from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Check
} from "lucide-react";

const services = [
  "AC Installation & Repair",
  "Heating Systems",
  "HVAC Maintenance",
  "Air Quality Solutions",
  "Commercial HVAC",
  "Emergency Services"
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Privacy Policy", path: "#" },
  { name: "Terms of Service", path: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-hvac-neutral-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-hvac-blue">CoolAir</span>
              <span className="text-2xl font-bold text-white">HVAC</span>
            </div>
            <p className="text-hvac-neutral-300 max-w-xs">
              Professional heating, cooling, and air quality solutions for your home or business.
              Licensed, insured, and trusted since 1995.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-hvac-neutral-700 hover:bg-hvac-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-hvac-neutral-700 hover:bg-hvac-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-hvac-neutral-700 hover:bg-hvac-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-hvac-neutral-700 hover:bg-hvac-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-hvac-neutral-300 hover:text-white flex items-center group"
                  >
                    <Check size={16} className="mr-2 text-hvac-blue" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-hvac-neutral-300 hover:text-white flex items-center group"
                  >
                    <ArrowRight size={16} className="mr-2 text-hvac-blue transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-hvac-neutral-300">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-hvac-blue mt-0.5 shrink-0" />
                <span>123 Cooling Avenue, Heatsville, TX 75001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-hvac-blue shrink-0" />
                <a href="tel:+18001234567" className="hover:text-white transition-colors">
                  (800) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-hvac-blue shrink-0" />
                <a href="mailto:info@coolairhvac.com" className="hover:text-white transition-colors">
                  info@coolairhvac.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-3 text-hvac-blue mt-0.5 shrink-0" />
                <div>
                  <p>Mon-Fri: 7:00 AM - 7:00 PM</p>
                  <p>Sat: 8:00 AM - 5:00 PM</p>
                  <p>Sun: Emergency Service Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hvac-neutral-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hvac-neutral-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} CoolAir HVAC. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <img 
              src="https://via.placeholder.com/60x30" 
              alt="HVAC Certification" 
              className="h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://via.placeholder.com/60x30" 
              alt="Energy Star Partner" 
              className="h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://via.placeholder.com/60x30" 
              alt="BBB Accredited" 
              className="h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://via.placeholder.com/60x30" 
              alt="EPA Certified" 
              className="h-8 opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
