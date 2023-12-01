import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../../assets/logo3.png";

// import {toast} from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../Hooks/useCart";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log("User From Navbar", user);
    const [ cart ] = useCart()
    // console.log("from navbar", cart);

    const logOutHandler = () => {
        logOut()
        .then(() => {
            // toast("SignOut successfully");
        })
        .catch((error) => {
            // console.log(error);
            toast.error('you cant login')
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
            <li>
                <Link to='dashboard/my/cart'><FaCartArrowDown className=" h-5 w-fit "></FaCartArrowDown><p className="text-yellow-600 text-lg">{cart?.length || 0}</p></Link>
               
            </li>
        </>
    );

    return (
        <div className="navbar w-5/6 mx-auto fixed h-28 bg-opacity-20 bg-black z-10 text-white  ">
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
                    <ul
                        tabIndex={0}
                        className=" dropdown-content "
                    >
                        {navItems}
                    </ul>
                </div>
                <div className="flex  items-center m-4 sm:m-8 lg:m-12">
                <Link to="/">
                    <img className=" h-20 w-20  ml-4 sm:ml-8 lg:ml-16" src={logo} alt="logo of raw relish" />
                </Link>
                <Link to="/" className="mx-4 sm:mx-8 lg:mx-10 text-xl sm:text-2xl lg:text-3xl font-extrabold text-yellow-500">
                    Raw Relish
                </Link>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">{navItems}</ul>
            </div>
            <div className="navbar-end  flex items-center">
                <div className="me-2 sm:me-5 lg:me-8 ">
                    {user?.uid ? <p className="text-blue-400 font-bold mx-auto">{user.displayName} </p> : ""}
                </div>
                {user?.uid ? (
                    <Link onClick={logOutHandler} to="/login" className="ml-2 sm:ml-10 btn bg-yellow-400 rounded-s-full hover:bg-green-900 ">
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
