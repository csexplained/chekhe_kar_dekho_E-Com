import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
interface TalkOfTownProps {
  product: {
    _id: string;
    name: string;
    description: string;
    price: number;
    discountprice: number;
    images: string[];
    stock: number;
  };
}

const TalkOfTown = ({ product }: TalkOfTownProps) => {

  const discountedPrice = product.discountprice && product.price
    ? Math.round(product.price * (1 - product.discountprice / 100))
    : product.price;

  return (
    <Link href={`/shop/product/${product._id}`} className="border-[#B81F2E] border rounded-3xl bg-white shadow-xl w-full h-full max-w-[310px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] mx-auto flex flex-col">
      <div className="relative w-full flex-grow">
        <div className="flex mt-2 justify-center mx-auto">
          <Image
            src={product.images[0]}
            alt="product image"
            width={200}
            height={200}
            className="w-full rounded-xl max-h-[270px] object-contain"
          />
        </div>
        {product.discountprice > 0 && (
          <div className='absolute w-full flex justify-between items-center px-4 -top-1 right-0'>
            <span className="text-center flex justify-center items-center my-1 mx-4 w-4 text-white text-[10px] font-semibold rounded-full">
              Save {product.discountprice}%
            </span>
          </div>
        )}
      </div>

      {/* Product Info Section */}
      <div className="px-3 mt-auto pb-4">
        <h5 className="text-xl h-8 overflow-hidden font-semibold text-[#000000]">
          {product.name}
        </h5>
        {/* Price Section */}
        <div className="flex px-1 gap-3 justify-between items-center">
          <div className="flex justify-start items-end">
            <span className="text-3xl font-bold font-poppins text-gray-900 dark:text-white mr-2">
              <span className='text-2xl text-gray-900'>₹</span>{discountedPrice.toLocaleString()}
            </span>
            {product.discountprice > 0 && (
              <span className="text-lg line-through font-medium text-gray-900">
                <span className='text-sm'>₹</span>{product.price}
              </span>
            )}
          </div>
          <button className="bg-custom-red font-poppins text-lg ml-2 w-[140px] text-white py-2 px-4 rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default TalkOfTown;