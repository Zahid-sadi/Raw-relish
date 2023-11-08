import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import useCart from "../Hooks/useCart";
const DashboardLayout = () => {
    const [data ]= useCart()
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
                    <li className="">
                        <NavLink to='/dashboard/mycart'>
                            <FaShoppingCart ></FaShoppingCart> My cart  <span className=" badge  badge-info">+{data?.length || 0 }</span> 
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
                        <NavLink to ="/">
                            <FaHome></FaHome>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink>
                            <FaHome></FaHome>Home
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;
