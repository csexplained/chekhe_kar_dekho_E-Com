import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import ShopCategory from './ShopbyCategory';
import Link from 'next/link';

const Categorylist = [
    {
        title: "PICKLES",
        image: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738584178/kfinvk6akzd4a2qsjpxl.png",
        path: "/shop",
        buttontext: "Shop Now"
    },
    {
        title: "Chutney",
        image: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738584177/s7oigzzzg6xyadzg2a65.png",
        path: "/shop",
        buttontext: "Shop Now"
    },
    {
        title: "GIFTING",
        image: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738584177/jhnutvjlnwib6v3jiijy.png",
        path: "/shop",
        buttontext: "Shop Now"
    },
    {
        title: "HEALTHY MIX NUT",
        image: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738583356/vnnz1hbazod5mumgmi8l.png",
        path: "/shop",
        buttontext: "Coming Soon"
    },
    {
        title: "SUPER SEEDS",
        image: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738583357/p6ygjebkl4ix19sidv6o.png",
        path: "/shop",
        buttontext: "Coming Soon"
    },
    {
        title: "FOX-NUTS",
        image: "https://res.cloudinary.com/djwzwq4cu/image/upload/v1738583357/ajwtnka7063qx1mefwva.png",
        path: "/shop",
        buttontext: "Coming Soon"
    },
];

interface CategoryItemProps {
    index: number;
    image: string | StaticImageData;
    title: string;
    path: string;
    buttontext: string;
}

const Category = () => {
    return (
        <>
            <div className='my-10'>
                <ShopCategory />
                <div className="max-w-7xl my-8 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {Categorylist.map((category, index) => (
                            <CategoryItem
                                buttontext={category.buttontext}
                                key={index}
                                index={index}
                                path={category.path}
                                image={category.image}
                                title={category.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const CategoryItem: React.FC<CategoryItemProps> = ({ index, image, title, path, buttontext }) => {
    return (
        <div key={index} className="relative h-[220px] w-full sm:w-[300px] lg:w-[400px]">
            <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt="shop_by_category"
                className="rounded-xl"
            />
            <p className="z-10 font-oswald absolute w-1/2 top-2 left-2 font-semibold text-6xl text-white">{title}</p>
            <Link href={path} className="absolute bottom-2 left-2 p-2 rounded-full px-4 bg-transparent text-white border border-white">
                {buttontext}
            </Link>
        </div>
    );
};

export default Category;