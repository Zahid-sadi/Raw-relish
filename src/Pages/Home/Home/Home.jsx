import Hero from '../../Hero/Hero';
import Category from '../../CategorySlide/CategorySlide';
import About from '../About/About';
import Review from '../Review/Review';
import { Helmet } from 'react-helmet';
import OfferedFood from '../../../Shared/FoodItems/OfferedFood/OfferedFood';

const Home = () => {
    return (
        <div className='bg-slate-800 '>
            <Helmet> <title>Raw Relish Home</title> </Helmet>
            <Hero></Hero>
            <Category></Category>
            <About></About>
            <OfferedFood></OfferedFood>
            <Review></Review>
           
            
            
        </div>
    );
};

export default Home;