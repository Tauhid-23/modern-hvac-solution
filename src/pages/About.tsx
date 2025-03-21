
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About CoolAir HVAC - Our Story & Team</title>
        <meta
          name="description"
          content="Learn about CoolAir HVAC's 25+ years of experience providing quality heating, cooling, and air quality solutions to homes and businesses."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-custom py-12">
            <h1 className="text-center mb-12">About CoolAir HVAC</h1>
            <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
              With over 25 years of experience, our team of certified HVAC professionals is
              dedicated to delivering exceptional service and solutions.
            </p>

            {/* About content would go here */}
            <div className="text-center py-24">
              <h2>About Page Coming Soon</h2>
              <p>This page is under development. Please check back later!</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
