import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const TrustConsultingFooter = () => {
 
  return (
    <footer className="bg-agp-db py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div className="flex flex-col items-start">
          <div className="text-3xl font-bold mb-4 text-white">Trust Consulting</div>
          <p className="text-sm text-center md:text-left mb-4 text-gray-300">
          End-to-end technical solutions for modern businesses.
          </p>
          <div className="text-sm space-y-2 flex flex-col items-start text-gray-300">
            <div className="flex items-center justify-start">
              <MapPin size={16} className="mr-2 text-agp-lb" />
              <span>Biyem Assi Ave, Beside Camtel, Yaounde, CM</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone size={16} className="mr-2 text-agp-lb" />
              <span>(237) 671368909</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Mail size={16} className="mr-2 text-agp-lb" />
              <a href="mailto:info@trustconsulting.com" className="hover:underline">info@trustconsulting.tech</a>
            </div>
          </div>
        </div>

        {/* Sitemap / More Links Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-white">Sitemap</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li> 
            <li><a href="#" className="hover:underline">Case Studies</a></li> 
            <li><a href="#" className="hover:underline">Blog</a></li> 
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-5">
            <a href="#" className="text-white hover:opacity-75" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:opacity-75" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:opacity-75" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white hover:opacity-75" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
          <p className="text-sm mb-4 text-center md:text-left text-gray-300">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <div className="w-full max-w-sm">
          <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow text-gray-900"  
              />
              
              <Button
                type="submit"
                className="font-semibold text-white bg-agp-lb"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400 flex-col-reverse md:flex-row md:flex items-start md:items-center justify-between">
      <div>  &copy; {new Date().getFullYear()} Trust Consulting. All rights reserved.</div>
      <ul className="text-sm gap-2 flex items-center justify-center md:justify-end">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
      </div>
    </footer>
  );
};

export default TrustConsultingFooter;
