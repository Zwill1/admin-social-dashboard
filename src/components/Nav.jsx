import { useState } from "react";

import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useAuth } from "../contexts/AuthContext";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const { logout, isAuthenticated } = useAuth();
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <>
      <section className="bg-white text-black">
        <div className="flex justify-between md:w-full h-14 w-10/12 mx-auto container items-center">
          <div>
            <h1 className="flex">
              <Link
                to="/"
                className="font-bold mr-4 text-2xl sm:text-3xl md:text-4xl uppercase text-black"
              >
                Social Dash
              </Link>
            </h1>
          </div>
          <div>
            <ul className="hidden lg:flex pr-4">
              <li className="p-4">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              {/* Changing nav text link based on if the user has logged in. Login if not login is authenticated. Logout if a user is logged in. logout link uses onclick from auth context for logout */}
              {!isAuthenticated ? (
                <li className="p-4">
                  <Link to="/" className="nav-link">
                    Login
                  </Link>
                </li>
              ) : (
                <>
                  {/* Adding dashboard to navigation if user goes back to homepage. */}
                  <li className="p-4">
                    <Link to="/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                  <li className="p-4">
                    <Link to="/" className="nav-link" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="lg:hidden" onClick={handleClick}>
            {!nav ? (
              <MenuIcon className="w-5" />
            ) : (
              <CloseIcon className="w-5" />
            )}
          </div>
        </div>
        <ul
          className={
            !nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 lg:hidden z-50"
          }
        >
          <li className="border-b-2 border-zinc-300 w-full p-4">
            <Link to="/" onClick={handleClose}>
              Home
            </Link>
          </li>
          {/* Changing nav text link based on if the user has logged in. Login if not login is authenticated. Logout if a user is logged in. logout link uses onclick from auth context for logout */}
          {!isAuthenticated ? (
            <li className="border-b-2 border-zinc-300 w-full p-4">
              <Link to="/login" onClick={handleClose}>
                Login
              </Link>
            </li>
          ) : (
            <>
              {/* Adding dashboard to navigation if user goes back to homepage. */}
              <li className="border-b-2 border-zinc-300 w-full p-4">
                <Link to="/dashboard" onClick={handleClose}>
                  Dashboard
                </Link>
              </li>
              <li className="border-b-2 border-zinc-300 w-full p-4">
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </section>
    </>
  );
};

export default Nav;
