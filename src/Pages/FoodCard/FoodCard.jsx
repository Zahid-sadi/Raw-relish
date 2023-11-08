import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [ data, refetch ] = useCart();

    const handleToCart = (item) => {
        console.log(item);
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
                    <h3></h3>;
                }
            });
            refetch();
        } else {
            navigate("/login", { state: { from: location } });
        }
    };
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    className="h-96 w-full hover:scale-125 duration-700 overflow-hidden "
                    src={image}
                    alt="foodItems"
                />
            </figure>
            <div className="card-body  bg-slate-950 text-neutral-content  rounded-b-lg">
                <h2 className="card-title pl-5  text-yellow-600 capitalize">
                    {name} <small className="text-yellow-600 p-1"> _____________ $ {price} </small>{" "}
                </h2>
                <p className="px-5">{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => {
                            handleToCart(item);
                        }}
                        className="btn btn-outline text-blue-400"
                    >
                        Take on table
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
