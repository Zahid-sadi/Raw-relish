import Hero from '../../Hero/Hero';
import Category from '../../Category/Category';
import About from '../About/About';
import FoodMenu from '../../../Shared/FoodItems/FoodMenu/FoodMenu';
import Review from '../Review/Review';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='bg-slate-800 '>
            <Helmet> <title>Raw Relish Home</title> </Helmet>
            <Hero></Hero>
            <Category></Category>
            <About></About>
            <FoodMenu></FoodMenu>
            <Review></Review>
           
            
            
        </div>
    );
};

export default Home;