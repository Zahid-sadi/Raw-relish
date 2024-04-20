import { FcCustomerSupport } from "react-icons/fc";
import { MdDeliveryDining } from "react-icons/md";
import { TbChefHat } from "react-icons/tb";
import { IoFastFoodSharp } from "react-icons/io5";




const ServiceType = () => {
    return (
        <div className="h-fit max-w-4xl mx-auto p-12 m-12 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

            <div className="w-full h-72 bg-transparent border hover:border-yellow-900 border-blue-500 space-y-4 text-center items-center justify-center hover:bg-yellow-600  hover:duration-1000 group">
                <FcCustomerSupport className=" text-yellow-400 group-hover:text-black  h-16 w-16 text-center  my-5 mx-auto" />

                <h3 className="text-blue-400 group-hover:text-gray-100 text-xl lg:text-3xl font-semibold lg:font-bold "> 24/7 Open</h3>
                <p className="text-gray-400 group-hover:text-black p-5">we are always open Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, unde.</p>
            </div>
            <div className="w-full h-72 bg-transparent border hover:border-yellow-900 border-blue-500 space-y-4 text-center items-center justify-center hover:bg-yellow-600  hover:duration-1000 group">
                <MdDeliveryDining className=" text-yellow-400 group-hover:text-black h-16 w-16 text-center  my-5 mx-auto" />

                <h3 className="text-blue-400 group-hover:text-gray-100 text-xl lg:text-3xl font-semibold lg:font-bold "> Home Delivery</h3>
                <p className="text-gray-400 group-hover:text-black p-5">we are always open Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, unde.</p>
            </div>
            <div className="w-full h-72 bg-transparent border hover:border-yellow-900 border-blue-500 space-y-4 text-center items-center justify-center hover:bg-yellow-600  hover:duration-1000 group">
                <TbChefHat className=" text-yellow-400 group-hover:text-black  h-16 w-16 text-center  my-5 mx-auto" />

                <h3 className="text-blue-400 group-hover:text-gray-100 text-xl lg:text-3xl font-semibold lg:font-bold ">Master Chef </h3>
                <p className="text-gray-400 group-hover:text-black p-5">we are always open Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, unde.</p>
            </div>
            <div className="w-full h-72 bg-transparent border hover:border-yellow-900 border-blue-500 space-y-4 text-center items-center justify-center hover:bg-yellow-600  hover:duration-1000 group">
            <IoFastFoodSharp className=" text-yellow-400 group-hover:text-black  h-16 w-16 text-center  my-5 mx-auto" />

                <h3 className="text-blue-400 group-hover:text-gray-100 text-xl lg:text-3xl font-semibold lg:font-bold "> Safe Food </h3>
                <p className="text-gray-400 group-hover:text-black p-5">we are always open Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, unde.</p>
            </div>
            
        </div>
    );
};

export default ServiceType;
