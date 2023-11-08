import React, { useState } from "react";

const FoodDisplay = ({ item }) => {
    // console.log("From Offered Food", offeredItem);
    const { name, image, price, recipe, newPrice } = item;
    // console.log(name, image, price, recipe);

    return (
        <div style={{borderRadius: ' 200px 200px 200px 20px'}}
            className="group h-72   w-full border-2 border-yellow-900 relative overflow-hidden hover:scale-110 duration-700 ">
            <div>
                <img src={image} alt="Offered Item" className="w-full h-72 overflow-hidden" />
            </div>

            <div  className=" bg-black bg-opacity-90   absolute hidden  text-white p-4  w-full h-full top-0   group-hover:block ">
                <div style={{borderRadius: ' 200px 200px 200px 20px'}} className="h-full w-full p-4 text-center flex flex-col justify-center content-center items-center  border-2 border-white delay-150  ">
                    <h2 className="text-3xl m-3 text-gray-200">__{name}__</h2>
                    <p className="">{recipe}</p>
                    <p className=" text-yellow-500 p-2 "> price $ {price} </p>
                </div>
            </div>
        </div>
    );
};

export default FoodDisplay;
