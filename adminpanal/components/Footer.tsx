import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@fontsource/poppins/400.css';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FFF9EA] py-12">
      <div className="container mx-auto px-16">
        {/* Grid for footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info Section */}
          <div className="space-y-4">
            <Image src={"https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661234/lgaftiqtc7desrwoxn23.png"} height={80} width={80} alt="logo" />
            <h2 className="font-bold text-xl text-gray-900">Chakh Le India</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We bring you authentic homemade pickles made with love, tradition, and the finest ingredients.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  aria-label={`Follow us on ${Icon.name}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">LIKE</h3>
            <ul className="space-y-2">
              {["Shop", "Our Story", "Offers", "Product", "Contact us"].map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">SHOP</h3>
            <ul className="space-y-2">
              {["Pickle", "Chutney", "Super Seeds", "Healthy Mix Nuts", "Gifting"].map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">HELP</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="tel:+919995990070"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300"
                >
                  +91 999 599 0070
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:customercare@chakhleodisha.com"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300"
                >
                  customercare@chakhleodisha.com
                </Link>
              </li>
              {["Track Order", "Terms & Conditions", "Privacy Policy"].map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 font-inter font-bold text-lg">
            © Chakh Kar Dekho 2024-2025. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;