import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../../assets/logo3.png";

// import {toast} from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../Hooks/useCart";

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
            console.log(error);
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
        <div className="navbar fixed h-28 bg-opacity-20 bg-black z-10 text-white  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                <div className="flex  items-center m-12">
                <Link to="/">
                    {" "}
                    <img className=" h-20 w-20  ml-16" src={logo} alt="logo of raw relish" />
                </Link>
                <Link to="/" className="mx-10 text-2xl font-extrabold text-yellow-500">
                    Raw Relish
                </Link>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">{navItems}</ul>
            </div>
            <div className="navbar-end  ">
                <div className="me-5 ">
                    {user?.uid ? <p className="text-blue-600 font-bold mx-auto">{user.displayName} </p> : ""}
                </div>
                {user?.uid ? (
                    <Link onClick={logOutHandler} to="/login" className="ml-10 btn bg-yellow-400 rounded-s-full">
                        Log out
                    </Link>
                ) : (
                     <Link to="/login" className="ml-10 btn bg-yellow-400 border rounded-s-full">
                        Log in
                    </Link>
                   
                )}
            </div>
        </div>
    );
};

export default Navbar;
