import React from 'react';
import Image from 'next/image';
import shop_by_category from '../public/shop_by_category.png';
import type { StaticImageData } from 'next/image';
import { title } from 'process';
import categorybannar from '../public/categorybannar.png';
import ShopCategory from './ShopbyCategory';
import categorybannar2 from '../public/categorybannar2.png';
import categorybannar3 from '../public/categorybannar3.png';
import Link from 'next/link';

const Categorylist = [
    {
        title: "PICKLES",
        image: categorybannar,
        path: ""
    },
    {
        title: "Chutney",
        image: categorybannar2,
        path: ""
    },
    {
        title: "GIFTING",
        image: categorybannar3,
        path: ""
    },
    {
        title: "PICKLES",
        image: categorybannar,
        path: ""
    },
    {
        title: "Chutney",
        image: categorybannar2,
        path: ""
    },
    {
        title: "GIFTING",
        image: categorybannar3,
        path: ""
    },
];

interface CategoryItemProps {
    index: number;
    image: StaticImageData;
    title: string;
    path: string;
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

const CategoryItem: React.FC<CategoryItemProps> = ({ index, image, title, path }) => {
    return (
        <div key={index} className="relative h-[220px] w-full sm:w-[300px] lg:w-[400px]">
            <Image
                src={image}
                layout="fill"
                objectFit="cover"
                alt="shop_by_category"
                className="rounded-xl"
            />
            <p className="z-10 font-oswald absolute top-2 left-2 font-semibold text-6xl text-white">{title}</p>
            <Link href={path} className="absolute bottom-2 left-2 p-2 rounded-full px-4 bg-transparent text-white border border-white">
                Shop now
            </Link>
        </div>
    );
};

export default Category;