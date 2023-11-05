import {Helmet} from "react-helmet";
import FoodDisplay from "../../../Shared/FoodItems/FoodDisplay/FoodDisplay";
import { Link } from "react-router-dom";
import img from '../../../assets/food10.jpg'

const MenuItemsCategory = ({items, categoryHeadline, categoryDetails, bgPhoto}) => {
    // console.log(items);
    const itemShow = items.slice(0,4)
    return (
       
        <div   className="hero min-h-screen bg-fixed object-cover "
            style={{ backgroundImage: `url(${bgPhoto})` }}>
            
            <Helmet><title>Food Items Menu</title></Helmet>
            
            <div className=" w-full lg:flex flex-row p-20  ">
                <div className="text-center w-1/2  flex flex-col items-center  justify-center mb-4 p-10 ">
                    <h1 className="md:text-2xl lg:text-7xl font-bold text-white border-spacing-1 border-white  uppercase">_____{categoryHeadline}_____</h1>
                    <p className="p-6 text-white">
                       {categoryDetails}
                    </p>
                    <Link className="btn btn-outline btn-info md:btn-md lg:btn-wide " to={`/order/${categoryHeadline}`}>More...</Link>
                </div>
                <div className="w-1/2 grid grid-flow-row md:grid-cols-2 sm:grid-cols-1">
                    {
                        itemShow.map(item => <FoodDisplay key={item._id} item={item}></FoodDisplay>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MenuItemsCategory;
