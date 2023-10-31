import {Link} from "react-router-dom";
import logo from "../../assets/logo1.png";
const Navbar = () => {
    const navItem = (
        <>
            <li>
                <Link to="/">Home</Link>
                <Link to="/items">Items</Link>
                <Link to="/order">Food Order</Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-opacity-40 fixed text-yellow-300 z-10">
            <div className="navbar-start ">
                <div className="dropdown underline">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                </div>
                
                <Link to="/">
                    {" "}
                    <img className=" h-16 w-16 p-2 mx-2" src={logo} alt="logo of raw relish" />
                </Link>

                <Link to="/" className="text-2xl font-extrabold text-yellow-700">
                    Raw Relish
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
            <div className="navbar-end">
            <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;





<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
     
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
