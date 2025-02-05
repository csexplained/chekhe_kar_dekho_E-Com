"use client";

import React from "react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ComingSooncard from '@/components/ComingSoonproductCard';

const products = [
  { price: 169, discount: 10, src: "pickle", productname: "Dry Fruits Mix Pickle 475gm", rating: 4.9, noofreviews: 120 },
  { price: 199, discount: 15, src: "chutney", productname: "Garlic Chutney 200gm", rating: 4.7, noofreviews: 95 },
  { price: 149, discount: 5, src: "pickle", productname: "Spicy Mango Pickle 500gm", rating: 4.5, noofreviews: 80 },
  { price: 179, discount: 20, src: "chutney", productname: "Mixed Vegetable Pickle 300gm", rating: 4.8, noofreviews: 110 },
  { price: 129, discount: 0, src: "pickle", productname: "Lemon Pickle 250gm", rating: 4.6, noofreviews: 70 },
  { price: 189, discount: 12, src: "chutney", productname: "Sweet Tamarind Chutney 400gm", rating: 4.4, noofreviews: 60 },
  { price: 159, discount: 8, src: "pickle", productname: "Green Chili Pickle 350gm", rating: 4.3, noofreviews: 50 },
  { price: 209, discount: 18, src: "pickle", productname: "Special Mixed Pickle Combo 600gm", rating: 4.9, noofreviews: 150 },
  { price: 139, discount: 0, src: "chutney", productname: "Red Chili Chutney 200gm", rating: 4.2, noofreviews: 40 },
  { price: 169, discount: 10, src: "chutney", productname: "Garlic and Ginger Pickle 450gm", rating: 4.7, noofreviews: 90 },
];


const page = () => {
  const cards = products.map((product, index) => (
    <ComingSooncard key={index} carddata={product} />
  ));

  return (
    <div className="bg-[#FFF9EA] py-6 px-4 sm:px-8 md:px-16">
      {/* Header Section */}
      <div className="flex flex-row justify-between items-start my-8">
        <div className="text-4xl sm:text-4xl md:text-5xl font-inter font-semibold text-left md:text-left mb-4 md:mb-0">
          Coming Soon
        </div>
        <div className="flex  flex-col min-w-32 sm:flex-row gap-3">
          <button className="font-poppins min-w-32 sm:w-44 font-medium h-12 sm:h-16  bg-green-900 rounded-full border text-white">
            Best Sellers
          </button>
          <button className="border h-12 min-w-32 sm:w-44 sm:h-16  border-red-900 text-red-900 bg-transparent rounded-full">
            New Launches
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <Carousel items={cards} />
    </div>
  );
}

export default page
