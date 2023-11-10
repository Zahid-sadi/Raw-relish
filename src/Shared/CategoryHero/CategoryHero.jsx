import React, { useRef, useState } from 'react';

const CategoryHero = ({ videoSource, heading }) => {
  // console.log(heading);
  
  
    return (
      <div className="w-full h-fit p-20 pb-0  bg-gradient-to-r from-slate-900 to-black hover:z-10">
        <h2 className='text-white h-28  mt-10 p-6 text-center font-bold text-4xl bg-gradient-to-r bg-slate-500 from-slate-900 capitalize z-20 border-2 border-yellow-900   '>__{heading}__</h2>
        <video
        className='w-screen object-cover h-[600px] border-2 border-b-0 border-t-0 border-yellow-900 '
        muted
          src={videoSource}
          loop={true}
          autoPlay
        
        />
        
      </div>
    );
};

export default CategoryHero;
