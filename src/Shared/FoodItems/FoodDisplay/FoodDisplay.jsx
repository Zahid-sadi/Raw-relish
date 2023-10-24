import React, {useState} from "react";

const FoodDisplay = ({item}) => {
    // console.log("From Offered Food", offeredItem);
    const {name, image, price, recipe, newPrice} = item;
    // console.log(name, image, price, recipe);

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className=" h-96 w-72 border-2 border-orange-600 flex flex-col justify-center align-items-center">
          <img 
            src={image}
            alt="Offered Item"
            className="w-full h-full object-cover "
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

     
    );
};

export default FoodDisplay;
