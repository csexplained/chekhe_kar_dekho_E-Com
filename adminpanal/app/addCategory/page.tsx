"use client"
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { isAxiosError } from "axios";

interface CategoryFormData {
    name: string;
}

const AddCategoryPage = () => {
    const [formData, setFormData] = useState<CategoryFormData>({
        name: "",
    });

    const [formErrors, setFormErrors] = useState<Partial<Record<keyof CategoryFormData, string>>>({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();
    const { toast } = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        if (formErrors[id as keyof CategoryFormData]) {
            setFormErrors(prev => ({
                ...prev,
                [id]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors: Partial<Record<keyof CategoryFormData, string>> = {};

        // Validate required fields
        if (!formData.name) {
            newErrors.name = "Category name is required";
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

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_URL}/Category/categories`,
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            toast({
                title: "Category Added",
                description: "Category has been successfully created",
            });

            router.push("/");
        } catch (error: unknown) {
            console.error("API Error:", error);

            let errorMessage = "An unexpected error occurred. Please try again.";

            if (isAxiosError(error)) {
                errorMessage = error.response?.data?.message || "Failed to add category";
            }

            setError(errorMessage);

            toast({
                title: "Category Creation Error",
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
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Category</h2>

                {error && (
                    <div className="w-full p-3 bg-red-100 text-red-600 rounded-lg mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Category Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Category Name <span className="text-red-500">*</span>
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-custom-red rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Adding Category..." : "Add Category"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCategoryPage;