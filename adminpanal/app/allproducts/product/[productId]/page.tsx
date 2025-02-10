"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CustomerHome from "@/components/CustomerHome";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

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
  ratings: number;
  reviews: number;
  extraimages: string[];
  stock: number;
}

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const router = useRouter();
  const { toast } = useToast();
  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/Products/${productId}`);

        // console.log("API Response:", response.data); // Debugging

        const fetchedProduct = (response.data as { product: Product }).product;
        setProduct(fetchedProduct);
        setMainImage(fetchedProduct.images?.[0] || ""); // Set the first image as the main image
      } catch (err) {
        console.error("API Fetch Error:", err);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const handleDelete = async () => {
    toast({
      title: "deleteing"
    })
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_URL}/Products/${productId}` , {
        withCredentials : true
      });
      router.push("/allproducts");
      toast({
        title: "Success",
        description: "Product deleted successfully.",
      })
    } catch (error) {
      toast({
        "title": "Error",
        "variant": "destructive",
        "description": "Failed to delete try again.",
      })
      console.error("Error deleting banner:", error);
    }
  };

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

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
              <Image
                key={index}
                className="h-16 w-16 cursor-pointer"
                src={image}
                alt="product"
                width={500}
                height={500}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
          <Image src={mainImage} alt="product" width={500} height={500} />
        </div>
        <div className="flex flex-col items-start gap-5 justify-center w-1/2 h-full">
          <p className="font-bold text-5xl">{product.name}</p>
          <p className="text-lg">{product.description}</p>

          <div className="flex justify-start gap-2 items-center">
            <p className="text-xl">{product.ratings} / 5.0 <span className="text-gray-500">({product.reviews} Reviews)</span></p>
          </div>

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
          <div className="w-full gap-4 flex justify-between items-center">
            <button onClick={handleDelete} className="bg-red-600 text-white font-bold text-lg w-full h-16 px-4 py-2 rounded-3xl">Delete</button>
            <Link href={`/allproducts/editproduct/${productId}`} className="text-black border text-center font-bold text-lg w-full px-4 h-16 py-2 rounded-3xl">Edit</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-screen px-4 py-6 md:px-16 lg:px-32">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center h-auto md:h-[490px] gap-4">
          <div className="flex items-center justify-center w-full md:w-1/2 h-full">
            <Image className="object-cover w-full rounded-2xl h-auto max-h-[490px]" src={product.extraimages?.[0] || ""} alt="product" width={500} height={500} />
          </div>
          <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
            {product.extraimages?.slice(1, 3).map((img, index) => (
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