import FoodCard from '../../FoodCard/FoodCard';

const FoodMap = ({items}) => {
    // console.log(items);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-auto'>
            {
                items.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)
            }
        </div>
    );
};

export default FoodMap;