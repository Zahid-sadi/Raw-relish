// import React, { useRef, useState } from "react";
import headlinePhoto from "../../assets/headingBg.png"

const CategoryHero = ({ videoSource, heading }) => {
    // console.log(heading);

    return (
        <div className="w-full h-fit p-20 pb-0  bg-gradient-to-r from-cyan-950 to-black hover:z-10">
                <div className="relative rounded-3xl rounded-b-0 border border-b-0 border-yellow-500  opacity-90 w-2/5 text-center mx-auto h-fit">
                    <img className="w-full p-2 h-60" src={headlinePhoto} alt="" />

                    <h2 className="text-white text-center  absolute  bottom-0 inset-x-0 p-5  font-bold lg:font-bold text-sm md:text-lg lg:text-4xl capitalize   ">
                    {heading}
                    </h2>
                </div>
            <video className="w-screen rounded-t-3xl border border-b-0 border-yellow-500   object-cover h-96 md:h-[600px]  " muted src={videoSource} loop={true} autoPlay />
        </div>
    );
};

export default CategoryHero;
