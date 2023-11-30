import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import { FaYoutube, FaFacebookF, FaGooglePlay, FaApple } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";

const Footer = () => {
    return (
        <footer className="  footer footer-center p-10 bg-gradient-to-bl from-blue-950 to-lime-950 text-primary-content">
            {/* <div className="flex flex-col "> */}
            <div className="flex flex-col  items-center p-5">
                <img className="h-36 w-36 p-2 m-5 -ml-1 " src={logo} alt="logo of raw relish" />
                <header className="font-bold text-4xl text-yellow-500">Raw Relish</header>
            </div>
            <div className="">
                <p className="font-bold">Raw Relish food Industry Ltd. Providing reliable Food since born</p>
            </div>
            {/* </div> */}
            <nav className="mt-5">
                <div className=" flex  gap-5">
                    <Link className="hover:bg-black p-3 rounded-xl">
                        <TfiTwitterAlt className="  h-12 w-12 "></TfiTwitterAlt>
                    </Link>

                    <Link className="hover:bg-red-700 p-3 rounded-xl">
                        <FaYoutube className="h-12 w-12"></FaYoutube>
                    </Link>

                    <Link className="hover:bg-blue-500 p-3 rounded-xl">
                        <FaFacebookF className="h-12 w-12"></FaFacebookF>
                    </Link>
                </div>
            </nav>

            <div className="flex flex-col gap-6  sm:flex-row m-5">
                {/* <div className="mb-5 sm:mb-0 sm:mr-5"> */}
                <div className=" w-56 h-20 flex items-center justify-center p-3 bg-black px-5  rounded-xl ">
                    <div className="text-yellow-500">
                        <p className=" font-semibold">Download</p>
                        <p className=" font-semibold">From play store</p>
                    </div>
                    <Link className="">
                        <FaGooglePlay className="h-12 w-16 "></FaGooglePlay>
                    </Link>
                </div>
                {/* </div> */}

              
                    <div className=" w-56 h-20 flex items-center justify-center p-3 bg-black px-5  rounded-xl ">
                        <div className="text-yellow-500">
                            <p className=" font-semibold">Download</p>
                            <p className=" font-semibold">From apple store</p>
                        </div>

                        <Link className="">
                            <FaApple className="h-14 w-16"></FaApple>
                        </Link>
                    </div>
              
            </div>
            <p className=" text-white rounded-3xl text-center  ">Copyright © 2024 - All right reserved</p>
        </footer>
    );
};

export default Footer;
