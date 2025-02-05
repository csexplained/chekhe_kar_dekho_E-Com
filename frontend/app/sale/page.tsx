
import Image from 'next/image'
import React from 'react'
import TalkOfTown from '@/components/TalkOfTown'
import Bannar from "@/components/Bannar";
import TalkOfTownComponent from '@/components/TalksoftheTown'
import BannarArray from '@/BannarDB';

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
  const cards = () => (
    products.map((product, index) => (
      <TalkOfTown key={index} carddata={product} />
    ))
  );
  return (
    <>
      <Image src={"https://res.cloudinary.com/dxae5w6hn/image/upload/v1738662340/jk8yqc2zfwnlacqjujqa.png"} height={1000} width={1000} className='w-full' alt="Image1" />
      <div className='px-4 sm:px-8 md:px-12 py-12'>
        <div className="flex  sm:flex-row justify-between items-start mb-6">
          <div className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold text-left mb-4 md:mb-0">
            Our Offers
          </div>
        </div>
        <div className='flex justify-center py-6 w-full'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-3 justify-center items-center">
            {cards()}
          </div>
        </div>
      </div>
      <Bannar imgLink={BannarArray[2]} />
      <TalkOfTownComponent />
    </>
  )
}

export default page
