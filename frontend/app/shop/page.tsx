import Navbar from '@/components/Navbar'
import TalkOfTown from '@/components/TalkOfTown';
import React from 'react'
import Image from "next/image";
import chakKrDekho from '../../public/chak_kr_dekho.png'
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between mx-20 mt-8">
        <p className="font-bold font-intel text-4xl">Shop</p>
        <div className="flex space-x-4">
          {/* Super Combos Button */}
          <button className="px-8 py-4 bg-custom-orange rounded-full border font-bold text-black">
            Super Combos
          </button>

          {/* Filter Button */}
          <button className="flex items-center border border-black text-black bg-custom-button-filter px-6 py-4 rounded-full hover:bg-brown-500  transition">
            <svg
              className="mr-2"
              width="23"
              height="12"
              viewBox="0 0 23 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.5 0.714844H21.5" stroke="black" stroke-linecap="round" />
              <path d="M7 5.71484H22" stroke="black" stroke-linecap="round" />
              <path d="M1 10.7148L22 10.7148" stroke="black" stroke-linecap="round" />
            </svg>
            Filter
          </button>
        </div>

      </div>

      <div className="mx-20 bg-white">
  <div className="grid grid-cols-4 gap-4">
    {[...Array(20)].map((_, index) => (
      <TalkOfTown key={index} />
    ))}
  </div>
</div>

<div className="w-full my-8">
<Image src={chakKrDekho} alt='chak_Kr_Dekho' height={700} width={700} className="w-full"/>
</div>


<div className="bg-custom-green flex my-20 py-2 justify-between">
  <p className="text-white text-2xl py-4">RY JAR HAS A STORY</p>
  <svg className="mx-8 " width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136"/>
</svg>

  <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
  <svg className="mx-8 " width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136"/>
</svg>

  <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
  <svg  className='mx-8 ' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C14.4753 7.52634 20.4736 13.5247 28 14C20.4736 14.4753 14.4753 20.4736 14 28C13.5247 20.4736 7.52634 14.4753 0 14C7.52634 13.5247 13.5247 7.52634 14 0Z" fill="#FEC136"/>
</svg>

  <p className="text-white font-intel text-2xl py-4">EVERY JAR HAS A STORY</p>
  

</div>

<Footer/>




      
    </div>
  );
};

export default page;
