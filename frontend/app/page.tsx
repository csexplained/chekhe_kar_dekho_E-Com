"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/authSlice";
import { Loader2 } from "lucide-react";

import BestCombo from "@/components/BestCombo";
import Definately from "@/components/Definately";
import FansPage from "@/components/FansPage";
import CustomerHome from "@/components/CustomerHome";
import FeaturesBannar from "@/components/FeaturesBannar";
import HomePageCarousel from "@/components/CarousalHomepage";
import Category from "@/components/Categorybannars";
import TalksoftheTown from "@/components/TalksoftheTown";
import Bannar from "@/components/Bannar";
import BannarArry from "@/BannarDB";
import User from "@/types/user.type";

export default function Home() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true); // Added loading state

    async function getUserState() {
        try {
            const token = localStorage.getItem("refreshToken");
            if (!token) {
                setLoading(false);
                return;
            }

            const response = await axios.post<{ data: { data: User; refreshToken: string } }>(
                `${process.env.NEXT_PUBLIC_URL}/users/refreashtoken`,
                { refreshToken: token },
                { withCredentials: true }
            );

            console.log(response.data.data);
            const { data } = response.data.data;
            const refreshToken = response.data.data.refreshToken;
            localStorage.setItem("refreshToken", refreshToken);
            dispatch(setUser(data));
        } catch (error) {
            console.error("Error fetching user state:", error);
        } finally {
            setLoading(false); // Ensure loading is set to false after fetching
        }
    }

    useEffect(() => {
        getUserState();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="w-10 h-10 animate-spin text-green-700" />
            </div>
        );
    }

    return (
        <>
            <HomePageCarousel />
            <FeaturesBannar />
            <Category />
            <TalksoftheTown />
            <BestCombo />
            <Bannar imgLink={BannarArry[0]} />
            <Definately />
            <FansPage />
            <CustomerHome />
        </>
    );
}
