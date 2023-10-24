import {Helmet} from "react-helmet";
import FoodDisplay from "../../../Shared/FoodItems/FoodDisplay/FoodDisplay";
import { Link } from "react-router-dom";

const MenuItemsCategory = ({items,categoryHeadline, categoryDetails}) => {
    console.log(items)
    return (
        <div>
            <Helmet>
                <title>Raw Relish ItemsCategory</title>
            </Helmet>
            <div className=" h-min p-10 flex">
                <div className="w-1/2 items-center justify-center p-60  ">
                    <h3 className=" text-4xl font-bold text-white text-center uppercase p-10  shadow-sm shadow-white ">
                        __________{categoryHeadline}__________
                    </h3>
                    <p className="text-white p-10 ">
                  {categoryDetails}
                    </p>
                    <button className="btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg text-indigo-400 p-5"> <Link to="/order">Order Now</Link></button>
                </div>
                <div className=" w-fit   p-10  grid grid-flow-row md:grid-cols-2 sm:grid-cols-1">
                    {
                        items.map((item) => (
                            <FoodDisplay key={item._id} item={item}></FoodDisplay>
                        ))}
                </div>
            </div>
            
        </div>
    );
};

export default MenuItemsCategory;
