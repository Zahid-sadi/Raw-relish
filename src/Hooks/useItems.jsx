import { useQuery } from "@tanstack/react-query";

const useItems = () => {
    const {
        data: menu = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: [ "menu" ],
        queryFn: async () => {
            const res = await fetch("http://localhost:3000/items");
            return res.json();
        },
    });

    return [ menu, loading, refetch ];
};

export default useItems;
