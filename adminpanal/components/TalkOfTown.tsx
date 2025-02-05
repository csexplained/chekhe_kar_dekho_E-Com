import Image from 'next/image';
import React from 'react';

interface TalkOfTownProps {
  carddata: {
    price: number;
    discount: number;
    src: string;
    productname: string;
    rating: number;
    noofreviews: number;
  }
}

const TalkOfTown = ({ carddata }: TalkOfTownProps) => {
  return (
    <div className="border-[#B81F2E] border rounded-3xl pb-4 bg-white  shadow-xl w-full max-w-[310px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] mx-auto">
      <div className="relative w-full">
        <div className="flex justify-center mx-auto">
          <Image
            src={carddata.src}
            alt="product image"
            width={200}
            height={200}
            className="w-full max-h-[270px] object-contain"
          />
        </div>
        <div className='absolute w-full flex justify-between items-center px-4 -top-1 right-0'>
          <div className="-top-1">
            <span className="absolute text-center flex justify-center items-center my-1 mx-4 w-4 text-white text-[10px] font-semibold rounded-full">
              Save {carddata.discount}%
            </span>
            <svg width="47" height="76" viewBox="0 0 47 76" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_dddd_17_189)">
                <path d="M7.92969 47.5543V2.5H38.7165V47.5543L23.7896 33.0055L7.92969 47.5543Z" fill="#004C37" />
              </g>
              <defs>
                <filter id="filter0_dddd_17_189" x="0.446929" y="0.362069" width="45.7524" height="74.9854" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1.06897" />
                  <feGaussianBlur stdDeviation="1.60345" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.266667 0 0 0 0 0.192157 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_189" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="5.34483" />
                  <feGaussianBlur stdDeviation="2.67241" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.266667 0 0 0 0 0.192157 0 0 0 0.09 0" />
                  <feBlend mode="normal" in2="effect1_dropShadow_17_189" result="effect2_dropShadow_17_189" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="10.6897" />
                  <feGaussianBlur stdDeviation="3.2069" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.266667 0 0 0 0 0.192157 0 0 0 0.05 0" />
                  <feBlend mode="normal" in2="effect2_dropShadow_17_189" result="effect3_dropShadow_17_189" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="20.3103" />
                  <feGaussianBlur stdDeviation="3.74138" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.266667 0 0 0 0 0.192157 0 0 0 0.01 0" />
                  <feBlend mode="normal" in2="effect3_dropShadow_17_189" result="effect4_dropShadow_17_189" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_17_189" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="border-black border p-3 rounded-full">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.44947 2.2733L8.87744 2.84533L9.3054 2.2733C10.0645 1.25873 11.2806 0.599424 12.6369 0.599424C14.9386 0.599424 16.8101 2.47442 16.8101 4.79808C16.8101 5.74755 16.6587 6.62352 16.3958 7.43622L16.3947 7.4397C15.764 9.43538 14.4703 11.0477 13.0685 12.2524C11.6644 13.4591 10.1826 14.2303 9.23024 14.5543L9.23022 14.5543L9.22451 14.5563C9.15557 14.5806 9.02974 14.602 8.87744 14.602C8.72514 14.602 8.59931 14.5806 8.53036 14.5563L8.53037 14.5563L8.52464 14.5543C7.57226 14.2303 6.09047 13.4591 4.68635 12.2524C3.28459 11.0477 1.99085 9.43538 1.36021 7.4397L1.36023 7.43969L1.3591 7.43622C1.09617 6.62352 0.944761 5.74755 0.944761 4.79808C0.944761 2.47442 2.81628 0.599424 5.11802 0.599424C6.4743 0.599424 7.69042 1.25873 8.44947 2.2733Z" stroke="black" strokeWidth="1.06897" />
            </svg>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="px-3 w-full">
          <h5 className="text-xl h-8 overflow-hidden font-semibold text-[#000000]">
            {carddata.productname}
          </h5>
          <div className='flex justify-start gap-2 items-center'>
            <div className="flex w-14 h-8 text-sm font-semibold bg-[#5C0C14] rounded-full text-white px-2 gap-1 items-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.01627 0.628906L8.95095 4.82027L13.5108 5.37629L10.1466 8.52271L11.0301 13.0577L7.01627 10.8109L3.00242 13.0577L3.8859 8.52271L0.521724 5.37629L5.0816 4.82027L7.01627 0.628906Z" fill="#FFA500" />
              </svg>
              <span className="">
                {carddata.rating}
              </span>
            </div>
            <div className="flex flex-col text-sm font-semibold justify-start rounded-full text-black gap-1 items-start">
              <div className='flex gap-1'>
                {Array.from({ length: Math.round(carddata.rating) }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.01627 0.628906L8.95095 4.82027L13.5108 5.37629L10.1466 8.52271L11.0301 13.0577L7.01627 10.8109L3.00242 13.0577L3.8859 8.52271L0.521724 5.37629L5.0816 4.82027L7.01627 0.628906Z" fill="#FFA500" />
                  </svg>
                ))}
              </div>
              <p className='text-[#000000CC] text-[10px] font-semibold'>{carddata.noofreviews} Reviews</p>
            </div>
          </div>

          {/* Price Section (on the same row) */}
          <div className="flex px-1 gap-3 justify-between items-center">
            <div className="flex justify-start items-end">
              <span className="text-3xl font-bold font-poppins text-gray-900 dark:text-white mr-2">
                <span className='text-2xl text-gray-900'>₹</span>{carddata.price}
              </span>
              <span className="text-lg line-through font-medium text-gray-900">
                <span className='text-sm'>₹</span>{carddata.price + carddata.discount}
              </span>
            </div>
            <button className="bg-custom-red font-poppins text-lg ml-2 w-[140px] text-white py-2 px-4 rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkOfTown;