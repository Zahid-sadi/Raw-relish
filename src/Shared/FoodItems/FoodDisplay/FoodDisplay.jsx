import { useState } from "react";

const FoodDisplay = ({ item }) => {
    // console.log("From Offered Food", offeredItem);
    const { name, image, price, recipe, newPrice } = item;


  
    // console.log(name, image, price, recipe);

    return (
        <div className="group h-72  relative overflow-hidden hover:scale-110 duration-700 mx-1 ">
            <div>
                <img src={image} alt="Offered Item" className="w-full h-72  object-cover " />
            </div>

            <div className="  absolute hidden  text-white p-4  w-full h-full top-0   group-hover:block  ">
                <div
                    style={{ borderRadius: " 300px 200px 200px 20px" }}
                    className=" bg-black bg-opacity-70  h-full w-full p-5 text-center flex flex-col justify-center content-center items-center  border-2 border-white delay-150  "
                >
                    <h2 className=" m-3 lg:text-lg font-semibold md:text-md  sm:tex-sm  text-gray-200">__{name}__</h2>
                    <p className="p-3 hidden md:hidden sm:block ">{recipe}</p>
                    <p className=" text-yellow-500 p-2 font-medium "> price $ {price} </p>
                    {
                        newPrice && (
                            <p className="font-bold text-yellow-300 text-lg">New Price: {newPrice}</p>
                        )}
                    
                </div>
            </div>
        </div>
    );
};

export default FoodDisplay;
