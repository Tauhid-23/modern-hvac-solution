
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our HVAC Services - CoolAir HVAC</title>
        <meta
          name="description"
          content="Explore our comprehensive HVAC services including AC repair, heating installation, maintenance plans, and air quality solutions for homes and businesses."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-custom py-12">
            <h1 className="text-center mb-12">Our HVAC Services</h1>
            <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
              Complete HVAC solutions for your home or business. Our services are delivered by
              certified technicians and backed by our satisfaction guarantee.
            </p>

            {/* Services content would go here */}
            <div className="text-center py-24">
              <h2>Services Page Coming Soon</h2>
              <p>This page is under development. Please check back later!</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
