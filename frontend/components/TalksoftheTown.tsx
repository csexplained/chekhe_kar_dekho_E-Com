"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import TalkOfTown from './TalkOfTown';
import Link from "next/link";
import axios from 'axios';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountprice: string;
  category: {
    _id: string;
    name: string;
  };
  images: string[];
  stock: number;
}

const TalkOfTownComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/Products/`, {
          params: {
            limit: 10, // Adjust the limit as needed
          },
          withCredentials: true
        });

        const data = response.data as { products: Product[] };
        setProducts(data.products);
      } catch (err) {
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-500">
        <p className="text-xl">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  const cards = products.map((product, index) => (
    <TalkOfTown key={index} product={{
      ...product,
      discountprice: parseFloat(product.discountprice) || 0
    }} />
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
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p>Loading...</p>
          </div>
        ) : (
          <Carousel items={cards} />
        )}

        {/* View All Button */}
        <div className="flex justify-center mt-6">
          <Link href={"/shop"} className="bg-custom-green border border-white px-8 sm:px-12 text-white rounded-full py-2 sm:py-4">
            View All
          </Link>
        </div>
      </div>
    </>
  );
};

export default TalkOfTownComponent;