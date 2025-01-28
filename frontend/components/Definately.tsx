import Image from 'next/image';
import React from 'react';
import green_chilli from '../public/Green Chilli.png';
import mango_pickle from '../public/mango_pickle.png';
import '@fontsource/oswald'; 

const Definately = () => {
  return (
    <div className="my-4 mx-4 md:mx-10 lg:mx-20">
      <div className="text-4xl md:text-5xl lg:text-6xl font-inter text-center">
        You Definately <span className="text-custom-red">Love This</span>
      </div>

      <div className="flex flex-col md:flex-row my-8 gap-6 md:gap-8 lg:gap-12 w-full">
        <div className="rounded border border flex justify-center items-center">
          <Image src={green_chilli} height={400} width={400} alt="green_chilli" className="object-cover" />
        </div>
        
        <div className="rounded-xl bg-custom-red relative flex flex-col items-center">
          <p className="mt-6 text-3xl md:text-5xl lg:text-7xl font-oswald text-white">PICKLE</p>
          <Image src={mango_pickle} height={400} width={400} alt="mango_pickle" className="object-cover" />
        </div>

        <div className="rounded-xl bg-custom-red relative flex flex-col items-center">
          <p className="mt-6 text-3xl md:text-5xl lg:text-7xl font-oswald text-white">PICKLE</p>
          <Image src={mango_pickle} height={400} width={400} alt="mango_pickle" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Definately;