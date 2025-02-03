"use client";
import React from 'react';
import chakKrDekho from '@/public/chak_kr_dekho.png';
import HomePageCarousel from "@/components/CarousalHomepage";
import Bannar from "@/components/Bannar";
import TalkOfTown from '@/components/TalkOfTown';
import chutney from '@/public/Garlic Chutney (1) (1) 1.png';
import pickle from "@/public/mango_pickle.png";

const products = [
  { price: 169, discount: 10, src: pickle, productname: "Dry Fruits Mix Pickle 475gm", rating: 4.9, noofreviews: 120 },
  { price: 199, discount: 15, src: chutney, productname: "Garlic Chutney 200gm", rating: 4.7, noofreviews: 95 },
  { price: 149, discount: 5, src: pickle, productname: "Spicy Mango Pickle 500gm", rating: 4.5, noofreviews: 80 },
  { price: 179, discount: 20, src: chutney, productname: "Mixed Vegetable Pickle 300gm", rating: 4.8, noofreviews: 110 },
  { price: 129, discount: 0, src: pickle, productname: "Lemon Pickle 250gm", rating: 4.6, noofreviews: 70 },
  { price: 189, discount: 12, src: chutney, productname: "Sweet Tamarind Chutney 400gm", rating: 4.4, noofreviews: 60 },
  { price: 159, discount: 8, src: pickle, productname: "Green Chili Pickle 350gm", rating: 4.3, noofreviews: 50 },
  { price: 209, discount: 18, src: pickle, productname: "Special Mixed Pickle Combo 600gm", rating: 4.9, noofreviews: 150 },
  { price: 139, discount: 0, src: chutney, productname: "Red Chili Chutney 200gm", rating: 4.2, noofreviews: 40 },
  { price: 169, discount: 10, src: chutney, productname: "Garlic and Ginger Pickle 450gm", rating: 4.7, noofreviews: 90 },
];

const page = () => {
  const cards = () => (
    products.map((product, index) => (
      <TalkOfTown key={index} carddata={product} />
    ))
  );

  return (
    <>
      <HomePageCarousel />
      <div className='px-4 sm:px-8 md:px-12 py-12'>
        <div className="flex  sm:flex-row justify-between items-start mb-6">
          <div className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold text-left mb-4 md:mb-0">
            Shop
          </div>
          <div className="flex justify-center items-center flex-row gap-3">
            <button className="font-poppins min-w-32 sm:w-44 font-medium h-12 sm:h-16 bg-[#FBBA14] rounded-full border text-black">
              Super Combo
            </button>
            <div className="relative border h-12 sm:h-16 sm:w-44 items-center flex justify-center text-center p-4 border-black bg-green-50/10 text-red-900 rounded-full">
              {/* Select text is completely hidden on mobile */}
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M8.29395 1.3623H14.9774" stroke="black" strokeLinecap="round" />
                <path d="M5.28662 4.7041H15.3117" stroke="black" strokeLinecap="round" />
                <path d="M1.27637 8.0459L15.3115 8.0459" stroke="black" strokeLinecap="round" />
              </svg>
              <span className="hidden sm:block">
                <select className="bg-transparent outline-none text-center">
                  <option value="pickle">Pickle</option>
                  <option value="chutney">Chutney</option>
                  <option value="combo">Combo</option>
                </select>
              </span>

              {/* Full-width clickable select that's invisible */}
              <select className="absolute inset-0 w-full sm:hidden opacity-0 cursor-pointer">
                <option value="pickle">Pickle</option>
                <option value="chutney">Chutney</option>
                <option value="combo">Combo</option>
              </select>
            </div>
          </div>
        </div>

        <div className='flex justify-center py-6 w-full'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-3 justify-center items-center">
            {cards()}
          </div>
        </div>
      </div>
      <Bannar imgLink={chakKrDekho} />
    </>
  );
};

export default page;
