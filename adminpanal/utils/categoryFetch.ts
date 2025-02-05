import axios from 'axios';

export interface Category {
    _id: string;
    name: string;
    description?: string;
}

export const fetchCategories = async (): Promise<Category[]> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/Category/categories`, {
            withCredentials: true
        });
        console.log(response.data);
        return response.data as Category[];
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        return [];
    }
};

export const createCategory = async (categoryData: Omit<Category, '_id'>) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_URL}/categories`,
            categoryData,
            { withCredentials: true }
        );
        return response.data.category;
    } catch (error) {
        console.error('Failed to create category:', error);
        throw error;
    }
};