import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../UserContext";
import Sticky from 'react-stickynode';

import Theme from "../Theme";

const Navbar = () => {

    const data = useContext(DataContext);

    return (
      <Sticky enabled={true} innerZ={100} className="bg-base" innerActiveClass="bg-primary">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
            <Link to="/" >
              <a className="btn btn-ghost text-xl text-base">Posts</a>
            </Link>                  
                </li>  
<li>
             <Link to="/new" >
              <a className="btn btn-ghost text-xl text-base">Crear Post</a>
            </Link> 
</li>
<li>
             <Link to="profile/favorites" >
              <a className="btn btn-ghost text-xl text-base">Favorites</a>
            </Link> 
</li>
              </ul>
            </div>
            <Link to="/" >
              <a className="btn btn-ghost text-xl">Home</a>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
            <Link to="/" >
              <a className="btn btn-ghost text-xl text-base">Posts</a>
            </Link>                  
              </li>  
              <li>
             <Link to="/new" >
              <a className="btn btn-ghost text-xl text-base">Crear Post</a>
            </Link> 
              </li>
              <li>
             <Link to="profile/favorites" >
              <a className="btn btn-ghost text-xl text-base">Favorites</a>
            </Link> 
              </li>
            </ul>
          </div>  
        <div className="navbar-end">
            <Theme />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt={data.name}
                  src={data.picture} 
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between text-base">
                  <Link to="/profile" >
                    Perfil
                  </Link>
                </a>
              </li>
              <li>
                <a className="text-base">
                  <Link to="/logout" >
                    Logout
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Sticky>
    );
}; 

export default Navbar;