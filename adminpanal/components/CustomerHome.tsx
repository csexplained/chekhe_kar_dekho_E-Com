import React from "react";
import Image from "next/image";
import { FansCarousel } from "@/components/ui/fanscard-carousal";


interface FansCardProps {
  customerName: string;
  text: string;
  rating: number;
}
import fansdata from "@/ReviewsDb.js";

const CustomerHome = () => {
  return (
    <div className="flex my-10 flex-col px-6 md:px-16 py-8 bg-[#FFF9EA]">
      {/* Header */}
      <div className="flex flex-col items-start justify-between">
        <p className="text-custom-green w-2/3 text-3xl md:text-5xl lg:text-6xl font-intel mb-4">
          What Our <span className="text-yellow-500">Customers</span> Say
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          See why customers keep coming back for more <br className="hidden md:block" />
          of our flavourful creations.
        </p>
      </div>

      {/* FansCarousel with dynamic data */}
      <FansCarousel items={fansdata.map((fan, index) => (
        <FansCard key={index} carddata={fan} />
      ))} />
    </div>
  );
};

export default CustomerHome;

// FansCard Component
const FansCard = ({ carddata }: { carddata: FansCardProps }) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-xl px-4 py-4 md:px-6 h-full md:py-6 lg:px-8 lg:py-8 bg-white shadow-md w-64 md:w-72 lg:w-96">
      {/* Star Rating */}
      <div className="flex">
        {Array.from({ length: carddata.rating }, (_, index) => (
          <svg
            key={index}
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75857 0.736882L12.2873 5.87753L17.94 6.70207C18.0117 6.71274 18.0791 6.74322 18.1344 6.79009C18.1898 6.83696 18.2309 6.89835 18.2533 6.96736C18.2756 7.03636 18.2783 7.11023 18.2609 7.18065C18.2435 7.25107 18.2069 7.31524 18.155 7.36594L14.0654 11.3665L15.031 17.0165C15.0434 17.0879 15.0356 17.1614 15.0084 17.2286C14.9812 17.2958 14.9358 17.3541 14.8772 17.3967C14.8186 17.4394 14.7492 17.4648 14.6769 17.4701C14.6046 17.4753 14.5322 17.4602 14.4681 17.4265L9.4118 14.7594L4.35553 17.4272C4.29142 17.4611 4.21909 17.4763 4.14676 17.4712C4.07443 17.466 4.005 17.4406 3.94636 17.398C3.88772 17.3553 3.84223 17.2971 3.81505 17.2298C3.78787 17.1626 3.7801 17.0891 3.79261 17.0177L4.75817 11.3665L0.667454 7.36594C0.615586 7.31524 0.578902 7.25107 0.561534 7.18065C0.544166 7.11023 0.546804 7.03636 0.569151 6.96736C0.591497 6.89835 0.632665 6.83696 0.688017 6.79009C0.74337 6.74322 0.810709 6.71274 0.88245 6.70207L6.53516 5.87753L9.06503 0.736882C9.09658 0.671739 9.14584 0.616801 9.20717 0.57836C9.2685 0.539919 9.33942 0.519531 9.4118 0.519531C9.48418 0.519531 9.5551 0.539919 9.61643 0.57836C9.67776 0.616801 9.72702 0.671739 9.75857 0.736882Z"
              fill="#FFA500"
            />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-base md:text-lg mt-4">{carddata.text}</p>

      {/* Customer Info */}
      <div className="flex items-center mt-4">
        <div className="rounded-full flex justify-center items-center text-white w-10 h-10 bg-green-800">
          {carddata.customerName.slice(0, 2)}
        </div>
        <p className="ml-4 font-semibold">{carddata.customerName}</p>
      </div>
    </div>
  );
};
