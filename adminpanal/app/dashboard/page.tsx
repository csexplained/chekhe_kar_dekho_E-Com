"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <h1 className="text-2xl font-bold mb-6">Product Management</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <Link href="products/addproduct" className="px-6 w-full text-center py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                        Add Product
                    </Link>
                    <Link className="px-6 py-3 w-full text-center bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600" href={"addCategory"}>
                        Add Category
                    </Link>
                    <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
                        View Products
                    </button>
                    <Link href={"/products/addcomingsoonproduct"} className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600">
                        Add Coming Soon Product
                    </Link>
                    <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
                        Add Banners
                    </button>
                </div>
            </div>
        </>
    );
}
