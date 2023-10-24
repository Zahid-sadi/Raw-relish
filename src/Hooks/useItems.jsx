import { useEffect, useState } from "react";

const useItems = () => {

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
            setMenu(data);
            setLoading(false)
    console.log(data ,'from menu');

        });
    }, []);

    return [menu, loading]
    
};


export default useItems;