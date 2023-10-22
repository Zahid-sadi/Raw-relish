import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from "react";
const CategoryHero = ({bgvideo, heading, details}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            bgvideo.pause();
        } else {
            bgvideo.play();
        }
    };

    return (
        <div
            className="hero h-[800px] bg-fixed"
            // style={{backgroundImage: `url("${imageUrl}")`}}
        >
            <video autoPlay loop muted className="background-video bg-fixed h-[800px] w-full ">
                <source src={bgvideo} type="video/mp4" />
            </video>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
                    <p className="mb-5">{details}</p>
                    <button onClick={togglePlay}>{isPlaying ? <FontAwesomeIcon className="bg-black" icon="Fa-solid fa-stop" /> : <FontAwesomeIcon icon="fa-solid fa-play" />}
                    </button>
                    <FontAwesomeIcon icon="Fa-solid fa-stop"></FontAwesomeIcon>


                </div>
            </div>
        </div>
    );
};

export default CategoryHero;

// const CategoryHero =({ imageUrl, headline }) => {
//     const style = {
//       backgroundImage: `url(${imageUrl})`,
//     };

//     return (
//       <div className="w-full h-full flex flex-col items-center justify-center " style={style}>
//         <p className="text-white text-2xl">{headline}</p>
//       </div>
//     );
//   };

// export default CategoryHero;
