'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738583359/erokgzycpskydxqqjumr.png",
    "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738583358/w4jym1e33ky4ndzt6tv8.png",
    "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738583357/t5hzkrrrbkqtnaundffr.png",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    const goToImage = (index: number): void => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-[200px] sm:h-[400px] md:h-[570px] overflow-hidden">
            {/* Images */}
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative h-[200px] sm:h-[400px] md:h-[570px]">
                        <Image
                            src={image}
                            alt={`Slide ${index}`}
                            layout="fill" // Fill the parent container
                            objectFit="cover" // Ensure the image covers the area without distortion
                            className="w-full h-full"
                        />
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-8 sm:w-12 md:w-16 h-2 sm:h-3 rounded-full ${currentIndex === index ? 'bg-[#FFA500]' : 'bg-[#FFA50080]'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;