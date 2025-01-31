'use client'
// import Link from "next/link";
// import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
// import { RiShoppingBag2Line } from "react-icons/ri";
import { FaTruck, FaHeadset, FaShieldAlt, FaRocket } from "react-icons/fa";
// import logo from '../public/Logo.png'
import Image from "next/image";
// import Image1 from '../public/Image1.png'
import '@fontsource/inter/';
import '@fontsource/poppins/600.css'; // Semi-bold weight
import './globals.css';
import '@fontsource/poppins'; // Defaults to all weights and styles
// OR import specific weights and styles for optimized loading
import '@fontsource/poppins/400.css'; // Regular weight
import '@fontsource/poppins/700.css';
import shop_by_category from '../public/shop_by_category.png'
// import comingSoon from '../public/coming_soon.png'
// import chutney from '../public/Garlic Chutney (1) (1) 1.png'
import TalkOfTown from "@/components/TalkOfTown";
import BestCombo from "@/components/BestCombo";
import chakKrDekho from '../public/chak_kr_dekho.png'
import Definately from "@/components/Definately";
import FansPage from "@/components/FansPage";
import CustomerHome from "@/components/CustomerHome";
import Footer from '@/components/Footer'
import Navbar from "@/components/Navbar";
import s_first from '../public/image (4).png'
// import s_second from '../public/image (5).png'
// import s_third from '../public/image (6).png'
// import s_forth from '../public/image (7).png'
// import s_fivth from '../public/image (8).png'
// import s_sixth from '../public/image (9).png'
// import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import mango_pickle from '../public/mango_pickle.png'


export default function Home() {

  // const [isBestSellers, setIsBestSellers] = useState(true);
  // const scrollContainerRef = useRef(null);

  // const handleBestSellersClick = () => setIsBestSellers(true);
  // const handleNewLaunchesClick = () => setIsBestSellers(false);

  // const scrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: -300, // Adjust the scroll distance as needed
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: 300, // Adjust the scroll distance as needed
  //       behavior: 'smooth',
  //     });
  //   }
  // };
  return (
    <>



      <div className="bg-yellow-100 my-4">
        <div className="flex flex-col sm:flex-row mx-4 sm:mx-20 justify-between my-4 bg-yellow-100">

          {/* Free Shipping */}
          <div className="flex flex-col items-center text-center my-4 sm:my-0 sm:mr-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-white-500 mb-4">
              <FaTruck className="text-4xl text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-poppins">Free Shipping</h3>
            <p className="text-gray-600">Get free shipping on all orders</p>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col items-center text-center my-4 sm:my-0 sm:mr-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-white-500 mb-4">
              <FaHeadset className="text-4xl text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
            <p className="text-gray-600">Please contact us at +9196259220070</p>
          </div>

          {/* Secure Payment */}
          <div className="flex flex-col items-center text-center my-4 sm:my-0 sm:mr-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-white-500 mb-4">
              <FaShieldAlt className="text-4xl text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600">We ensure your money is safe</p>
          </div>

          {/* Fast Delivery */}
          <div className="flex flex-col items-center text-center my-4 sm:my-0">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-white-500 mb-4">
              <FaRocket className="text-4xl text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Delivering within 3-5 days across India</p>
          </div>
        </div>
      </div>



      <div className="my-12">
        <div className="flex justify-center">
          <Image src={shop_by_category} height={600} width={800} alt="shop_by_category" />
        </div>

        <div className="mx-4 sm:mx-20 my-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 sm:gap-x-6 justify-items-center">

            {/* Each image block */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="relative h-[250px] w-full sm:w-[350px] lg:w-[400px]">
                {/* First Image as the parent */}
                <Image
                  src={s_first}
                  layout="fill"
                  objectFit="cover"
                  alt="shop_by_category"
                  className="rounded-xl"
                />

                {/* Children */}
                <p className="z-10 font-oswald absolute top-2 left-2 text-5xl text-white">PICKLES</p>
                <Image
                  src={mango_pickle}
                  height={200}
                  width={200}
                  alt="mango pickle"
                  className="absolute right-2 top-2"
                />
                <button className="absolute bottom-2 left-2 p-2 rounded-full px-4 bg-custom-green text-white border border-white rounded">
                  Shop now
                </button>
              </div>
            ))}

          </div>
        </div>
      </div>



      {/* talk of the town */}
      <div className="bg-yellow-100">
        <div className="bg-yellow-100 mx-20">
          <div className="flex justify-between my-16 mt-8">
            <div className="text-6xl font-bold mt-12">
              Talk Of The Town
            </div>
            <div className="mt-12">
              <button
                className="px-8 py-2 bg-green-900 rounded-full border text-white mx-4"

              >
                Best Sellers
              </button>
              <button
                className="border border-red-900 text-red-900 bg-white px-6 py-2 rounded-full hover:bg-brown-500 hover:text-white transition"

              >
                New Launches
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Grid with buttons */}
          <div className="relative">
            {/* Scroll Left Button */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"

            >
              <FaChevronLeft />
            </button>

            {/* Scrollable Grid */}
            <div

              className="overflow-x-auto py-8"
            >
              <div className="flex space-x-8">
                {[...Array(6)].map((_, index) => (
                  <TalkOfTown key={index} />
                ))}
              </div>
            </div>

            {/* Scroll Right Button */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2"

            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-custom-green border border-white px-12 text-white rounded-full py-4">
            View All
          </button>
        </div>
      </div>



      {/* best combo */}

      <div>
        <BestCombo />
      </div>



      <div className="w-full my-8">
        <Image src={chakKrDekho} alt='chak_Kr_Dekho' height={700} width={700} className="w-full" />
      </div>


      <div>
        <Definately />
      </div>


      <div className="bg-custom-bg-fan my-4">
        <FansPage />
      </div>

      <div className="bg-custom-bg-fan">
        <CustomerHome />

      </div>

      <div className="bg-custom-green flex mt-20 py-2 justify-between">
        <p className="text-white text-2xl py-4">RY JAR HAS A STORY</p>
        <svg className="mx-8 " width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136" />
        </svg>

        <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
        <svg className="mx-8 " width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136" />
        </svg>

        <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
        <svg className='mx-8 ' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136" />
        </svg>

        <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>


      </div>

      <div className="bg-custom-bg-fan">
        <Footer />
      </div>


    </>
  );
}