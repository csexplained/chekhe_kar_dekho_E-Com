import React from 'react';

const FansPage = () => {
  return (
    <div className='bg-custom-bg-fan mx-4 md:mx-10 lg:mx-20'>
      <div className='text-4xl md:text-5xl lg:text-6xl text-center font-intel my-10 md:my-16 lg:my-20'>
        What Fan Have To <span className='text-custom-red'>Say!!</span>
      </div>

      <div className='flex flex-wrap gap-4 justify-center md:justify-start w-full my-8'>
        <div className='bg-black h-60 w-48 md:h-72 md:w-56 lg:h-80 lg:w-64 rounded-xl'></div>
        <div className='bg-black h-60 w-48 md:h-72 md:w-56 lg:h-80 lg:w-64 rounded-xl'></div>
        <div className='bg-black h-60 w-48 md:h-72 md:w-56 lg:h-80 lg:w-64 rounded-xl'></div>
        <div className='bg-black h-60 w-48 md:h-72 md:w-56 lg:h-80 lg:w-64 rounded-xl'></div>
        <div className='bg-black h-60 w-48 md:h-72 md:w-56 lg:h-80 lg:w-64 rounded-xl'></div>
      </div>
    </div>
  );
};

export default FansPage;
