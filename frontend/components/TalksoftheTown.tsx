"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TalkOfTown from './TalkOfTown';
import chutney from '../public/Garlic Chutney (1) (1) 1.png';
import pickle from "../public/mango_pickle.png";

const products = [
    {
        price: 169,
        discount: 10,
        src: pickle,
        productname: "Dry Fruits Mix Pickle 475gm",
        rating: 4.9,
        noofreviews: 120,
    },
    {
        price: 199,
        discount: 15,
        src: chutney,
        productname: "Garlic Chutney 200gm",
        rating: 4.7,
        noofreviews: 95,
    },
    {
        price: 149,
        discount: 5,
        src: pickle,
        productname: "Spicy Mango Pickle 500gm",
        rating: 4.5,
        noofreviews: 80,
    },
    {
        price: 179,
        discount: 20,
        src: chutney,
        productname: "Mixed Vegetable Pickle 300gm",
        rating: 4.8,
        noofreviews: 110,
    },
    {
        price: 129,
        discount: 0,
        src: pickle,
        productname: "Lemon Pickle 250gm",
        rating: 4.6,
        noofreviews: 70,
    },
    {
        price: 189,
        discount: 12,
        src: chutney,
        productname: "Sweet Tamarind Chutney 400gm",
        rating: 4.4,
        noofreviews: 60,
    },
    {
        price: 159,
        discount: 8,
        src: pickle,
        productname: "Green Chili Pickle 350gm",
        rating: 4.3,
        noofreviews: 50,
    },
    {
        price: 209,
        discount: 18,
        src: pickle,
        productname: "Special Mixed Pickle Combo 600gm",
        rating: 4.9,
        noofreviews: 150,
    },
    {
        price: 139,
        discount: 0,
        src: chutney,
        productname: "Red Chili Chutney 200gm",
        rating: 4.2,
        noofreviews: 40,
    },
    {
        price: 169,
        discount: 10,
        src: chutney,
        productname: "Garlic and Ginger Pickle 450gm",
        rating: 4.7,
        noofreviews: 90,
    },
];


const TalkOfTownComponent = () => {
    const cards = products.map((product) => (
        <TalkOfTown carddata={product} />
    ));
    return (
        <>
            <div className="bg-[#FFF9EA] px-16">
                <div className="flex justify-between items-center  mt-4">
                    <div className="text-5xl font-inter font-semibold mt-8">
                        Talk Of The Town
                    </div>
                    <div className="mt-12">
                        <button className="font-poppins font-medium h-16 w-44 bg-green-900 rounded-full border text-white mx-4">
                            Best Sellers
                        </button>
                        <button className="border h-16 w-44 border-red-900 text-red-900 bg-transparent px-6 py-2 rounded-full ">
                            New Launches
                        </button>
                    </div>
                </div>
                <Carousel items={cards} />
                <div className="flex justify-center">
                    <button className="bg-custom-green border border-white px-12 text-white rounded-full py-4">
                        View All
                    </button>
                </div>
            </div>
        </>
    )
}


export default TalkOfTownComponent;