// src/api/queryClient.js
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,           // retry failed requests twice
      refetchOnWindowFocus: false, 
      staleTime: 1000 * 60, // 1 min caching
    },
  },
});

export default queryClient;
