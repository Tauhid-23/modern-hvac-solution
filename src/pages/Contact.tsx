
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/home/Contact";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact CoolAir HVAC - Request Service or Quote</title>
        <meta
          name="description"
          content="Contact CoolAir HVAC for professional heating and cooling services. Request a free quote, schedule service, or get emergency HVAC assistance."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-custom py-12">
            <h1 className="text-center mb-12">Contact Us</h1>
            <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
              Have questions or need service? Our team is ready to help with all your HVAC needs.
              Contact us today for prompt, professional assistance.
            </p>

            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
