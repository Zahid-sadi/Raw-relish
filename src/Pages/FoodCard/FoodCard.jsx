import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [ , refetch ] = useCart();

    const handleToCart = (item) => {
        console.log("from handleToCart of foodCard", item);
        if (user && user.email) {
            const orderItem = { itemId: _id, name, price, image, email: user.email };

            fetch("http://localhost:3000/cart", {
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
        <div className="group card card-compact sm:text-sm   h-[570px] ">
            <figure>
                <img
                    className="h-96 w-full group-hover:scale-125 delay-100 duration-700 overflow-hidden shadow-2xl "
                    src={image}
                    alt="foodItems"
                />
            </figure>
            <div className="card-body h-fit text-neutral-content  rounded-b-lg md:h-fit sm:h-fit  group-hover:bg-slate-950 transition delay-300 duration-700">
                <h2 className="card-title pl-5  text-yellow-600 capitalize group-hover:text-yellow-400">
                    {name}{" "}
                    <p className="text-yellow-600 p-1  group-hover:text-yellow-400 text-end px-5  ">$ {price} </p>{" "}
                </h2>
                <p className="px-5 group-hover:text-blue-300 text-center">{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => { 
                            handleToCart(item);
                        }}
                        className="btn btn-outline  text-blue-400 group-hover:text-yellow-400 hidden group-hover:block transition delay-500 duration-700"
                    >
                        Take on table
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
