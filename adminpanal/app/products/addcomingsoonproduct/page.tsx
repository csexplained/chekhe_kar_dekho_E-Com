"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { isAxiosError } from "axios";

interface ComingSoonProductFormData {
    name: string;
    images: File[];
}

const MAX_IMAGES = 2; // Limit for images

const AddComingSoonProductPage = () => {
    const [formData, setFormData] = useState<ComingSoonProductFormData>({
        name: "",
        images: [],
    });

    const [formErrors, setFormErrors] = useState<Partial<Record<keyof ComingSoonProductFormData, string>>>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();
    const { toast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        if (formErrors[id as keyof ComingSoonProductFormData]) {
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

            if (fileArray.length > MAX_IMAGES) {
                setFormErrors(prev => ({
                    ...prev,
                    [id]: `Maximum ${MAX_IMAGES} images allowed`
                }));
                // Reset the file input
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
        const newErrors: Partial<Record<keyof ComingSoonProductFormData, string>> = {};

        // Validate required fields
        if (!formData.name) {
            newErrors.name = "Name is required";
        }

        // Validate image uploads
        if (!formData.images || formData.images.length === 0) {
            newErrors.images = "Please upload at least one image";
        } else if (formData.images.length > MAX_IMAGES) {
            newErrors.images = `Maximum ${MAX_IMAGES} images allowed`;
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

        // Append name
        formDataToSubmit.append("name", formData.name);

        // Append images
        formData.images.forEach(file => {
            formDataToSubmit.append('images', file);
        });

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_URL}/comingsoonprodcuts/`, // Update the API endpoint
                formDataToSubmit,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                }
            );

            toast({
                title: "Product Added",
                description: "Coming Soon product has been successfully created",
            });

            router.push("/");
        } catch (error: unknown) {
            console.error("API Error:", error);

            let errorMessage = "An unexpected error occurred. Please try again.";

            if (isAxiosError(error)) {
                errorMessage = error.response?.data?.message || "Failed to add product";
            }

            setError(errorMessage);

            toast({
                title: "Product Creation Error",
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
                <h2 className="text-2xl font-bold mb-6 text-center">Add Coming Soon Product</h2>

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

                    {/* Image Upload */}
                    <div>
                        <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                            Images <span className="text-red-500">*</span>
                            <span className="text-sm text-gray-500 ml-1">
                                (Max {MAX_IMAGES})
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
                            Selected: {formData.images.length} / {MAX_IMAGES}
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-custom-red rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Adding Product..." : "Add Product"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddComingSoonProductPage;