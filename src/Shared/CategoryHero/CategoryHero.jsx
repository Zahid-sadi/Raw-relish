import React, { useRef, useState } from 'react';

const CategoryHero = ({ videoSource, heading }) => {
  // console.log(heading);
  
  
    return (
      <div className="w-full h-fit p-20 pb-0  bg-gradient-to-r from-slate-950 to-lime-950 hover:z-10">
        <h2 className='text-white h-28  mt-10 p-6 text-center font-bold text-4xl bg-gradient-to-r bg-slate-950 from-lime-950 capitalize z-20 '>__{heading}__</h2>
        <video
        className='w-screen object-cover h-[600px]  '
        muted
          src={videoSource}
          loop={true}
          autoPlay
        
        />
        
      </div>
    );
};

export default CategoryHero;
