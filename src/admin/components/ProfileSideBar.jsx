import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";
import ProfileSideBarNav from "./ProfileSideBarNav";

export default function ProfileSideBar() {
     // Setting up proper dark mode
     const [{isDark}] = useContext(ThemeContext);
  return (
    <>
        <section className={isDark ? "w-2/12 bg-gray-700 min-h-screen text-white px-14" : "w-2/12 bg-gray-200 min-h-screen text-black px-14"}>
          <div className="pt-10">
            <ProfileSideBarNav />
          </div>
        </section>
    </>
  )
}
