import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const list = [
  "https://res.cloudinary.com/dxae5w6hn/image/upload/v1738755418/emaorcvx0oeee4vv4xss.jpg",
  "https://res.cloudinary.com/dxae5w6hn/image/upload/v1738755418/gs4fmffr4pdulzyzsucd.jpg",
  "https://res.cloudinary.com/dxae5w6hn/image/upload/v1738755418/tqfu4rdhkqass1zxjht4.jpg",
  "https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png",

];

const BestCombo = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-white">
      <div className="container px-4 md:px-16 py-10 w-full flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {list.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden ${index === 0 || index === 3 ? 'md:col-span-1' : 'md:col-span-2'
                } h-[500px]`}
            >
              <Image
                src={image}
                alt={`Dynamic Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute top-0 right-0 p-2">
                <ArrowIcon />
              </div>
              <div className="absolute bottom-4 left-4">
                <LogoIcon />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

// Reusable Arrow Icon Component
const ArrowIcon = () => (
  <Link href="/shop">
    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="21.101" cy="21.7885" r="20.9135" fill="white" />
      <path d="M28.4219 14.4688L13.7825 29.1082" stroke="#292D32" strokeWidth="2.61418" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28.4219 25.2078V14.4688H17.6828" stroke="#292D32" strokeWidth="2.61418" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Link>
);

// Reusable Logo Icon Component
const LogoIcon = () => (
  <Image src={"https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661234/lgaftiqtc7desrwoxn23.png"} alt="logo" height={100} width={100} />
);

export default BestCombo;