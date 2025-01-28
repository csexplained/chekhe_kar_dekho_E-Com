import Image from 'next/image'
import React from 'react'
import chutney from '../public/Garlic Chutney (1) (1) 1.png'

const TalkOfTown = () => {
  return (
    <div className="my-8">

    {/* Cards */}
    <div className="relative w-full max-w-sm bg-white border border-red-900 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      
      {/* Image Section */}
      <div className="flex justify-center mx-auto">
        <Image
          src={chutney}
          alt="product image"
          width={300}
          height={300}
          className="rounded-t-xl"
        />
      </div>
  
      {/* Wishlist Icon */}
      <div className="absolute top-2 right-2">
        <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.453408" y="1.06278" width="36.8481" height="37.076" rx="18.424" fill="white" fillOpacity="0.3"/>
          <rect x="0.453408" y="1.06278" width="36.8481" height="37.076" rx="18.424" stroke="black" strokeWidth="0.469316"/>
          <path d="M18.4495 14.2733L18.8774 14.8453L19.3054 14.2733C20.0645 13.2587 21.2806 12.5994 22.6369 12.5994C24.9386 12.5994 26.8101 14.4744 26.8101 16.7981C26.8101 17.7475 26.6587 18.6235 26.3958 19.4362L26.3947 19.4397C25.764 21.4354 24.4703 23.0477 23.0685 24.2524C21.6644 25.4591 20.1826 26.2303 19.2302 26.5543L19.2302 26.5543L19.2245 26.5563C19.1556 26.5806 19.0297 26.602 18.8774 26.602C18.7251 26.602 18.5993 26.5806 18.5304 26.5563L18.5304 26.5563L18.5246 26.5543C17.5723 26.2303 16.0905 25.4591 14.6864 24.2524C13.2846 23.0477 11.9908 21.4354 11.3602 19.4397L11.3602 19.4397L11.3591 19.4362C11.0962 18.6235 10.9448 17.7475 10.9448 16.7981C10.9448 14.4744 12.8163 12.5994 15.118 12.5994C16.4743 12.5994 17.6904 13.2587 18.4495 14.2733Z" stroke="black" strokeWidth="1.06897"/>
        </svg>
      </div>
  
      {/* Discount Badge */}
      <div className="absolute top-0 left-4">
        <svg width="47" height="76" viewBox="0 0 47 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dddd_17_189)">
            <path d="M7.92969 47.5543V2.5H38.7165V47.5543L23.7896 33.0055L7.92969 47.5543Z" fill="#004C37"/>
          </g>
          <defs>
            <filter id="filter0_dddd_17_189" x="0.446929" y="0.362069" width="45.7524" height="74.9854" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="1.06897"/>
              <feGaussianBlur stdDeviation="1.60345"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.266667 0 0 0 0 0.192157 0 0 0 0.1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_189"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="5.34483"/>
              <feGaussianBlur stdDeviation="2.67241"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.266667 0 0 0 0 0.192157 0 0 0 0.09 0"/>
              <feBlend mode="normal" in2="effect1_dropShadow_17_189" result="effect2_dropShadow_17_189"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="10.6897"/>
              <feGaussianBlur stdDeviation="3.2069"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.266667 0 0 0 0 0.192157 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="effect2_dropShadow_17_189" result="effect3_dropShadow_17_189"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="20.3103"/>
              <feGaussianBlur stdDeviation="3.74138"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.266667 0 0 0 0 0.192157 0 0 0 0.01 0"/>
              <feBlend mode="normal" in2="effect3_dropShadow_17_189" result="effect4_dropShadow_17_189"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_17_189" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
  
      {/* Product Info Section */}
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Dry Fruits Mix Pickle 475gm
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="text-xl font-semibold bg-red-900 px-4 rounded-full text-white flex px-2">
            <svg width="14" className="mt-2 mr-2" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.01627 0.628906L8.95095 4.82027L13.5108 5.37629L10.1466 8.52271L11.0301 13.0577L7.01627 10.8109L3.00242 13.0577L3.8859 8.52271L0.521724 5.37629L5.0816 4.82027L7.01627 0.628906Z" fill="#FFA500"/>
            </svg>
            4.9
          </span>
        </div>
  
        {/* Price Section (on the same row) */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white mr-2">
              ₹169.00
            </span>
            <span className="text-xs font-medium text-gray-900 dark:text-white line-through">
              ₹199.00
            </span>
          </div>
          <a href="#">
            <button className="bg-custom-red ml-2 text-white py-2 px-4 rounded-full hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
              Add to Cart
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  
  )
}

export default TalkOfTown
