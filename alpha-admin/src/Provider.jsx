"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

// The QueryClient is now defined outside the component.
// This ensures that it is created only once,
// independent of component re-renders.
const queryClient = new QueryClient();

/**
 * Provider component that sets up React Query's QueryClient for its children.
 * This ensures that all child components can access and use React Query hooks.
 *
 * @param {object} { children } - Props object containing children to be rendered.
 * @returns {JSX.Element} A QueryClientProvider wrapping the children.
 */
export default function Provider({ children }) {
  return (
    // Wrap the children with QueryClientProvider, passing the created queryClient.
    // This makes the queryClient available to all components in the subtree.
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}