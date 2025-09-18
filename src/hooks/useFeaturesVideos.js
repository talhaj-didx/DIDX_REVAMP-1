import { useQuery } from "@tanstack/react-query";
import { featuresSection, featuresVideosSection, heroSection } from "../services/dataServices";

export const useFeaturesVideos = () => {
    return useQuery({
        queryKey: ["videos"],
        queryFn: featuresVideosSection,
        retry: 1, // Only retry once on failure
        staleTime: 5 * 60 * 1000, // 5 minutes
        onError: (error) => {
            console.error("Failed to fetch data:", error);
        },
    });
};
