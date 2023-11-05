import React, { useRef, useState } from 'react';

const CategoryHero = ({ videoSource, heading }) => {
  // console.log(heading);
  
  
    return (
      <div className="w-full h-fit p-20 pb-0  bg-gradient-to-r from-slate-900 to-black">
        <h2 className='text-white h-20 mt-10 text-center font-bold text-4xl'>__{heading}__</h2>
        <video
        className='w-screen object-cover h-[600px] border-2 border-b-0 border-yellow-900 '
        muted
          src={videoSource}
          loop={true}
          autoPlay
        
        />
        
      </div>
    );
};

export default CategoryHero;
