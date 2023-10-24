// import {useState} from "react";
// const CategoryHero = ({imageUrl,bgVideo, heading, details}) => {
//     const [isPlaying, setIsPlaying] = useState(false);

//     const togglePlay = () => {
//         setIsPlaying(!isPlaying);
//         if (isPlaying) {
//             bgVideo.pause();
//         } else {
//             bgVideo.play();
//         }
//     };

//     return (
//         <div
//             className="hero h-[800px] bg-fixed"
//             // style={{backgroundImage: `url("${imageUrl}")`}}
//         >
//             <video autoPlay loop muted className="background-video ">
//                 <source src={bgVideo} type="video/mp4" />
//             </video>
//             <div className="hero-overlay bg-opacity-60"></div>
//             <div className="hero-content text-center text-neutral-content">
//                 <div className="max-w-md">
//                     <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
//                     <p className="mb-5">{details}</p>
//                     <button onClick={togglePlay}>{isPlaying ? "pause" : "play"}</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CategoryHero;



// const CategoryHero = ({imageUrl, heading, details}) => {
  

//     return (
//         <div
//             className="hero h-[800px] bg-fixed"
//             style={{backgroundImage: `url("${imageUrl}")`}}
//         >
            
//             <div className="hero-overlay bg-opacity-20"></div>
//             <div className="hero-content text-center text-neutral-content">
//                 <div className="max-w-md">
//                     <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
//                     <p className="mb-5">{details}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CategoryHero;




import React, { useRef, useState } from 'react';

const CategoryHero = ({ videoSource, autoplay, controls, headline }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(autoplay);
  
    const togglePlay = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    return (
      <div className="w-full">
        <h2>{headline}</h2>
        <video
        className='w-full bg-fixed'
        muted
          ref={videoRef}
          src={videoSource}
          autoPlay
          controls
        />
        {controls && (
          <button onClick={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        )}
      </div>
    );
};

export default CategoryHero;
