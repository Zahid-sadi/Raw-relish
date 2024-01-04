import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../../assets/logo3.png";

// import {toast} from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../Hooks/useCart";
import { toast } from "react-toastify";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log("User From Navbar", user);
    const [ cart ] = useCart();
    const [ isAdmin ] = useAdmin();
    // console.log("from navbar", cart);

    const logOutHandler = () => {
        logOut()
        .then(() => {
            // toast("SignOut successfully");
        })
        .catch((error) => {
            // console.log(error);
            toast.error(error.message);
        });
    };

    const navItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/review">Reviews</Link>
            </li>
            <li>
                <Link to="/items">Items</Link>
            </li>
            <li>
                <Link to="/order">Food Order</Link>
            </li>
            {isAdmin ? (
                <li>
                    <Link to="/dashboard/adminHome">Dashboard</Link>
                </li>
            ) : (
                <li>
                    <Link to="/dashboard/userHome">Dashboard</Link>
                </li>
            )}
            <li>
                <Link className="group " to="dashboard/my/cart">
                    <div className="indicator group-hover:text-yellow-400">
                        <FaCartArrowDown className=" h-7 w-6 "></FaCartArrowDown>
                        <span className="badge badge-xs badge-primary group-hover:bg-yellow-400 group-hover:text-gray-700  indicator-item p-2">{cart?.length || 0}</span>
                    </div>
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar mx-auto fixed h-28 bg-opacity-20 bg-black z-10 text-white  ">
            <div className="navbar-start">
                <div className=" dropdown lg:hidden sm:block md:block">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content ">
                        {navItems}
                    </ul>
                </div>
                <div className="flex  items-center m-4 sm:m-2 lg:m-12">
                    <Link to="/">
                        <img
                            className="h-12 lg:h-20 w-fit sm:h-12 md:w-16 md:h-16 lg:w-20   ml-1 lg:ml-5"
                            src={logo}
                            alt="logo of raw relish"
                        />
                    </Link>
                    <Link
                        to="/"
                        className="mx-3 lg:mx-4  sm:text-base text-sm md:text-xl lg:text-3xl font-semibold md:font-bold lg:font-extrabold text-yellow-500"
                    >
                        Raw Relish
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-40 ">{navItems}</ul>
            </div>
            <div className="navbar-end  flex items-center">
                <div className="me-2 sm:me-5 lg:me-8 ">
                    {user?.uid ? <p className="text-blue-400 font-bold mx-auto">{user.displayName} </p> : ""}
                </div>
                {user?.uid ? (
                    <Link
                        onClick={logOutHandler}
                        to="/login"
                        className="ml-2 sm:ml-10 btn bg-yellow-400 rounded-s-full hover:bg-green-900 "
                    >
                        Log out
                    </Link>
                ) : (
                    <Link to="/login" className="ml-2 sm:ml-10 btn bg-yellow-400 rounded-s-full hover:bg-green-900 ">
                        Log in
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
