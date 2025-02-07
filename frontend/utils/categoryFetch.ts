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
