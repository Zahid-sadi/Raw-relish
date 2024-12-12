import FoodDisplay from "../../../Shared/FoodItems/FoodDisplay/FoodDisplay";
import { Link } from "react-router-dom";


const MenuItemsCategory = ({ items, categoryHeadline, categoryDetails, bgPhoto }) => {
    // console.log(items);
    const itemShow = items.slice(0, 4);
    return (
        <div className="hero min-h-screen bg-fixed object-cover" style={{ backgroundImage: `url(${bgPhoto})` }}>
          

            <div className=" w-full flex flex-col lg:flex-row p-10 ">
                <div className="w-full lg:w-1/2  text-justify flex flex-col items-center  justify-center space-y-5 p-4 md:p-10 lg:p-20  mb-8">
                    <h1 className="text-xl md:text-4xl lg:text-7xl text-center font-bold text-white  p-5 capitalize ">
                        {categoryHeadline}
                    </h1>

                    
                    
                    <p className="p-6 text-white">{categoryDetails}</p>
                    <Link
                        className=" my-2  btn btn-outline btn-info md:btn-md lg:btn-wide capitalize "
                        to={`/order/${categoryHeadline}`}
                    >
                        More Items
                    </Link>
                </div>
                <div className="w-full lg:w-1/2 grid grid-col-1 lg:grid-cols-2  gap-4 lg:gap-5 p-4 md:p-10 lg:p-20 ">
                    {itemShow.map((item) => (
                        <FoodDisplay key={item._id} item={item}></FoodDisplay>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuItemsCategory;
