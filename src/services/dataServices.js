import axiosInstance from "../api/axiosInstance";
import { fallbackHeroData, fallbackHeaderData, fallbackFeaturesData, fallbackUsersData } from "./fallbackData";

// Generic data fetching functions
export const fetchData = async (endpoint) => {

    try {
        const res = await axiosInstance.get(endpoint);
         return res.data;
    } catch (error) {

        console.error(`Error fetching data from ${endpoint}:`, error);

    }
};


export const heroSection = async () => {
    return await fetchData("/sections/type/hero");
};

export const featuresSection = async () => {
    return await fetchData("/sections/type/features");
};

export const featuresVideosSection = async () => {
    return await fetchData("/sections/type/videos");
};

export const whyChooseUsSection = async () => {
    return await fetchData("/sections/type/why_choose_us");
};

export const TestimonialsSection = async () => {
    return await fetchData("/sections/type/testimonials");
};

export const ourTeamSection = async () => {
    return await fetchData("/sections/type/our_team");
};

