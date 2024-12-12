import Hero from '../../Hero/Hero';
import About from '../About/About';
import Review from '../Review/Review';
import { Helmet } from 'react-helmet';
import OfferedFood from '../../../Shared/FoodItems/OfferedFood/OfferedFood';
import ServiceType from '../ServiceType/ServiceType';

const Home = () => {
    return (
        <div className=''>
            <Helmet> <title>Raw Relish Home</title> </Helmet>
            <Hero></Hero>
            <ServiceType></ServiceType>
            <About></About>
            <OfferedFood></OfferedFood>
            <Review></Review>
           
            
            
        </div>
    );
};

export default Home;