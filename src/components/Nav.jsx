import { useState } from "react";

import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useAuth } from "../contexts/AuthContext";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [isDropDown, setDropDown] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const [darkMode, SetDarkMode] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const dropDownClick = () => setDropDown(!isDropDown);
  
  function toggleDarkMode(){
    // sets body to dark mode
    let getBodyTag = document.querySelector("body");
    getBodyTag.classList.add("darkModeBody");

    let mainHeadTag = document.getElementById("main-header");
    mainHeadTag.classList.add("darkModeHeader");

    // sets header to dark mode
    let textHeaderTag = document.getElementById("text-header");
    textHeaderTag.classList.add("darkModeHeaderText");

    let textSubHeaderTag = document.getElementById("sub-header");
    textSubHeaderTag.classList.add("darkModeSubText");

    let textHeaderTag2 = document.getElementById("text-header2");
    textHeaderTag2.classList.add("darkModeHeaderText");

    let textSubHeaderTag2 = document.getElementById("sub-header2");
    textSubHeaderTag2.classList.add("darkModeSubText");

    // sets state to true
    SetDarkMode(true);
  } 
  function toggleLightMode(){
    // sets body to light mode
    let getBodyTag = document.querySelector("body");
    getBodyTag.classList.remove("darkModeBody");

    // sets header to light mode
    let mainHeadTag = document.getElementById("main-header");
    mainHeadTag.classList.remove("darkModeHeader");

    let textHeaderTag = document.getElementById("text-header");
    textHeaderTag.classList.remove("darkModeHeaderText");

    let textSubHeaderTag = document.getElementById("sub-header");
    textSubHeaderTag.classList.remove("darkModeSubText");

    let textHeaderTag2 = document.getElementById("text-header2");
    textHeaderTag2.classList.remove("darkModeHeaderText");

    let textSubHeaderTag2 = document.getElementById("sub-header2");
    textSubHeaderTag2.classList.remove("darkModeSubText");

    // sets state to false
    SetDarkMode(false);
  } 

  return (
    <>
      <section id="main-header" className="text-black">
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
                    {!darkMode ? (
                      <li className="p-4" onClick={toggleDarkMode}>Darkmode</li>
                    ) : (
                      <li className="p-4" onClick={toggleLightMode}>Lightmode</li>
                    )}
                  {/* <li className="p-4">
                    <Link to="/" className="nav-link">
                      Login
                    </Link>
                  </li> */}
                </>
              ) : (
                <>
                  <li className="p-4 flex" onClick={dropDownClick}>
                      <img src={user.avatar} className='rounded-full mr-3' style={{"width" : "25px"}} /> <span className="font-bold">Welcome {user.name}</span>! <ExpandMoreIcon />

                      {/* placing in a dropdown menu on click. Use state to set the arrow */}
                      <ul className={!isDropDown ? "hidden" : "absolute w-[185px] bg-gray-100 float-left text-center top-[50px] pt-1 pb-1" }>
                  {/* Adding dashboard to navigation if user goes back to homepage. */}
                        <li className="p-1">
                          <Link to="/dashboard" className="nav-link">
                            Dashboard
                          </Link>
                        </li>
                        <li className="p-1">
                          <Link to="/" className="nav-link" onClick={logout}>
                            Logout
                          </Link>
                        </li>
                      </ul>
                  </li>
                  {!darkMode ? (
                      <li className="p-4" onClick={toggleDarkMode}>Darkmode</li>
                    ) : (
                      <li className="p-4" onClick={toggleLightMode}>Lightmode</li>
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
          }
        >
          {/* Changing nav text link based on if the user has logged in. Login if not login is authenticated. Logout if a user is logged in. logout link uses onclick from auth context for logout */}
          {!isAuthenticated ? (
            <>
              <li className="border-b-2 border-zinc-300 w-10/12 mx-auto pt-4 pb-4">
                <Link to="/" onClick={handleClose}>
                  Home
                </Link>
              </li>
              {/* <li className="border-b-2 border-zinc-300 w-full p-4">
                <Link to="/login" onClick={handleClose}>
                  Login
                </Link>
              </li> */}
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
