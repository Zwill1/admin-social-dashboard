import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme";

export default function ProfileSideBar() {
     // Setting up proper dark mode
     const [{isDark}] = useContext(ThemeContext);
  return (
    <>
        <section className={isDark ? "w-1/4 bg-gray-700 min-h-screen text-white text-center" : "w-1/4 bg-gray-200 min-h-screen text-black text-center"}>
            <p>ProfileSideBar</p>
        </section>
    </>
  )
}
