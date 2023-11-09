import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaStore, FaUsers, FaWallet } from "react-icons/fa";
import { ImBook, ImHome, ImHome2, ImList, ImMenu, ImMobile, ImSpoonKnife } from "react-icons/im";
import useCart from "../Hooks/useCart";
const DashboardLayout = () => {
    const [data] = useCart();
    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-yellow-700 w-80 min-h-full">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink  to=" ">
                                    <ImHome></ImHome> AdminHome
                                </NavLink>
                            </li>
                          
                            <li>
                                <NavLink  to="/dashboard/allusers">
                                    <FaUsers></FaUsers> Manage Users
                                </NavLink>
                            </li>

                            <li>
                                <NavLink  to=" ">
                                    <ImSpoonKnife></ImSpoonKnife> Add items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink  to=" ">
                                    <ImList></ImList> Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to=" ">
                                    <ImBook></ImBook> Manage Items
                                </NavLink>
                            </li>
                            <div className="divider"> and</div>
                            <li>
                                <NavLink to=" ">
                                    <ImHome2></ImHome2> Home 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to=" ">
                                    <ImMobile></ImMobile> Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to=" ">
                                    <ImMenu></ImMenu> Menu 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to=" ">
                                    <FaStore></FaStore> Shope 
                                </NavLink>
                            </li>
    
                        </>
                    ) : (
                        <>
                            <li className="">
                                <NavLink to="/dashboard/mycart">
                                    <FaShoppingCart></FaShoppingCart> My cart{" "}
                                    <span className=" badge  badge-info">+{data?.length || 0}</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <FaWallet></FaWallet> My Wallet
                                </NavLink>
                            </li>

                            <li>
                                <NavLink>
                                    <FaWallet></FaWallet> My Wallet
                                </NavLink>
                                <li></li>
                                <NavLink>
                                    <FaWallet></FaWallet> My Wallet
                                </NavLink>
                            </li>
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome>Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <FaHome></FaHome>Home
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;
