import Hero from '../../Hero/Hero';
import Category from '../../Category/Category';
import About from '../About/About';
import FoodMenu from '../../../Shared/FoodItems/FoodMenu/FoodMenu';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='bg-slate-800 '>
            <Hero></Hero>
            <Category></Category>
            <About></About>
            <FoodMenu></FoodMenu>
            <Review></Review>
           
            
            
        </div>
    );
};

export default Home;