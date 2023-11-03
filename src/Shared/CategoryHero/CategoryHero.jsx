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
