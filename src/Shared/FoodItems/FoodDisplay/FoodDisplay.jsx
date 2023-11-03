import React, { useState } from "react";

const FoodDisplay = ({ item }) => {
    // console.log("From Offered Food", offeredItem);
    const { name, image, price, recipe, newPrice } = item;
    // console.log(name, image, price, recipe);

    const [ isHovered, setIsHovered ] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="h-72 w-full border-2 border-orange-600 flex flex-col justify-center align-items-center hover:display:none "
        >
        <img  src={image} alt="Offered Item" className="w-full h-full overflow-hidden  " />
        
            {isHovered && (
                <div className=" bg-black bg-opacity-80 text-white p-4 object-cover">
                    <h2 className="text-2xl">{name}</h2>
                    <p className="">{recipe}</p>
                    <p className=" text-yellow-500 "> price $ {price} </p>
                </div>
            )}
        </div>
    );
};

export default FoodDisplay;
