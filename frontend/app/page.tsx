'use client'

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
import Bannar from "@/components/Bannar";
import chutney from '../public/Garlic Chutney (1) (1) 1.png';
import pickle from "../public/mango_pickle.png";

const products = [
  {
      price: 169,
      discount: 10,
      src: pickle,
      productname: "Dry Fruits Mix Pickle 475gm",
      rating: 4.9,
      noofreviews: 120,
  },
  {
      price: 199,
      discount: 15,
      src: chutney,
      productname: "Garlic Chutney 200gm",
      rating: 4.7,
      noofreviews: 95,
  },
  {
      price: 149,
      discount: 5,
      src: pickle,
      productname: "Spicy Mango Pickle 500gm",
      rating: 4.5,
      noofreviews: 80,
  },
  {
      price: 179,
      discount: 20,
      src: chutney,
      productname: "Mixed Vegetable Pickle 300gm",
      rating: 4.8,
      noofreviews: 110,
  },
  {
      price: 129,
      discount: 0,
      src: pickle,
      productname: "Lemon Pickle 250gm",
      rating: 4.6,
      noofreviews: 70,
  },
  {
      price: 189,
      discount: 12,
      src: chutney,
      productname: "Sweet Tamarind Chutney 400gm",
      rating: 4.4,
      noofreviews: 60,
  },
  {
      price: 159,
      discount: 8,
      src: pickle,
      productname: "Green Chili Pickle 350gm",
      rating: 4.3,
      noofreviews: 50,
  },
  {
      price: 209,
      discount: 18,
      src: pickle,
      productname: "Special Mixed Pickle Combo 600gm",
      rating: 4.9,
      noofreviews: 150,
  },
  {
      price: 139,
      discount: 0,
      src: chutney,
      productname: "Red Chili Chutney 200gm",
      rating: 4.2,
      noofreviews: 40,
  },
  {
      price: 169,
      discount: 10,
      src: chutney,
      productname: "Garlic and Ginger Pickle 450gm",
      rating: 4.7,
      noofreviews: 90,
  },
];


export default function Home() {

  return (
    <>
      <HomePageCarousel />
      <FeaturesBannar />
      <Category />
      <TalksoftheTown />
      <BestCombo />
      <Bannar imgLink={chakKrDekho} />
      <Definately />
      <FansPage />
      <CustomerHome />
      
    </>
  );
}