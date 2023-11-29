import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaStore, FaUsers, FaWallet } from "react-icons/fa";
import { ImBook, ImHome, ImHome2, ImList, ImMenu, ImMobile, ImSpoonKnife } from "react-icons/im";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
    const [ cart ] = useCart();

    const [ isAdmin ] = useAdmin();

    return (
        <div className="drawer lg:drawer-open bg-gradient-to-l from-lime-950 to-slate-950 ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                Open menu
            </label>
            <div className="drawer-content  flex flex-col items-center justify-center">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu  p-16 border border-white font-semibold text-blue-700   bg-gradient-to-b from-lime-950 to-slate-900 0 w-80 min-h-full">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/my/cart ">
                                    <ImHome></ImHome> Admin Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/all/users">
                                    <FaUsers></FaUsers> Manage Users
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/add/item">
                                    <ImSpoonKnife></ImSpoonKnife> Add items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manage/item ">
                                    <ImList></ImList> Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to=" ">
                                    <ImBook></ImBook> Manage Items
                                </NavLink>
                            </li>
                            <div className=" text-green-700 text-center "> _________and_________</div>
                            <li>
                                <NavLink to="/">
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
                                <NavLink to="/dashboard/my/cart">
                                    <FaShoppingCart></FaShoppingCart> My cart{" "}
                                    <span className=" badge  badge-info">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to=" ">
                                    <FaWallet></FaWallet> My Wallet
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/payment">
                                    <FaWallet></FaWallet> Payment
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to=" ">
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
                                <NavLink to="/">
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
