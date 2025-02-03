import Image from 'next/image';
import React from 'react';
import green_chilli from '../public/Green Chilli.png';
import mango_pickle from '../public/mango_pickle.png';
import '@fontsource/oswald'; // Ensure Oswald font is imported

const pickles = [
  { id: 1, title: '', image: green_chilli },
  { id: 2, title: 'PICKLE', image: mango_pickle },
  { id: 3, title: 'PICKLE', image: mango_pickle },
  { id: 4, title: 'SPICY MIX', image: mango_pickle }, // Extra item to show dynamic behavior
];

const Definately = () => {
  return (
    <div className="my-10 pt-14 mx-4 md:mx-10 lg:mx-14 xl:mx-14">
      {/* Heading Section */}
      <div className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl font-inter text-center">
        You Definitely <span className="text-custom-red">Love This</span>
      </div>

      {/* Scrollable Image Grid */}
      <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory my-12 gap-6 md:gap-8 lg:gap-12 px-4">
        {pickles.map((pickle) => (
          <div
            key={pickle.id}
            className="min-w-[250px] md:min-w-[300px] lg:min-w-[350px] snap-center flex flex-col items-center rounded-xl bg-custom-red overflow-hidden relative"
          >

            <Image
              src={pickle.image}
              alt={pickle.title}
              className="object-cover w-full h-auto"
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