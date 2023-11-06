import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function ProfileSideBarNav() {
  return (
    <>
        <ul>
            <li className='leading-10'><PersonIcon /> Profile</li>
            <li className='leading-10'><SettingsIcon /> Account Settings</li>
            <li className='leading-10'><NotificationsActiveIcon /> Activity</li>
            <li className='leading-10'><GroupsIcon /> Socials</li>
            <li className='leading-10'><IntegrationInstructionsIcon /> Integration</li>
            <li className='leading-10'><LogoutIcon /> Sign Out</li>
        </ul>
    </>
  )
}
