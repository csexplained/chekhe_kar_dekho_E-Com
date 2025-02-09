import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ComingSooncardProps {
    carddata: {
        src: string;
        productname: string;
    };
}

const ComingSooncard = ({ carddata }: ComingSooncardProps) => {
    return (
        <div className="border-[#B81F2E] border rounded-3xl pb-4 bg-white shadow-xl w-full max-w-[310px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] mx-auto flex flex-col h-full">
            {/* Image Container */}
            <div className="flex-1 flex justify-center items-center p-4">
                <Image
                    src={carddata.src}
                    alt="product image"
                    width={200}
                    height={200}
                    className="w-full max-h-[270px] object-contain"
                />
            </div>

            {/* Product Details */}
            <div className="px-3 w-full">
                <h5 className="text-xl h-8 overflow-hidden font-semibold text-[#000000] text-center">
                    {carddata.productname}
                </h5>
            </div>

            {/* Notify Me Button */}
            <div className="px-3 w-full flex justify-center mt-4">
                <Link href={"/contactUs"} className="bg-custom-red font-poppins text-center text-lg w-[250px] text-white py-2 px-4 rounded-full">
                    Notify Me
                </Link>
            </div>
        </div>
    );
};

export default ComingSooncard;