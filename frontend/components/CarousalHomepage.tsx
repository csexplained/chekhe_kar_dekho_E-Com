'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

const Carousel = () => {
    const [images, setImages] = useState<{ imgSrc: string; altText: string }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/banners/main`);
                setImages(response.data as { imgSrc: string; altText: string }[]);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };
        fetchBanners();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images]);

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
                            src={image.imgSrc}
                            alt={image.altText || `Slide ${index}`}
                            layout="fill"
                            objectFit="cover"
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
