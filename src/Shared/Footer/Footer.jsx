import { Link } from "react-router-dom";
import logo from "../../../public/brand-logo.png";
import { FaYoutube, FaFacebookF, FaApple } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import img from  '../../assets/goole.png'

const Footer = () => {
    return (
        <footer className="w-full flex flex-col justify-center items-center p-10 bg-gradient-to-bl from-blue-950 to-lime-950 text-primary-content">
            {/* <div className="flex flex-col "> */}
            <div className="flex flex-col justify-center items-center p-5">
                <Link to="/"> <img className="h-36 w-36 mx-auto p-2 my-5 " src={logo} alt="logo of raw relish" /></Link>
                <Link to="/"><header className="font-bold text-4xl text-yellow-500">Raw Relish</header></Link>
               
                
            </div>
            <div className="">
                <p className="font-semibold text-lg px-1 text-center">Raw Relish food Industry Ltd. Providing reliable Food since born</p>
            </div>
            {/* </div> */}
            <nav className="mt-5 px-1">
                <div className="flex justify-between gap-3">
                <Link className="hover:bg-black p-3 rounded-xl">
                        <TfiTwitterAlt className="h-12 w-12 "></TfiTwitterAlt>
                    </Link>

                    <Link className="hover:bg-blue-500 p-3 rounded-xl">
                        <FaFacebookF className="h-12 w-12"></FaFacebookF>
                    </Link>

                    <Link className="hover:bg-red-700 p-3 rounded-xl">
                        <FaYoutube className="h-12 w-12"></FaYoutube>
                    </Link>

                    
                </div>
            </nav>

            <div className="flex flex-col gap-6  sm:flex-row m-5">
                <Link to='/play-store'>
                <div className=" w-56 h-20 flex items-center justify-center p-3 bg-black px-5  rounded-xl ">
                    <div className="text-yellow-100 ">
                        <p className="">Download</p>
                        <p className=" ">From play store</p>
                    </div>
                   
                        <img className="h-14 w-16 p-2" src={img} alt="" />
                    </div>
                </Link>

                <Link  to='/play-store'>
                
                <div className="w-56 h-20 flex items-center justify-center py-3 bg-black px-5  rounded-xl ">
                        <div className="text-yellow-100 ">
                            <p className=" ">Download</p>
                            <p className="">From apple store</p>
                        </div>

                            <FaApple className="h-14 w-16"></FaApple>
                    </div>
                </Link>
              
            </div>
            <p className=" text-gray-300 rounded-3xl text-center">Copyright © 2024 - All rights reserved</p>
        </footer>
    );
};

export default Footer;
