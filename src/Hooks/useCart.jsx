import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";




const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    // const token = localStorage.getItem("access-token");
    const [ axiosSecure ] = useAxiosSecure();

    const { data: cart = [], refetch  } = useQuery({

        queryKey: ["cart", user?.email],
        
        enabled: !loading,
        
        queryFn: async () => {
            const response = await axiosSecure.get(`/cart?email=${user?.email}`);
            // console.log('response from useCart axios', response);
        
            return response.data;
            
        
        },
        
    });
    return [ cart, refetch  ];
};

export default useCart;
