"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader2, AlertCircle } from 'lucide-react';
import HomePageCarousel from "@/components/CarousalHomepage";
import Bannar from "@/components/Bannar";
import TalkOfTown from '@/components/TalkOfTown';
import { fetchCategories, Category } from '@/utils/categoryFetch';

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
  ratings: number;
  reviews: number;
}

const ProductListingPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const limit = 8; // Products per page

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        await Promise.all([loadCategories(), fetchProducts()]);
      } catch (err) {
        setError('Failed to load data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, selectedCategory, minPrice, maxPrice, sortOrder]);

  const loadCategories = async () => {
    const fetchedCategories = await fetchCategories();
    setCategories(fetchedCategories);
  };

  const fetchProducts = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/Products/`, {
      params: {
        page,
        limit,
        category: selectedCategory,
        minPrice,
        maxPrice,
        sortOrder
      },
      withCredentials: true
    });

    const data = response.data as { products: Product[], total: number, pages: number };
    setProducts(data.products);
    setTotalProducts(data.total);
    setTotalPages(data.pages);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setPage(1);
  };

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };


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

  return (
    <>
      <HomePageCarousel />
      <div className='px-4 sm:px-8 md:px-12 py-12'>
        <div className="flex sm:flex-row justify-between items-start mb-6">
          <div className="text-3xl sm:text-4xl md:text-5xl font-inter font-semibold text-left mb-4 md:mb-0">
            Shop
          </div>
          <div className="flex justify-center items-center flex-row gap-3">
            <button
              onClick={handleSortChange}
              className="font-poppins min-w-32 sm:w-44 font-medium h-12 sm:h-16 bg-[#FBBA14] rounded-full border text-black"
            >
              {sortOrder === 'asc' ? 'Price: Low to High' : 'Price: High to Low'}
            </button>
            <div className="relative border h-12 sm:h-16 sm:w-44 items-center flex justify-center text-center p-4 border-black bg-green-50/10 text-red-900 rounded-full">
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M8.29395 1.3623H14.9774" stroke="black" strokeLinecap="round" />
                <path d="M5.28662 4.7041H15.3117" stroke="black" strokeLinecap="round" />
                <path d="M1.27637 8.0459L15.3115 8.0459" stroke="black" strokeLinecap="round" />
              </svg>
              <span className="hidden sm:block">
                <select
                  className="bg-transparent  outline-none text-center"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option className="p-2 " value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </span>
              <select
                className="absolute inset-0 w-full sm:hidden opacity-0 cursor-pointer"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className='flex justify-center py-6 w-full'>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-center items-center">
            {!loading && products.map((product) => (
              <TalkOfTown
                key={product._id}
                product={{
                  ...product,
                  discountprice: parseFloat(product.discountprice) || 0
                }}
              />
            ))}
          </div>
          {
            loading && (
              <div className="flex justify-center items-center h-screen">
                <Loader2 className="animate-spin text-green-500" size={64} />
              </div>
            )
          }
        </div>

        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="bg-[#B81F2E] text-white p-2 rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          <span>{page} / {totalPages}</span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="bg-[#B81F2E] text-white px-4 py-2 rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
      <Bannar index={1} />
    </>
  );
};

export default ProductListingPage;