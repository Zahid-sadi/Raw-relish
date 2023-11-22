import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";

// import footerBgImg from "../../assets/curve2Bg.png";

const Footer = () => {
    return (
        <footer className=" footer footer-center p-10 bg-gradient-to-r from-cyan-900 to-slate-950 text-primary-content">

            <aside>
                <div className="flex flex-col p-5 m-5 ">
                    <img className="h-36 w-36 p-2 mx-2" src={logo} alt="logo of raw relish" />
                    <header className="font-bold text-4xl text-yellow-500">Raw Relish</header>
                </div>
                <p className="font-bold p-5 ">Raw Relish food Industry Ltd. Providing reliable Food since born</p>
            </aside>
            <nav>
                <div className=" grid grid-flow-col gap-10">
                    <Link className="hover:bg-black p-3 rounded-3xl">
                        <TfiTwitterAlt className="  h-12 w-12  rounded-3xl"></TfiTwitterAlt>
                    </Link>

                    <Link className="hover:bg-red-700 p-3 rounded-3xl">
                        <FaYoutube className="h-12 w-12"></FaYoutube>
                    </Link>

                    <Link className="hover:bg-blue-500 p-3 rounded-3xl">
                        <FaFacebookF className="h-12 w-12"></FaFacebookF>
                    </Link>
                </div>
            </nav>
            <p className="bg-slate-700 text-black font-bold w-full  py-3 ">Copyright © 2024 - All right reserved</p>
        </footer>
    );
};

export default Footer;
