'use client'
import Image from "next/image";
import '@fontsource/inter/';
import '@fontsource/poppins/600.css';
import './globals.css';
import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import BestCombo from "@/components/BestCombo";
import chakKrDekho from '../public/chak_kr_dekho.png'
import Definately from "@/components/Definately";
import FansPage from "@/components/FansPage";
import CustomerHome from "@/components/CustomerHome";
import Footer from '@/components/Footer'
import FeaturesBannar from "@/components/FeaturesBannar";
import HomePageCarousel from "@/components/CarousalHomepage";
import Category from "@/components/Categorybannars";
import TalksoftheTown from "@/components/TalksoftheTown";

export default function Home() {

  return (
    <>
      <HomePageCarousel />
      <FeaturesBannar />
      <Category />
      <TalksoftheTown />
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