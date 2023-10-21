import React from 'react';
import './Hero.css'
import img1 from '../../assets/bl-spooon.jpg'
// import oilDropImage from '../../assets/restaurant-food.jpg'

const Hero = () => {
    return (
        <div className="bg-cover h-1/4 ">
        
          <img src={img1} alt="Vegetable" className=" min-h-min w-full " />
        
      </div>
    );
      
};

export default Hero;