import React, { useRef, useState } from "react";
import headlinePhoto from "../../assets/woodTray.png";

const CategoryHero = ({ videoSource, heading }) => {
    // console.log(heading);

    return (
        <div className="w-full h-fit p-20 pb-0  bg-gradient-to-r from-cyan-950 to-black hover:z-10">
            <div>
                <div className="w-full">
                    <img className="w-full h-40" src={headlinePhoto} alt="" />

                    <h2 className="text-slate-950 py-8 -mt-28 text-center font-extrabold text-4xl capitalize z-20 ">
                        __{heading}__
                    </h2>
                </div>
            </div>
            <video className="w-screen object-cover h-[600px]  " muted src={videoSource} loop={true} autoPlay />
        </div>
    );
};

export default CategoryHero;
