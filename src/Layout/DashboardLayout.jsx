import { FaHome, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { ImHome, ImHome2, ImList, ImSpoonKnife } from "react-icons/im";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";

const DashboardLayout = () => {
    const [ cart ] = useCart();

    const [ isAdmin ] = useAdmin();

    return (
        <div className=" w-fit lg:w-full drawer lg:drawer-open bg-gradient-to-l from-lime-950 to-blue-900 ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <label htmlFor="my-drawer-2" className="btn btn-primary m-2 btn-sm drawer-button lg:hidden">
                Open menu
            </label>
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu  pt-24 px-10 font-semibold text-green-500   bg-gradient-to-b from-lime-950 to-blue-900 0 w-80 min-h-full">
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome ">
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

                            <div className="divider divide-accent ">and</div>
                            <li>
                                <NavLink to="/">
                                    <ImHome2></ImHome2> Home
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
                                <NavLink to="/dashboard/payment">
                                    <FaWallet></FaWallet> Payment
                                </NavLink>
                            </li>

                            <div className="divider"></div>
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
