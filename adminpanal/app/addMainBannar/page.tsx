"use client"
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { isAxiosError } from "axios";

const AddBannerPage = () => {
    const [image, setImage] = useState<File | null>(null);
    const [altText, setAltText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();
    const { toast } = useToast();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!image) {
            setError("Please select an image");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("altText", altText);

            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_URL}/banners/main`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    withCredentials: true
                }
            );

            toast({
                title: "Banner Added",
                description: "Banner has been successfully uploaded",
            });

            router.push("/");
        } catch (error: unknown) {
            console.error("API Error:", error);

            let errorMessage = "An unexpected error occurred. Please try again.";

            if (isAxiosError(error)) {
                errorMessage = error.response?.data?.message || "Failed to add banner";
            }

            setError(errorMessage);

            toast({
                title: "Banner Upload Error",
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
                <h2 className="text-2xl font-bold mb-6 text-center">Add New Banner</h2>

                {error && (
                    <div className="w-full p-3 bg-red-100 text-red-600 rounded-lg mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Banner Image */}
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Upload Banner Image <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-1 w-full p-3 border rounded-lg border-gray-300"
                            disabled={loading}
                        />
                    </div>

                    {/* Alt Text */}
                    <div>
                        <label htmlFor="altText" className="block text-sm font-medium text-gray-700">
                            Alt Text (Optional)
                        </label>
                        <input
                            type="text"
                            id="altText"
                            value={altText}
                            onChange={(e) => setAltText(e.target.value)}
                            className="mt-1 w-full p-3 border rounded-lg border-gray-300"
                            disabled={loading}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-custom-red rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Uploading Banner..." : "Add Banner"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBannerPage;
