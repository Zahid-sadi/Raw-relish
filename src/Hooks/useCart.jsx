import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
const useCart = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("access-token");
    const [ axiosSecure ] = useAxiosSecure();

    const { data:cart = [], refetch } = useQuery({
        queryKey: [ "cart", user?.email ],
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:3000/cart?email=${user?.email}`, {
        //         headers: {
        //             authorization: ` Bearer ${token}`
        //         }
        //     });

        //     return response.json();
        // },
        
        queryFn: async () => {
            const response = await axiosSecure.get(`/cart?email=${user?.email}`);
            console.log('response from axios',response);
            return response.data;
        },
    });
    return [ cart, refetch ];
};

export default useCart;
