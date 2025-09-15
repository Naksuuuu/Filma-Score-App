import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes";
import { ThemeProvider } from "./context/Theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // fetch again after 5 minutes
      gcTime: 10 * 60 * 1000,
      retry: false,
      refetchOnWindowFocus: true,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={Routes} />
    </ThemeProvider>
  </QueryClientProvider>
);
