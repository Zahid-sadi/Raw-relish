import React from 'react';
import Hero from '../../Hero/Hero';
import Category from '../../Category/Category';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <h1>this is home page</h1>
            <Category></Category>
            <About></About>
            
            
        </div>
    );
};

export default Home;