import { useContext } from "react"
import { ThemeContext } from "../../contexts/Theme"
import ProfileSettings from "./ProfileSettings";
import ProfileSideBar from "./ProfileSideBar";


export default function Profile() {
  // Setting up proper dark mode
  const [{theme}] = useContext(ThemeContext);

  return (
    <>
        <main style={{backgroundColor: theme.backgroundColor, color: theme.color}} className="flex">
            <ProfileSideBar />
            <ProfileSettings />
        </main>
    </>
  )
}
