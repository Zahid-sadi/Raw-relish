import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../../assets/logo3.png";

import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../Hooks/useCart";
import { toast } from "react-toastify";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();


    const logOutHandler = () => {
        logOut()
            .then(() => {
                toast("SignOut successfully");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const navStyle = "px-3 mx-3 hover:text-yellow-500 hover:rounded-lg hover:pb-3 hover:font-bold hover:bg-gradient to-green-950 from-black hover:shadow-md hover:shadow-yellow-400";


    const navItems = (
        <>
            <li>
                <Link className={navStyle} to="/">Home</Link>
            </li>
            <li>
                <Link className={navStyle} to="/about">About</Link>
            </li>
            <li>
                <Link className={navStyle} to="/review">Reviews</Link>
            </li>
            <li>
                <Link className={navStyle} to="/items">Items</Link>
            </li>
            <li>
                <Link className={navStyle} to="/order">Food Order</Link>
            </li>
            {isAdmin ? (
                <li>
                    <Link className={navStyle} to="/dashboard/adminHome">Dashboard</Link>
                </li>
            ) : (
                <li>
                    <Link className={navStyle} to="/dashboard/userHome">Dashboard</Link>
                </li>
            )}
            <li>
                <Link className="group" to="dashboard/my/cart">
                    <div className="indicator group-hover:text-yellow-400">
                        <FaCartArrowDown className="h-7 w-6" />
                        <span className="badge badge-xs badge-primary group-hover:bg-yellow-400 group-hover:text-gray-700 indicator-item p-2">{cart?.length || 0}</span>
                    </div>
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar mx-auto sticky top-0 h-28 bg-opacity-30 bg-black z-10 text-white justify-evenly items-center ">
            <div className="flex items-center">
                <div className="dropdown lg:hidden sm:block md:block">
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
                    <ul tabIndex={0} className="text-center dropdown-content text-yellow-400">
                        {navItems}
                    </ul>
                </div>
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            className="h-12 md:h-16 lg:h-20 w-fit md:w-16 lg:w-20"
                            src={logo}
                            alt="logo of raw relish"
                        />
                    </Link>
                    <Link
                        to="/"
                        className="mx-3 lg:mx-4 sm:text-base text-sm md:text-xl lg:text-3xl font-semibold md:font-bold lg:font-extrabold text-yellow-500"
                    >
                        Raw Relish
                    </Link>
                </div>
            </div>
            <div className="hidden px-5 lg:flex">
                <ul className=" menu-horizontal text-yellow-400">{navItems}</ul>
            </div>
            <div className="flex items-center justify-center">
                {user?.uid && <p className="text-blue-400 font-bold mx-auto">{user.displayName}</p>}
                <Link
                    onClick={logOutHandler}
                    to={user?.uid ? "/login" : "/"}
                    className="btn bg-yellow-400 rounded hover:bg-green-900"
                >
                    {user?.uid ? "Log out" : "Log in"}
                </Link>
            </div>
        </div>
    );
};

export default Navbar;

