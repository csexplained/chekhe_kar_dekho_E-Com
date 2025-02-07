"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomerHome from "@/components/CustomerHome";

interface Product {
  _id: string;
  name: string;
  description: string;
  ingredients: string;
  benifits: string;
  storageInfo: string;
  price: number;
  discountprice?: number;
  images: string[];
  extraimages: string[];
  stock: number;
}

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/Products/${productId}`);

        // console.log("API Response:", response.data); // Debugging

        setProduct((response.data as { product: Product }).product);
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Product not found.</p>;

  // Calculate discounted price
  const discountedPrice =
    product.discountprice && product.price
      ? Math.round(product.price * (1 - product.discountprice / 100))
      : product.price;

  return (
    <>
      <div className="flex items-center justify-center py-12 px-32">
        <div className="flex items-center gap-6 justify-center w-1/2 h-full">
          <div className="gap-3 flex flex-col justify-center items-center h-full">
            {product.images?.slice(0, 6).map((image, index) => (
              <Image key={index} className="h-16 w-16" src={image} alt="product" width={500} height={500} />
            ))}
          </div>
          <Image src={product.images?.[0] || ""} alt="product" width={500} height={500} />
        </div>
        <div className="flex flex-col items-start gap-5 justify-center w-1/2 h-full">
          <p className="font-bold text-5xl">{product.name}</p>
          <p className="text-lg">{product.description}</p>
          {/* 
           <div className="flex justify-start gap-2 items-center">
            <p className="text-xl">4.5 / 5.0 <span className="text-gray-500">(2000 Reviews)</span></p>
          </div>
          */}
          <hr className="bg-gray-500 h-[2px] w-full" />
          <div className="flex justify-start gap-4 items-center">
            <p className="font-semibold text-3xl">₹ {discountedPrice}</p>
            {product.discountprice && product.discountprice > 0 && (
              <>
                <p className="text-2xl text-gray-500 line-through">₹ {product.price}</p>
                <div className="px-3 bg-red-100 text-red-500 py-1 rounded-xl">
                  <p>-{product.discountprice}%</p>
                </div>
              </>
            )}
          </div>
          <hr className="bg-gray-500 h-[2px] w-full" />
          <p>Select your Qty</p>
          <div className="flex justify-start gap-2 items-center">
            {/*
             <button className="bg-yellow-500 text-black font-semibold text-lg px-4 py-2 rounded-3xl">200 gm</button>
            <button className="bg-yellow-300 border border-yellow-500 text-black font-semibold text-lg px-4 py-2 rounded-3xl">500 gm</button>
            <button className="bg-yellow-500 text-black font-semibold text-lg px-4 py-2 rounded-3xl">1 kg</button> 
             */}
            <div className="flex items-center gap-2 rounded-2xl bg-gray-200">
              <button className="font-semibold text-lg px-4 py-2 rounded-xl">-</button>
              <p className="font-semibold text-lg px-4 py-2 rounded-xl">1</p>
              <button className="font-semibold text-lg px-4 py-2 rounded-xl">+</button>
            </div>
          </div>
          <hr className="bg-gray-500 h-[2px] w-full" />
          <div className="w-full gap-4 flex justify-between items-center">
            <button className="bg-red-600 text-white font-bold text-lg w-full h-16 px-4 py-2 rounded-3xl">Buy Now</button>
            <button className="text-black border font-bold text-lg w-full px-4 h-16 py-2 rounded-3xl">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-screen px-4 py-6 md:px-16 lg:px-32">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center h-auto md:h-[490px] gap-4">
          <div className="flex items-center justify-center w-full md:w-1/2 h-full">
            <Image className="object-cover w-full rounded-2xl h-auto max-h-[490px]" src={product.extraimages?.[2] || ""} alt="product" width={500} height={500} />
          </div>
          <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
            {product.extraimages?.slice(0, 1).map((img, index) => (
              <Image key={index} className="w-full rounded-2xl h-auto max-h-[240px] object-cover" src={img} alt="product" width={500} height={500} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen px-4 py-6 md:px-16 lg:px-32">
        <Accordion type="single" collapsible className="w-full flex flex-col justify-center items-center gap-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>{product.description}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Ingredients</AccordionTrigger>
            <AccordionContent>{product.ingredients}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Benefits</AccordionTrigger>
            <AccordionContent>{product.benifits}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Storage Info</AccordionTrigger>
            <AccordionContent>{product.storageInfo}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <CustomerHome />
    </>
  );
}
