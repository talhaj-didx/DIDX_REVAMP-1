// src/hooks/useData.js
import { useQuery } from "@tanstack/react-query";
import { heroSection } from "../services/dataServices";

export const useData = () => {
    return useQuery({
        queryKey: ["hero"],
        queryFn: heroSection,
        retry: 1, // Only retry once on failure
        staleTime: 5 * 60 * 1000, // 5 minutes
        onError: (error) => {
            console.error("Failed to fetch data:", error);
        },
    });
};
