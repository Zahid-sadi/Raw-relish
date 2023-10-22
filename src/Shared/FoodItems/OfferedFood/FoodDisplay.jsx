import React, {useState} from "react";
import './OfferdFood.css'

const FoodDisplay = ({offeredItem}) => {
    console.log("From Offered Food", offeredItem);
    const {name, image, price, recipe, newPrice} = offeredItem;
    // console.log(name, image, price, recipe);

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className=" h-72 w-72 border-2 border-orange-600 flex flex-col justify-center align-items-center">
          <img 
            src={image}
            alt="Offered Item"
            className="w-full h-72"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          {isHovered && (
            <div className=" bg-black bg-opacity-80 text-white p-4">
              <h2 className="text-2xl">{name}</h2>
              <p className="">{recipe}</p>
              <p className="line-through  text-red-500 ">Before $ {price} </p>
              <p className="text-yellow-500"> Now : $  {newPrice}</p>
            </div>

 
          )}

        </div>

        // <div className="">
        //     <img src={image} alt="Offered Item" className="offer" />
        //     {/* <div className="  flex flex-col justify-center items-center bg-black bg-opacity-80 text-white p-4">
        //         <h2 className="text-2xl">{name}</h2>
        //         <p className="">{recipe}</p>
        //         <p className="line-through  text-red-500 ">Before $ {price} </p>
        //         <p className="text-yellow-500"> Now : $ {newPrice}</p>
        //     </div> */}
        // </div>
    );
};

export default FoodDisplay;
