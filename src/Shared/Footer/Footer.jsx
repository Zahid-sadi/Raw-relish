import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import { FaYoutube, FaFacebookF, FaGooglePlay, FaApple } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";

// import footerBgImg from "../../assets/curve2Bg.png";

const Footer = () => {
    return (
        <footer className="  footer footer-center p-10 bg-gradient-to-bl from-blue-950 to-lime-950 text-primary-content">
            <aside>
                <div className="flex flex-col p-5 ">
                    <img className="h-36 w-36 p-2 m-5" src={logo} alt="logo of raw relish" />
                    <header className="font-bold text-4xl text-yellow-500">Raw Relish</header>
                </div>
                <p className="font-bold">Raw Relish food Industry Ltd. Providing reliable Food since born</p>
            </aside>
            <nav>
                <div className=" flex  gap-10">
                    <Link className="hover:bg-black p-3 rounded-xl">
                        <TfiTwitterAlt  className="  h-12 w-12 "></TfiTwitterAlt>
                    </Link>

                    <Link className="hover:bg-red-700 p-3 rounded-xl">
                        <FaYoutube className="h-12 w-12"></FaYoutube>
                    </Link>

                    <Link className="hover:bg-blue-500 p-3 rounded-xl">
                        <FaFacebookF className="h-12 w-12"></FaFacebookF>
                    </Link>
                </div>
            </nav>
            {/* <h5 className="text-xl text-bold text-yellow-700">Coming</h5> */}
            <div className="flex w-60 rounded-lg gap-5">
                <Link className="p-3 bg-black px-5 w-32 rounded-xl">
                    <p className="pb-1">Download</p>
                    <FaGooglePlay className="h-12 w-16 "></FaGooglePlay>
                </Link>
                <Link className=" p-3 bg-black px-5 w-32 rounded-xl ">
                    <p className="pb-1">Download</p>
                    <FaApple className="h-12 w-16 p-"></FaApple>
                </Link>
            </div>
            <p className=" text-white rounded-3xl ">Copyright © 2024 - All right reserved</p>
        </footer>
    );
};

export default Footer;
