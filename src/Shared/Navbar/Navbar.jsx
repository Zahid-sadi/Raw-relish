import logo from '../../assets/logo3.png'
const Navbar = () => {
    const navItem = (<>
           <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Item 3</a>
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
                <img className=' h-16 w-16 p-2 mx-2' src={logo} alt="logo of raw relish" />
                <a className="text-2xl font-extrabold text-yellow-700">Raw Relish</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 underline">
                    <li>
                        <a>Item 1</a>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <a>Item 3</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
