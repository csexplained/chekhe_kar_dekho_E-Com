"use client"
import React, { useState, useEffect } from "react";
import { fetchCategories, Category } from "@/utils/categoryFetch";
import { useParams, useRouter } from "next/navigation";
import axios, { isAxiosError } from "axios";
import { useToast } from "@/hooks/use-toast";
import exp from "constants";

interface ProductFormData {
    _id?: string;
    name: string;
    description: string;
    ingredients: string;
    benifits: string;
    storageInfo: string;
    price: string;
    ratings: number,
    reviews: number,
    discountprice: string;
    category: string;
    stock: string;
    images: File[];
    extraimages: File[];
    existingImages?: string[];
    existingExtraImages?: string[];
}

const MAX_MAIN_IMAGES = 7;
const MAX_EXTRA_IMAGES = 4;

const AddProductPage = () => {
    const [formData, setFormData] = useState<ProductFormData>({
        name: "",
        description: "",
        ingredients: "",
        benifits: "",
        storageInfo: "",
        price: "",
        discountprice: "",
        ratings: 0,
        reviews: 0,
        category: "",
        stock: "",
        images: [],
        extraimages: [],
        existingImages: [],
        existingExtraImages: []
    });

    const [categories, setCategories] = useState<Category[]>([]);
    const [formErrors, setFormErrors] = useState<Partial<Record<keyof ProductFormData, string>>>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);

    const router = useRouter();
    const { toast } = useToast();
    const { productId } = useParams();

    // Load categories
    useEffect(() => {
        const loadCategories = async () => {
            const fetchedCategories = await fetchCategories();
            setCategories(fetchedCategories);
        };

        loadCategories();
    }, []);

    // Fetch product details for editing
    useEffect(() => {
        if (!productId) return;

        const fetchProduct = async () => {
            try {
                setLoading(true);
                setIsEditMode(true);
                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/Products/${productId}`);
                const fetchedProduct = (response.data as { product: ProductFormData }).product;

                // Prepare form data with existing product details
                setFormData({
                    _id: fetchedProduct._id,
                    name: fetchedProduct.name,
                    description: fetchedProduct.description,
                    ingredients: fetchedProduct.ingredients,
                    benifits: fetchedProduct.benifits,
                    storageInfo: fetchedProduct.storageInfo,
                    price: fetchedProduct.price,
                    discountprice: fetchedProduct.discountprice,
                    ratings: fetchedProduct.ratings,
                    reviews: fetchedProduct.reviews,
                    category: fetchedProduct.category,
                    stock: fetchedProduct.stock,
                    images: [],
                    extraimages: [],
                    existingImages: fetchedProduct.existingImages || [],
                    existingExtraImages: fetchedProduct.existingExtraImages || []
                });
            } catch (err) {
                console.error("API Fetch Error:", err);
                setError("Failed to fetch product details.");
                toast({
                    title: "Error",
                    description: "Could not load product details",
                    variant: "destructive"
                });
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId, toast]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        // Clear any existing errors for this field
        if (formErrors[id as keyof ProductFormData]) {
            setFormErrors(prev => ({
                ...prev,
                [id]: "",
            }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, files } = e.target;
        if (files) {
            const fileArray = Array.from(files);
            const maxFiles = id === 'images' ? MAX_MAIN_IMAGES : MAX_EXTRA_IMAGES;

            if (fileArray.length > maxFiles) {
                setFormErrors(prev => ({
                    ...prev,
                    [id]: `Maximum ${maxFiles} ${id === 'images' ? 'main' : 'extra'} images allowed`
                }));
                e.target.value = '';
                return;
            }

            setFormData(prev => ({
                ...prev,
                [id]: fileArray
            }));

            // Clear any previous errors
            setFormErrors(prev => ({
                ...prev,
                [id]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors: Partial<Record<keyof ProductFormData, string>> = {};

        // Validate required fields
        const requiredFields: (keyof ProductFormData)[] = [
            'name', 'description', 'ingredients', 'benifits',
            'storageInfo', 'price', 'discountprice',
            'category', 'stock', "reviews", "ratings"
        ];

        requiredFields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            }
        });

        // Validate numeric fields
        const numericFields: (keyof ProductFormData)[] = ['price', 'ratings', 'reviews', 'stock'];
        numericFields.forEach(field => {
            if (formData[field] && isNaN(Number(formData[field]))) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be a number`;
            }
        });

        // Validate image uploads for new product
        if (!isEditMode && (!formData.images || formData.images.length === 0)) {
            newErrors.images = "Please upload at least one main image";
        } else if (formData.images.length > MAX_MAIN_IMAGES) {
            newErrors.images = `Maximum ${MAX_MAIN_IMAGES} main images allowed`;
        }

        if (formData.extraimages.length > MAX_EXTRA_IMAGES) {
            newErrors.extraimages = `Maximum ${MAX_EXTRA_IMAGES} extra images allowed`;
        }

        setFormErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setError("");

        const formDataToSubmit = new FormData();

        // Append all text fields
        (Object.keys(formData) as Array<keyof ProductFormData>)
            .filter(key => typeof formData[key] === 'string' && key !== 'existingImages' && key !== 'existingExtraImages')
            .forEach(key => {
                formDataToSubmit.append(key, formData[key] as string);
            });

        // Append new images
        formData.images.forEach(file => {
            formDataToSubmit.append('images', file);
        });

        // Append extra images
        formData.extraimages.forEach(file => {
            formDataToSubmit.append('extraimages', file);
        });

        // If in edit mode, append existing image URLs
        if (formData.existingImages && formData.existingImages.length > 0) {
            formData.existingImages.forEach(imageUrl => {
                formDataToSubmit.append('existingImages', imageUrl);
            });
        }

        // If in edit mode, append existing extra image URLs
        if (formData.existingExtraImages && formData.existingExtraImages.length > 0) {
            formData.existingExtraImages.forEach(imageUrl => {
                formDataToSubmit.append('existingExtraImages', imageUrl);
            });
        }

        try {
            const url = isEditMode
                ? `${process.env.NEXT_PUBLIC_URL}/Products/${productId}`
                : `${process.env.NEXT_PUBLIC_URL}/Products/`;

            const method = isEditMode ? 'put' : 'post';

            const response = await axios[method](
                url,
                formDataToSubmit,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                }
            );

            toast({
                title: isEditMode ? "Product Updated" : "Product Added",
                description: isEditMode
                    ? "Product has been successfully updated"
                    : "Product has been successfully created",
            });

            // Optionally redirect after successful submission
            router.push("/products");
        } catch (error: unknown) {
            console.error("API Error:", error);

            let errorMessage = "An unexpected error occurred. Please try again.";

            if (isAxiosError(error)) {
                errorMessage = error.response?.data?.message || "Failed to add/update product";
            }

            setError(errorMessage);

            toast({
                title: isEditMode ? "Product Update Error" : "Product Creation Error",
                description: errorMessage,
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#FFF9EA] min-h-screen flex justify-center items-center p-4">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {isEditMode ? "Edit Product" : "Add New Product"}
                </h2>

                {error && (
                    <div className="w-full p-3 bg-red-100 text-red-600 rounded-lg mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Product Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Product Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`mt-1 w-full p-3 border rounded-lg ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                            disabled={loading}
                        />
                        {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="description"
                            value={formData.description}
                            onChange={handleChange}
                            className={`mt-1 w-full p-3 border rounded-lg ${formErrors.description ? 'border-red-500' : 'border-gray-300'}`}
                            disabled={loading}
                            rows={3}
                        />
                        {formErrors.description && <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>}
                    </div>

                    {/* Ratings and Reviews */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="ratings" className="block text-sm font-medium text-gray-700">
                                Ratings <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="ratings"
                                value={formData.ratings}
                                onChange={handleChange}
                                className={`mt-1 w-full p-3 border rounded-lg ${formErrors.ratings ? 'border-red-500' : 'border-gray-300'}`}
                                disabled={loading}
                            />
                            {formErrors.ratings && <p className="text-red-500 text-sm mt-1">{formErrors.ratings}</p>}
                        </div>
                        <div>
                            <label htmlFor="reviews" className="block text-sm font-medium text-gray-700">
                                Reviews <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="reviews"
                                value={formData.reviews}
                                onChange={handleChange}
                                className={`mt-1 w-full p-3 border rounded-lg ${formErrors.reviews ? 'border-red-500' : 'border-gray-300'}`}
                                disabled={loading}
                            />
                            {formErrors.reviews && <p className="text-red-500 text-sm mt-1">{formErrors.reviews}</p>}
                        </div>
                    </div>

                    {/* Price and Discount Price */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="price"
                                value={formData.price}
                                onChange={handleChange}
                                className={`mt-1 w-full p-3 border rounded-lg ${formErrors.price ? 'border-red-500' : 'border-gray-300'}`}
                                disabled={loading}
                            />
                            {formErrors.price && <p className="text-red-500 text-sm mt-1">{formErrors.price}</p>}
                        </div>
                        <div>
                            <label htmlFor="discountprice" className="block text-sm font-medium text-gray-700">
                                Discount % <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="discountprice"
                                value={formData.discountprice}
                                onChange={handleChange}
                                className={`mt-1 w-full p-3 border rounded-lg ${formErrors.discountprice ? 'border-red-500' : 'border-gray-300'}`}
                                disabled={loading}
                            />
                            {formErrors.discountprice && <p className="text-red-500 text-sm mt-1">{formErrors.discountprice}</p>}
                        </div>
                    </div>

                    {/* Ingredients and Benefits */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
                                Ingredients <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="ingredients"
                                value={formData.ingredients}
                                onChange={handleChange}
                                className={`mt-1 w-full p-3 border rounded-lg ${formErrors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
                                disabled={loading}
                                rows={3}
                            />
                            {formErrors.ingredients && <p className="text-red-500 text-sm mt-1">{formErrors.ingredients}</p>}
                        </div>
                        <div>
                            <label htmlFor="benifits" className="block text-sm font-medium text-gray-700">
                                Benefits <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="benifits"
                                value={formData.benifits}
                                onChange={handleChange}
                                className={`mt-1 w-full p-3 border rounded-lg ${formErrors.benifits ? 'border-red-500' : 'border-gray-300'}`}
                                disabled={loading}
                                rows={3}
                            />
                            {formErrors.benifits && <p className="text-red-500 text-sm mt-1">{formErrors.benifits}</p>}
                        </div>
                    </div>

                    {/* Storage Info and Category */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="storageInfo" className="block text-sm font-medium text-gray-700">
                                Storage Info <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="storageInfo"
                                value={formData.storageInfo}
                                onChange={handleChange}
                                className={`mt-1 w-full p-3 border rounded-lg ${formErrors.storageInfo ? 'border-red-500' : 'border-gray-300'}`}
                                disabled={loading}
                            />
                            {formErrors.storageInfo && <p className="text-red-500 text-sm mt-1">{formErrors.storageInfo}</p>}
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="category"
                                value={formData.category}
                                onChange={handleChange}
                                className={`mt-1 w-full p-3 border rounded-lg ${formErrors.category ? 'border-red-500' : 'border-gray-300'}`}
                                disabled={loading}
                            >
                                <option value="">Select Category</option>
                                {categories?.map((category) => (
                                    <option key={category._id} value={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            {formErrors.category && <p className="text-red-500 text-sm mt-1">{formErrors.category}</p>}
                        </div>
                    </div>

                    {/* Stock */}
                    <div>
                        <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                            Stock <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className={`mt-1 w-full p-3 border rounded-lg ${formErrors.stock ? 'border-red-500' : 'border-gray-300'}`}
                            disabled={loading}
                        />
                        {formErrors.stock && <p className="text-red-500 text-sm mt-1">{formErrors.stock}</p>}
                    </div>

                    {/* Image Uploads */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                                Main Images <span className="text-red-500">*</span>
                                <span className="text-sm text-gray-500 ml-1">
                                    (Max {MAX_MAIN_IMAGES})
                                </span>
                            </label>
                            <input
                                type="file"
                                id="images"
                                multiple
                                accept="image/*"
                                onChange={handleFileChange}
                                className={`mt-1 w-full p-3 border rounded-lg ${formErrors.images ? 'border-red-500' : 'border-gray-300'}`}
                                disabled={loading}
                            />
                            {formErrors.images && <p className="text-red-500 text-sm mt-1">{formErrors.images}</p>}
                            <p className="text-sm text-gray-500 mt-1">
                                Selected: {formData.images.length} / {MAX_MAIN_IMAGES}
                            </p>
                        </div>
                        <div>
                            <label htmlFor="extraimages" className="block text-sm font-medium text-gray-700">
                                Extra Images
                                <span className="text-sm text-gray-500 ml-1">
                                    (Max {MAX_EXTRA_IMAGES})
                                </span>
                            </label>
                            <input
                                type="file"
                                id="extraimages"
                                multiple
                                accept="image/*"
                                onChange={handleFileChange}
                                className={`mt-1 w-full p-3 border rounded-lg ${formErrors.extraimages ? 'border-red-500' : 'border-gray-300'}`}
                                disabled={loading}
                            />
                            {formErrors.extraimages && <p className="text-red-500 text-sm mt-1">{formErrors.extraimages}</p>}
                            <p className="text-sm text-gray-500 mt-1">
                                Selected: {formData.extraimages.length} / {MAX_EXTRA_IMAGES}
                            </p>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-custom-red rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? (isEditMode ? "Updating Product..." : "Adding Product...") : (isEditMode ? "Update Product" : "Add Product")}
                    </button>
                </form>
            </div>
        </div>
    )
};
export default AddProductPage;
