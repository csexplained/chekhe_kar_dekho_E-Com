"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import ComingSooncard from '@/components/ComingSoonproductCard';
import axios from 'axios';
import { Loader2, AlertCircle } from 'lucide-react';

interface ComingSoonProduct {
  _id: string;
  name: string;
  images: string[];
  price: number;
  discountprice: number;
  rating: number;
  noofreviews: number;
}

const ComingSoonPage = () => {
  const [products, setProducts] = useState<ComingSoonProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComingSoonProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/comingsoonprodcuts/`, {
          withCredentials: true,
        });
        const data = response.data as { products: ComingSoonProduct[] };
        setProducts(data.products);
      } catch (err) {
        setError('Failed to load coming soon products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchComingSoonProducts();
  }, []);

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-500">
        <AlertCircle size={64} className="mb-4" />
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
    <ComingSooncard
      key={product._id}
      carddata={{
        price: product.price,
        discount: product.discountprice,
        src: product.images[0], // Use the first image
        productname: product.name,
        rating: product.rating,
        noofreviews: product.noofreviews,
      }}
    />
  ));

  return (
    <div className="bg-[#FFF9EA] py-6 px-4 sm:px-8 md:px-16">
      {/* Header Section */}
      <div className="flex flex-row justify-between items-start my-8">
        <div className="text-4xl sm:text-4xl md:text-5xl font-inter font-semibold text-left md:text-left mb-4 md:mb-0">
          Coming Soon
        </div>
      </div>

      {/* Carousel Section */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin text-green-500" size={64} />
        </div>
      ) : (
        <Carousel items={cards} />
      )}
    </div>
  );
};

export default ComingSoonPage;