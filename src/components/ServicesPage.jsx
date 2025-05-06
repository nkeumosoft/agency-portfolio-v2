import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the services data
const services = [
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user interfaces and experiences that delight your customers.",
    // Placeholder for icon/illustration - replace with actual SVG or component
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-agp-lb" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-1-3m-6 0h6m-5-5a1 1 0 110-2 1 1 0 010 2zm0 2a1 1 0 110-2 1 1 0 010 2zm0 2a1 1 0 110-2 1 1 0 010 2zm0 2a1 1 0 110-2 1 1 0 010 2zm0 2a1 1 0 110-2 1 1 0 010 2zm0 2a1 1 0 110-2 1 1 0 010 2zM9 9a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 2a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm0 2a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" />
      </svg>
    ),
  },
  {
    title: "Web and Mobile Development",
    description: "Building robust, scalable, and high-performance web and mobile applications tailored to your needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-agp-lb" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 4l-4 4 4 4" />
      </svg>
    ),
  },
  {
    title: "Consulting Services",
    description: "Providing expert strategic guidance to help you navigate challenges and achieve your business objectives.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-agp-lb" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Technical Advisory",
    description: "Offering informed technical advice and recommendations to optimize your technology stack and processes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-agp-lb" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Cloud and DevOps",
    description: "Implementing scalable cloud solutions and streamlining your development and operations workflows.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-agp-lb" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 005-5V9a5 5 0 00-5-5H7a4 4 0 00-4 4v2zm12 2l-3-3m0 0l-3 3m3-3v6" />
      </svg>
    ),
  },
  {
    title: "AI/ML Data Services",
    description: "Leveraging Artificial Intelligence and Machine Learning to extract insights and drive innovation from your data.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-agp-lb" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M8 10H6m10 0h-2m-3 6h2m-7-2h2m0 0c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" />
      </svg>
    ),
  },
];

const ServicesPage = () => {
  const serviceRefs = useRef([]);
  serviceRefs.current = []; // Clear refs on each render

  // Add service item to refs array
  const addServiceRef = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  useEffect(() => {
    // GSAP animation for service items
    serviceRefs.current.forEach((el, index) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 }, // From state
        {
          opacity: 1, // To state
          y: 0,
          duration: 0.8,
          delay: index * 0.1, // Stagger the animation
          ease: "power3.out",
          scrollTrigger: {
            trigger: el, // Element that triggers the animation
            start: "top 80%", // Start animation when top of element is 80% from top of viewport
            toggleActions: "play none none none", // Play animation once
            // markers: true, // Uncomment for debugging ScrollTrigger
          },
        }
      );
    });

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-agp-db text-white py-20 px-6 overflow-hidden">
        {/* Background gradient overlay for visual flair */}
        <div className="absolute inset-0 bg-gradient-to-r from-agp-db to-agp-lb opacity-75"></div>
        {/* Content */}
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Empowering your business with expert consulting and cutting-edge technology solutions.
          </p>
          {/* Optional: Add a call to action button */}
          {/* <button className="bg-agp-lb hover:bg-agp-lb/90 text-agp-db font-semibold py-3 px-8 rounded-full transition duration-300">
            Get a Consultation
          </button> */}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-agp-db mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                ref={addServiceRef} // Attach ref for GSAP animation
                className="bg-white rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200"
              >
                <div className="flex justify-center mb-6">
                  {service.icon} {/* Service Icon */}
                </div>
                <h3 className="text-xl font-semibold text-agp-db mb-4">{service.title}</h3>
                <p className="text-gray-600 text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional: Call to Action Section */}
      <section className="bg-agp-lb text-agp-db py-16 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our expert services can help you achieve your goals.
          </p>
          <button className="bg-agp-db hover:bg-agp-db/90 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
