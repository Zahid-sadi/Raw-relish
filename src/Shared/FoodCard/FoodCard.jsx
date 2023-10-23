
const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
            <img className="h-96 w-full " src={image} alt="foodItems" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}______________<small className="text-yellow-400 bg-slate-700 rounded-full p-2">$ {price} </small> </h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-outline">Take on table</button>
            </div>
        </div>
    </div>
    );
};

export default FoodCard;