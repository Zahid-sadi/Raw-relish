import React, { useRef, useState } from "react";
import headlinePhoto from "../../assets/woodTray.png";

const CategoryHero = ({ videoSource, heading }) => {
    // console.log(heading);

    return (
        <div className="w-full h-fit p-20 pb-0  bg-gradient-to-r from-cyan-950 to-black hover:z-10">
            <div>
                <div className="w-full mb-4">
                    <img className="w-full h-40  " src={headlinePhoto} alt="" />

                    <h2 className="text-slate-950 p-8 -mt-32 text-center font-bold lg:font-extrabold text-xl lg:text-4xl capitalize z-20 ">
                        __{heading}__
                    </h2>
                </div>
            </div>
            <video className="w-screen rounded-lg object-cover h-[600px]  " muted src={videoSource} loop={true} autoPlay />
        </div>
    );
};

export default CategoryHero;
