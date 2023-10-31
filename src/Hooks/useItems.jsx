import { useEffect, useState } from "react";

const useItems = () => {

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("http://localhost:3000/items")
        .then((res) => res.json())
        .then((data) => {
            setMenu(data);
            setLoading(false)
    // console.log(data ,'from menu');

        });
    }, []);

    return [menu, loading]
    
};


export default useItems;