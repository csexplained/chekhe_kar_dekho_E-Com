"use client";
import React from "react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import TalkOfTown from './TalkOfTown';
import Link from "next/link";

const products = [
    {
        price: 169,
        discount: 10,
        src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738586014/qgdvrh1zztw4ihxxb5nz.png",
        productname: "Dry Fruits Mix Pickle 475gm",
        rating: 4.9,
        noofreviews: 120,
    },
    {
        price: 199,
        discount: 15,
        src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738586013/lc1ychpuuctw9qyvfchm.png",
        productname: "Garlic",
        rating: 4.7,
        noofreviews: 95,
    },
    {
        price: 149,
        discount: 5,
        src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738586014/qgdvrh1zztw4ihxxb5nz.png",
        productname: "Spicy Mango Pickle 500gm",
        rating: 4.5,
        noofreviews: 80,
    },
    {
        price: 179,
        discount: 20,
        src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738586013/lc1ychpuuctw9qyvfchm.png",
        productname: "Mixed Vegetable Pickle 300gm",
        rating: 4.8,
        noofreviews: 110,
    },
    {
        price: 129,
        discount: 0,
        src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738586014/qgdvrh1zztw4ihxxb5nz.png",
        productname: "Lemon Pickle 250gm",
        rating: 4.6,
        noofreviews: 70,
    },
    {
        price: 189,
        discount: 12,
        src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738586013/lc1ychpuuctw9qyvfchm.png",
        productname: "Sweet Tamarind ",
        rating: 4.4,
        noofreviews: 60,
    },
    {
        price: 159,
        discount: 8,
        src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738586014/qgdvrh1zztw4ihxxb5nz.png",
        productname: "Green Chili Pickle 350gm",
        rating: 4.3,
        noofreviews: 50,
    },
    {
        price: 209,
        discount: 18,
        src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738586014/qgdvrh1zztw4ihxxb5nz.png",
        productname: "Special Mixed Pickle Combo 600gm",
        rating: 4.9,
        noofreviews: 150,
    },
    {
        price: 139,
        discount: 0,
        src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738586013/lc1ychpuuctw9qyvfchm.png",
        productname: "Red Chili",
        rating: 4.2,
        noofreviews: 40,
    },
    {
        price: 169,
        discount: 10,
        src: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738586013/lc1ychpuuctw9qyvfchm.png",
        productname: "Garlic and Ginger Pickle 450gm",
        rating: 4.7,
        noofreviews: 90,
    },
];

const TalkOfTownComponent = () => {
    const cards = products.map((product, index) => (
        <TalkOfTown key={index} carddata={product} />
    ));

    return (
        <>
            <div className="bg-[#FFF9EA] py-6 px-4 sm:px-8 md:px-16">
                {/* Header Section */}
                <div className="flex flex-row justify-between items-start my-8">
                    <div className="text-4xl sm:text-4xl md:text-6xl font-inter font-semibold text-left md:text-left mb-4 md:mb-0">
                        Talk Of The Town
                    </div>
                    <div className="flex  flex-col min-w-32 sm:flex-row gap-3">
                        <button className="font-poppins min-w-32 sm:w-44 font-medium h-12 sm:h-16  bg-green-900 rounded-full border text-white">
                            <Link href="/shop">
                                Best Sellers
                            </Link>
                        </button>
                        <button className="border h-12 min-w-32 sm:w-44 sm:h-16  border-red-900 text-red-900 bg-transparent rounded-full">
                            <Link href="/shop">
                                New Launches
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Carousel Section */}
                <Carousel items={cards} />

                {/* View All Button */}
                <div className="flex justify-center mt-6">
                    <button className="bg-custom-green border border-white px-8 sm:px-12 text-white rounded-full py-2 sm:py-4">
                        View All
                    </button>
                </div>
            </div>
        </>
    );
};

export default TalkOfTownComponent;