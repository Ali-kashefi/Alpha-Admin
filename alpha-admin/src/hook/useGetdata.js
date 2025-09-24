"use client";

import { useQuery } from "@tanstack/react-query";



export default function useGetData({queryKey, queryAPI}) {
    const { error, isLoading, data } = useQuery({
        queryKey: [`${queryKey}`],
        queryFn: queryAPI,
        retry: 2,
        refetchOnWindowFocus: true,

    });


    return {
        data,

        error,
        isLoading,

    };
}

