import { useQuery } from "@tanstack/react-query";

export const useApi = ({queryKey , queryFn}) => {
    return useQuery({
        queryKey: [queryKey],
        queryFn: queryFn,
        retry: 1, // Only retry once on failure
        staleTime: 5 * 60 * 1000, // 5 minutes
        onError: (error) => {
            console.error("Failed to fetch data:", error);
        },
    });
};
