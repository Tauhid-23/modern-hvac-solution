
import React, { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import { cn } from "@/lib/utils";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

    [sectionRef, formRef, infoRef].forEach((ref) => {
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
      id="contact"
      className={cn("section-padding bg-gradient-to-b from-white to-hvac-blue/10", className)}
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-hvac-blue/10 text-hvac-blue">
            <span>Get In Touch</span>
          </div>
          <h2 className="mb-4">Contact Us for Expert HVAC Service</h2>
          <p className="text-xl text-muted-foreground">
            Request a service, get a free quote, or speak with our team about your HVAC needs.
            We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="fade-up">
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hvac-blue focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hvac-blue focus:border-transparent"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hvac-blue focus:border-transparent"
                      placeholder="Your phone"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hvac-blue focus:border-transparent"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="ac-repair">AC Repair</option>
                      <option value="ac-installation">AC Installation</option>
                      <option value="heating-repair">Heating Repair</option>
                      <option value="heating-installation">Heating Installation</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="air-quality">Air Quality</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-hvac-blue focus:border-transparent"
                    placeholder="Tell us about your HVAC needs..."
                    required
                  ></textarea>
                </div>
                <AnimatedButton type="submit" variant="primary" className="w-full">
                  Send Message
                </AnimatedButton>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="fade-up" style={{ transitionDelay: "0.2s" }}>
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-3 bg-hvac-blue/10 rounded-lg text-hvac-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="mb-1 text-muted-foreground">Call us for immediate assistance</p>
                    <a href="tel:+18001234567" className="text-hvac-blue font-semibold hover:underline">
                      (800) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-3 bg-hvac-blue/10 rounded-lg text-hvac-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="mb-1 text-muted-foreground">Send us an email anytime</p>
                    <a href="mailto:info@coolairhvac.com" className="text-hvac-blue font-semibold hover:underline">
                      info@coolairhvac.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-3 bg-hvac-blue/10 rounded-lg text-hvac-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="mb-1 text-muted-foreground">Our main office</p>
                    <address className="not-italic">
                      123 Cooling Avenue, Heatsville, TX 75001
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-3 bg-hvac-blue/10 rounded-lg text-hvac-blue">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Business Hours</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>Monday-Friday: 7:00 AM - 7:00 PM</li>
                      <li>Saturday: 8:00 AM - 5:00 PM</li>
                      <li>Sunday: Emergency Service Only</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-4">Service Areas</h4>
                <p className="mb-2 text-muted-foreground">
                  We proudly serve the following areas and surrounding communities:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Dallas", "Fort Worth", "Plano", "Arlington", "Irving"].map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-hvac-blue/10 text-hvac-blue rounded-full text-sm font-medium"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 fade-up rounded-xl overflow-hidden shadow-lg h-[400px] relative">
          {/* This would be replaced with an actual Google Maps embed */}
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Google Maps Integration</h3>
              <p className="mb-4">A Google Maps embed would be placed here in the final version</p>
              <AnimatedButton variant="primary" size="sm">
                Get Directions
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
