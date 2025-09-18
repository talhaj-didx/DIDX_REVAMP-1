import { useQuery } from "@tanstack/react-query";
import { whyChooseUsSection } from "../services/dataServices";

export const useWhyChooseUs = () => {
    return useQuery({
        queryKey: ["whyChooseUs"],
        queryFn: whyChooseUsSection,
        retry: 1, // Only retry once on failure
        staleTime: 5 * 60 * 1000, // 5 minutes
        onError: (error) => {
            console.error("Failed to fetch data:", error);
        },
    });
};
