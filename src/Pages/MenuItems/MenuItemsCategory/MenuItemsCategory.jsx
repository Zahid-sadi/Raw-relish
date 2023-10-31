import {Helmet} from "react-helmet";
import FoodDisplay from "../../../Shared/FoodItems/FoodDisplay/FoodDisplay";
import { Link } from "react-router-dom";

const MenuItemsCategory = ({items, categoryHeadline, categoryDetails}) => {
    console.log(items);
    return (
       
        <div className="hero min-h-screen ">
            {/* <Helmet><title>Food Items Menu</title></Helmet> */}
            <div className="hero-content w-4/5 flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2">
                    <h1 className="text-5xl font-bold text-white border-spacing-1 border-white">________{categoryHeadline}__________</h1>
                    <p className="p-6 text-white">
                       {categoryDetails}
                    </p>
                    <Link className="text-white " to={`/order/${categoryHeadline}`}>Take</Link>
                </div>
                <div className="card flex-shrink-0   w-1/2 max-w-sm grid grid-flow-row md:grid-cols-2 sm:grid-cols-1">
                    {
                        items.map(item => <FoodDisplay key={item._id} item={item}></FoodDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MenuItemsCategory;
