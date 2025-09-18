import { useQuery } from "@tanstack/react-query";
import { featuresSection, heroSection } from "../services/dataServices";

export const useFeatures = () => {
    return useQuery({
        queryKey: ["features"],
        queryFn: featuresSection,
        retry: 1, // Only retry once on failure
        staleTime: 5 * 60 * 1000, // 5 minutes
        onError: (error) => {
            console.error("Failed to fetch data:", error);
        },
    });
};
