'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import '@fontsource/oswald'; // Ensure Oswald font is imported

interface Pickle {
  _id: string;
  imgSrc: string;
  altText: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Definately = () => {
  const [pickles, setPickles] = useState<Pickle[]>([]);

  useEffect(() => {
    const fetchPickles = async () => {
      try {
        const response = await axios.get<Pickle[]>(`${process.env.NEXT_PUBLIC_URL}/banners/definetly`);
        setPickles(response.data);
      } catch (error) {
        console.error("Error fetching pickles:", error);
      }
    };
    fetchPickles();
  }, []);

  return (
    <div className="my-10 pt-14 mx-4 md:mx-10 lg:mx-14 xl:mx-14">
      {/* Heading Section */}
      <div className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl font-inter text-center">
        You Definitely <span className="text-custom-red">Love This</span>
      </div>

      {/* Scrollable Image Grid */}
      <div className="flex my-12 gap-6 md:gap-8 lg:gap-12 px-4 overflow-x-auto">
        {pickles.map((pickle) => (
          <div
            key={pickle._id}
            className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] snap-center flex flex-col items-center rounded-xl overflow-hidden relative"
          >
            <Image
              src={pickle.imgSrc}
              alt={"loading"}
              className="object-cover w-full h-full"
              layout="responsive"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Definately;