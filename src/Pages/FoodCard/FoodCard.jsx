import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import useCart from "../../Hooks/useCart";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [ , refetch ] = useCart();

    const colors = [ "text-white", "text-red-800", "text-pink-500" ];
    const [ currentColorIndex, setCurrentColorIndex ] = useState(0);

    const handleClick = () => {
        // Calculate the next color index
        const nextIndex = (currentColorIndex + 1) % colors.length;
        setCurrentColorIndex(nextIndex);
    };

    const handleToCart = (item) => {
        // console.log("from handleToCart of foodCard", item);
        if (user && user.email) {
            const orderItem = { itemId: _id, name, price, image, email: user.email };

            fetch("https://raw-relish-server.vercel.app/cart", {
                // fetch("http://localhost:3000/cart", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(orderItem),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    refetch();
                }
            });
        } else {
            navigate("/login", { state: { from: location } });
        }
    };
    return (
        <div className="group card card-compact shadow-xl  sm:text-sm   h-[570px] hover:shadow-lg hover:shadow-blue-950">
            <figure>
                <img
                    className="h-96 w-full group-hover:scale-125 delay-100 duration-700 overflow-hidden shadow-2xl "
                    src={image}
                    alt="foodItems"
                />
            </figure>

            <div className="card-body   text-neutral-content  rounded-b-lg  group-hover:bg-slate-950 transition delay-300 duration-700">
                <div
                    onClick={handleClick}
                    className={`h-16 w-16 cursor-pointer -mt-10 z-20 flex gap-5 items-center content-center ${colors[currentColorIndex]}`}
                >
                    <FaHeart className="h-16 w-16" />
                </div>
                <h2 className="card-title text-md pl-5 my-2  text-yellow-600 capitalize group-hover:text-yellow-400 ">
                    {name} <p className="text-yellow-600 p-1 group-hover:text-yellow-400  text-end">$ {price} </p>{" "}
                </h2>
                <p className="px-5 group-hover:text-yellow-700 group-hover:hidden text-center">{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => {
                            handleToCart(item);
                        }}
                        className="btn btn-outline   group-hover:text-yellow-400 -mb-10 focus:bg-green-950 w-full  hidden group-hover:block transition delay-500 duration-700"
                    >
                        Take on table
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
