import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useAuth } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/Theme";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [isDropDown, setDropDown] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const dropDownClick = () => setDropDown(!isDropDown);

  // Setting up proper dark mode
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);

  return (
    <>
      <section className={isDark ? "bg-black text-white" : "bg-gray-100 text-black"}>
        <div className="flex justify-between md:w-full h-14 w-10/12 mx-auto container items-center">
          <div>
            <h1 className="flex">
              <Link
                to="/"
                className="font-bold mr-4 text-2xl sm:text-3xl md:text-4xl uppercase"
              >
                Social Dash
              </Link>
            </h1>
          </div>
          <div>
            <ul className="hidden lg:flex pr-4">
              {/* Changing nav text link based on if the user has logged in. Login if not login is authenticated. Logout if a user is logged in. logout link uses onclick from auth context for logout */}
              {!isAuthenticated ? (
                <>
                  <li className="p-4">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                    {!isDark ? (
                      <li className="p-4" onClick={toggleTheme}><DarkModeIcon /></li>
                    ) : (
                      <li className="p-4" onClick={toggleTheme}><LightModeIcon /></li>
                    )}
                </>
              ) : (
                <>
                  <li className="p-4 flex" onClick={dropDownClick}>
                      <img src={user.avatar} className='rounded-full mr-3' style={{"width" : "25px"}} /> <span className="font-bold">Welcome {user.name}</span>! <ExpandMoreIcon />

                      {/* placing in a dropdown menu on click. Use state to set the arrow */}
                      <ul className={!isDropDown ? "hidden" : "absolute w-[185px] bg-gray-100 float-left text-center top-[50px] pt-1 pb-1" } style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
                  {/* Adding dashboard to navigation if user goes back to homepage. */}
                        <li className="p-1">
                          <Link to="/dashboard" className="nav-link">
                            Dashboard
                          </Link>
                        </li>
                        {/* <li className="p-1">
                          <Link to="/profile" className="nav-link">
                            Profile
                          </Link>
                        </li> */}
                        <li className="p-1">
                          <Link to="/" className="nav-link" onClick={logout}>
                            Logout
                          </Link>
                        </li>
                      </ul>
                  </li>
                  {!isDark ? (
                      <li className="p-4" onClick={toggleTheme}><DarkModeIcon /></li>
                    ) : (
                      <li className="p-4" onClick={toggleTheme}><LightModeIcon /></li>
                    )}
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
            !nav ? "hidden" : "absolute bg-zinc-200 w-full lg:hidden z-50"
          } style={{backgroundColor: theme.backgroundColor, color: theme.color}}
        >
          {/* Changing nav text link based on if the user has logged in. Login if not login is authenticated. Logout if a user is logged in. logout link uses onclick from auth context for logout */}
          {!isAuthenticated ? (
            <>
              <li className="border-b-2 border-zinc-300 w-10/12 mx-auto pt-4 pb-4">
                <Link to="/" onClick={handleClose}>
                  Home
                </Link>
              </li>
            </>
          ) : (
            <>
              {/* Adding dashboard to navigation if user goes back to homepage. */}
              <li className="flex w-10/12 mx-auto pt-4 pb-4">
                      <img src={user.avatar} className='rounded-full mr-3' style={{"width" : "25px"}} /> <span className="font-bold">Welcome {user.name}</span>!
              </li>
              <li className="border-b-2 border-zinc-300 w-10/12 mx-auto pt-4 pb-4">
                <Link to="/dashboard" onClick={handleClose}>
                  Dashboard
                </Link>
              </li>
              {/* <li className="border-b-2 border-zinc-300 w-10/12 mx-auto pt-4 pb-4">
                <Link to="/profile" onClick={handleClose}>
                  Profile
                </Link>
              </li> */}
              <li className="border-b-2 border-zinc-300 w-10/12 mx-auto pt-4 pb-4">
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
