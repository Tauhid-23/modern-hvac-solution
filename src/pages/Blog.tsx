
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>HVAC Blog - Tips, Advice & News | CoolAir HVAC</title>
        <meta
          name="description"
          content="Stay informed with our HVAC blog featuring expert tips, seasonal maintenance advice, energy-saving strategies, and the latest industry news."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container-custom py-12">
            <h1 className="text-center mb-12">HVAC Blog</h1>
            <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
              Expert tips, seasonal maintenance guides, and industry insights to help you
              get the most from your HVAC system.
            </p>

            {/* Blog content would go here */}
            <div className="text-center py-24">
              <h2>Blog Coming Soon</h2>
              <p>Our blog is under development. Please check back later for HVAC tips and advice!</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
