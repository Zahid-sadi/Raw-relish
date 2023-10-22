import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png'
const Navbar = () => {
    const navItem = (<>
           <li>
                            <Link to="/items">Items</Link>
                      
                      
                        </li>
    </>);

    return (
        <div className="navbar bg-opacity-40 fixed text-yellow-300 z-10">
            <div className="navbar-start ">
                <div className="dropdown underline">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                       
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2">
                 {navItem}
                    </ul>
                </div>
                <Link to="/"> <img className=' h-16 w-16 p-2 mx-2' src={logo} alt="logo of raw relish" /></Link>
               
                <Link to="/" className="text-2xl font-extrabold text-yellow-700">Raw Relish</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                   {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
