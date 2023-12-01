import { Helmet } from "react-helmet";
import FoodDisplay from "../../../Shared/FoodItems/FoodDisplay/FoodDisplay";
import { Link } from "react-router-dom";

const MenuItemsCategory = ({ items, categoryHeadline, categoryDetails, bgPhoto }) => {
    // console.log(items);
    const itemShow = items.slice(0, 4);
    return (
        <div className="hero min-h-screen bg-fixed object-cover " style={{ backgroundImage: `url(${bgPhoto})` }}>
            <Helmet>
                <title>Food Items </title>
            </Helmet>

            <div className=" w-full lg:flex flex-row md:flex-row  p-10  ">
                <div className="md:w-full lg:w-1/3 xl:w-1/2 text-center flex flex-col items-center  justify-center p-4 md:p-10 lg:p-20 ">
                    <h1 className=" text-2xl md:text-4xl lg:text-7xl font-bold text-white border-spacing-1 border-white p-5 uppercase">
                        _____{categoryHeadline}_____
                    </h1>
                    <p className="p-6 text-white">{categoryDetails}</p>
                    <Link
                        className=" my-2 p-5 btn btn-outline btn-info md:btn-md lg:btn-wide  "
                        to={`/order/${categoryHeadline}`}
                    >
                        More ....
                    </Link>
                </div>
                <div className="md:w-full lg:w-2/3 xl:w-1/2 grid grid-flow-row md:grid-cols-2 gap-4 lg:gap-5 ">
                    {itemShow.map((item) => (
                        <FoodDisplay key={item._id} item={item}></FoodDisplay>
                    ))}
                </div>
            </div>
        </div>
        
    );
};

export default MenuItemsCategory;
