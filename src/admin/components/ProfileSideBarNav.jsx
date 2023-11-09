import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

export default function ProfileSideBarNav() {
  const {logout} = useAuth
  return (
    <>
        <ul>
            <li className='leading-10'>
              <Link to="/profile"><PersonIcon /> Profile</Link>
            </li>
            <li className='leading-10'>
              <Link to="account"><SettingsIcon /> Account Settings</Link>
            </li>
            <li className='leading-10'><NotificationsActiveIcon /> Activity</li>
            <li className='leading-10'><GroupsIcon /> Socials</li>
            <li className='leading-10'><IntegrationInstructionsIcon /> Integration</li>
            <li className='leading-10'>
              <Link to="/" onClick={logout}><LogoutIcon /> Sign Out</Link>
            </li>
        </ul>
    </>
  )
}
