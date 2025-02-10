'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface ImageData {
    _id: string;
    imgSrc: string;
    altText: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const Banner = ({ index }: { index: number }) => {
    const [images, setImages] = useState<ImageData[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get<ImageData[]>(`${process.env.NEXT_PUBLIC_URL}/banners/vertical`);
                setImages(response.data);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };
        fetchImages();
    }, []);

    if (!images.length || index < 0 || index >= images.length) {
        return (
            <div className="w-full my-2">
                <Image
                    src={"https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661535/osp1ce4gbkxzbgxcol65.png"}
                    alt={"Banner Image"}
                    className="w-full"
                    width={1000}
                    height={400}
                    layout="responsive"
                />
            </div>
        )
    }

    return (
        <div className="w-full my-2">
            <Image
                src={images[index].imgSrc || "https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661535/osp1ce4gbkxzbgxcol65.png"}
                alt={images[index].altText || "Banner Image"}
                className="w-full"
                width={1000}
                height={400}
                layout="responsive"
            />
        </div>
    );
};

export default Banner;
