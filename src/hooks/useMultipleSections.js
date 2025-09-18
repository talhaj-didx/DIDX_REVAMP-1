import { useQuery } from "@tanstack/react-query";
import { getMultipleSections } from "../services/dataServices";

export const useMultipleSections = () => {
    return useQuery({
        queryKey: ["multipleSections"],
        queryFn: getMultipleSections,
        retry: 1, // Only retry once on failure
        staleTime: 5 * 60 * 1000, // 5 minutes
        onError: (error) => {
            console.error("Failed to fetch multiple sections:", error);
        },
    });
};
