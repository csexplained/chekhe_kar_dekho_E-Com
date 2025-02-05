"use client"

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CustomerHome from "@/components/CustomerHome";

export default function ProductPage({ params }: { params: { productId: string } }) {
  return (
    <>
      <div className="flex items-center justify-center py-12 px-32">
        <div className="flex items-center gap-6 justify-center  w-1/2 h-full">
          <div className="gap-3 flex flex-col justify-center items-center h-full" >
            <Image
              className="h-16 w-16"
              src={`https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png`}
              alt="product"
              width={500}
              height={500}
            />
            <Image
              className="h-16 w-16"
              src={`https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png`}
              alt="product"
              width={500}
              height={500}
            />
            <Image
              className="h-16 w-16"
              src={`https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png`}
              alt="product"
              width={500}
              height={500}
            />
            <Image
              className="h-16 w-16"
              src={`https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png`}
              alt="product"
              width={500}
              height={500}
            />
            <Image
              className="h-16 w-16"
              src={`https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png`}
              alt="product"
              width={500}
              height={500}
            />
            <Image
              className="h-16 w-16"
              src={`https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png`}
              alt="product"
              width={500}
              height={500}
            />
          </div>
          <Image
            className=""
            src={`https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png`}
            alt="product"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col  items-start gap-5 justify-center w-1/2 h-full">
          <p className="font-inter font-bold text-5xl ">Hand Made Pickel</p>
          <p className="font-inter font-normal text-lg ">Authentic Flavors Crafted with Love and Traditional Recipes</p>
          <div className="flex justify-start gap-2 items-center">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.01627 0.628906L8.95095 4.82027L13.5108 5.37629L10.1466 8.52271L11.0301 13.0577L7.01627 10.8109L3.00242 13.0577L3.8859 8.52271L0.521724 5.37629L5.0816 4.82027L7.01627 0.628906Z" fill="#FFA500" />
              </svg>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.01627 0.628906L8.95095 4.82027L13.5108 5.37629L10.1466 8.52271L11.0301 13.0577L7.01627 10.8109L3.00242 13.0577L3.8859 8.52271L0.521724 5.37629L5.0816 4.82027L7.01627 0.628906Z" fill="#FFA500" />
              </svg>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.01627 0.628906L8.95095 4.82027L13.5108 5.37629L10.1466 8.52271L11.0301 13.0577L7.01627 10.8109L3.00242 13.0577L3.8859 8.52271L0.521724 5.37629L5.0816 4.82027L7.01627 0.628906Z" fill="#FFA500" />
              </svg>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.01627 0.628906L8.95095 4.82027L13.5108 5.37629L10.1466 8.52271L11.0301 13.0577L7.01627 10.8109L3.00242 13.0577L3.8859 8.52271L0.521724 5.37629L5.0816 4.82027L7.01627 0.628906Z" fill="#FFA500" />
              </svg>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.01627 0.628906L8.95095 4.82027L13.5108 5.37629L10.1466 8.52271L11.0301 13.0577L7.01627 10.8109L3.00242 13.0577L3.8859 8.52271L0.521724 5.37629L5.0816 4.82027L7.01627 0.628906Z" fill="#FFA500" />
              </svg>
            </div>
            <p className="font-inter font-medium text-xl  ">4.5 / 5.0 <span className="text-[#A2A3B1]" >(2000 Reviews)</span></p>
          </div>
          <hr className="bg-[#A2A3B1] h-[2px] w-full " />
          <div className="flex justify-start gap-4 items-center">
            <p className="font-inter font-semibold text-3xl  ">₹ 200</p>
            <p className="font-inter font-normal text-2xl  text-[#A2A3B1] line-through">₹ 300</p>
            <div className="px-3 bg-[#FFEAEA] text-red-500 py-1 rounded-xl">
              <p className="">-40%</p>
            </div>
          </div>
          <hr className="bg-[#A2A3B1] h-[2px] w-full " />
          <p>Select your Weight</p>
          <div className="flex justify-start gap-2 items-center">
            <div className="flex items-center gap-2">
              <button className="bg-[#FBBA14] text-black font-inter font-semibold text-lg  px-4 py-2 rounded-3xl">200 gm</button>
              <button className="bg-[#FBBA1440] border border-[#FBBA14] text-black font-inter font-semibold text-lg  px-4 py-2 rounded-3xl">500 gm</button>
              <button className="bg-[#FBBA14] text-black font-inter font-semibold text-lg  px-4 py-2 rounded-3xl">1 kg</button>
              <div className="flex items-center gap-2 rounded-2xl bg-[#F0F0F0]">
                <button className="font-inter font-semibold text-lg  px-4 py-2 rounded-xl">-</button>
                <p className="font-inter font-semibold text-lg  px-4 py-2 rounded-xl">1</p>
                <button className="font-inter font-semibold text-lg  px-4 py-2 rounded-xl">+</button>
              </div>
            </div>
          </div>
          <hr className="bg-[#A2A3B1] h-[2px] w-full " />
          <div className="w-full gap-4 flex justify-between items-center">
            <button className="bg-[#B81F2E] text-white font-inter font-bold text-lg w-full h-16 px-4 py-2 rounded-3xl">Buy Now</button>
            <button className=" text-black border  font-inter font-bold text-lg  w-full px-4 h-16 py-2 rounded-3xl">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-screen px-4 py-6 md:px-16 lg:px-32">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center h-auto md:h-[490px] gap-4">
          {/* Left Side */}
          <div className="flex items-center justify-center w-full md:w-1/2 h-full">
            <Image
              className="object-cover w-full rounded-2xl h-auto max-h-[490px]"
              src="https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png"
              alt="product"
              width={500}
              height={500}
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center gap-4 w-full md:w-1/2">
            <Image
              className="w-full rounded-2xl h-auto max-h-[240px] object-cover"
              src="https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png"
              alt="product"
              width={500}
              height={500}
            />

            <div className="flex gap-4 w-full">
              <Image
                className="w-1/2 h-auto rounded-2xl max-h-[240px] object-cover"
                src="https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png"
                alt="product"
                width={500}
                height={500}
              />
              <Image
                className="w-1/2 h-auto rounded-2xl max-h-[240px] object-cover"
                src="https://res.cloudinary.com/dxae5w6hn/image/upload/v1738661810/awjdlmyqfeemiyrhut2b.png"
                alt="product"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto max-w-screen px-4 py-6 md:px-16 lg:px-32">
        <Accordion type="single" collapsible className="w-full flex flex-col justify-center items-center gap-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Ingeredients</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Benefits</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Storage Info</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
     
        <CustomerHome/>
      
    </>
  );
}
