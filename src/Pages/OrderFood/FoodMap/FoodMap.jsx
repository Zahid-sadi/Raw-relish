import FoodCard from "../../FoodCard/FoodCard";

const FoodMap = ({ items }) => {
    // console.log(items);
    return (
        <div className=" max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-28  ">
            {items.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
            ))}
        </div>
    );
};

export default FoodMap;
