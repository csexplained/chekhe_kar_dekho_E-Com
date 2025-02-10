"use client";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <h1 className="text-2xl font-bold mb-6">Product Management</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <Link href="products/addproduct" className="px-6 w-full text-center py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                        Add Product
                    </Link>
                    <Link className="px-6 py-3 w-full text-center bg-amber-900 text-white rounded-lg shadow-md hover:bg-amber-800" href={"addCategory"}>
                        Add Category
                    </Link>
                    <Link href="/allproducts" className="px-6 py-3 text-center bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
                        View Products
                    </Link>
                    <Link href={"/products/addcomingsoonproduct"} className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600">
                        Add Coming Soon Product
                    </Link>
                    <Link href={"/addMainBannar"} className="px-6 py-3 bg-red-500 text-center text-white rounded-lg shadow-md hover:bg-red-600">
                        Add Main Banners
                    </Link>
                    <Link href={"/adddefinitelybannars"} className="px-6 py-3 bg-purple-500 text-center text-white rounded-lg shadow-md hover:bg-purple-600">
                        Add definetly Banners
                    </Link>
                    <Link href={"/addvariticalbannar"} className="px-6 py-3 bg-black text-center text-white rounded-lg shadow-md hover:bg-black">
                        Add Vertical Banners
                    </Link>
                    <Link href={"/addComboBanners"} className="px-6 py-3 bg-amber-500 text-center text-white rounded-lg shadow-md hover:bg-amber-600">
                        Add Combo Banners
                    </Link>
                </div>
            </div>
        </>
    );
}
