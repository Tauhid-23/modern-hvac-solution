
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

const Index = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>CoolAir HVAC - Professional Heating & Cooling Services</title>
        <meta
          name="description"
          content="CoolAir HVAC provides professional heating, cooling, and air quality solutions for homes and businesses. Licensed, insured, and trusted since 1995."
        />
        <meta
          name="keywords"
          content="HVAC, air conditioning, heating, cooling, AC repair, furnace repair, HVAC maintenance, air quality"
        />
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="CoolAir HVAC - Professional Heating & Cooling Services" />
        <meta 
          property="og:description" 
          content="Expert HVAC services including installation, repair, and maintenance for all your heating and cooling needs." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coolairhvac.com" />
        <meta property="og:image" content="https://coolairhvac.com/og-image.jpg" />
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              "name": "CoolAir HVAC",
              "image": "https://coolairhvac.com/logo.jpg",
              "@id": "https://coolairhvac.com",
              "url": "https://coolairhvac.com",
              "telephone": "+18001234567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Cooling Avenue",
                "addressLocality": "Heatsville",
                "addressRegion": "TX",
                "postalCode": "75001",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.7767,
                "longitude": -96.7970
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "07:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/coolairhvac",
                "https://www.twitter.com/coolairhvac",
                "https://www.instagram.com/coolairhvac",
                "https://www.linkedin.com/company/coolairhvac"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Services />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
