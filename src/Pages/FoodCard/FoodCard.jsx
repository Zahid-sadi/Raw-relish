import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router";

const FoodCard = ({item}) => {
    const { name, image, recipe, price } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleToCart = item => {
        console.log(item);
        if (user) {
            fetch('http://localhost:3000/cart')
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                    <h3></h3>
                }
            })
           
        }
        else {
            navigate('/login')
            }
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
            <img className="h-96 w-full hover:scale-125 duration-700 " src={image} alt="foodItems" />
        </figure>
        <div className="card-body bg-slate-950 text-gray-300   rounded-b-lg">
            <h2 className="card-title text-gray-100 capitalize">{name} <small className="text-yellow-700 p-1">_____________ $ {price} </small> </h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
                <button onClick={()=>{handleToCart(item)}} className="btn btn-outline text-yellow-700">Take on table</button>
            </div>
        </div>
    </div>
    );
};

export default FoodCard;