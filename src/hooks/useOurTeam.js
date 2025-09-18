import { useQuery } from "@tanstack/react-query";
import { ourTeamSection } from "../services/dataServices";

export const useOurTeam = () => {
    return useQuery({
        queryKey: ["whyChooseUs"],
        queryFn: ourTeamSection,
        retry: 1, // Only retry once on failure
        staleTime: 5 * 60 * 1000, // 5 minutes
        onError: (error) => {
            console.error("Failed to fetch data:", error);
        },
    });
};
