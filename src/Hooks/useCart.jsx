import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const useCart = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data} = useQuery({
        queryKey: [ 'cart', user?.email ],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/cart?email=${user?.email}`);
        
            return response.json()
            
        },
        
        
    });
    return[data,  refetch]
};

export default useCart;
