import { useQuery } from "@tanstack/react-query";
import { TestimonialsSection } from "../services/dataServices";

export const useTestimonials = () => {
    return useQuery({
        queryKey: ["testimonials"],
        queryFn: TestimonialsSection,
        retry: 1, // Only retry once on failure
        staleTime: 5 * 60 * 1000, // 5 minutes
        onError: (error) => {
            console.error("Failed to fetch data:", error);
        },
    });
};
