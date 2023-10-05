/* eslint react/prop-types: 0 */

//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function SocialCard({bgcolor, color, width, center, dataName, dataId, dataFollowers, dataPrevFollowers}) {
    const headerStyle = bgcolor + " " + color + " " + width + " " + center + " " + "pt-8 pb-8 mx-4 border-2 border-black";
    console.log("in the card " + dataName);

    const totalAdjustedFollowers = dataFollowers - dataPrevFollowers;
  return (
    <div className={headerStyle}>
      <div>
        <span>
          {dataId == 1653345695 &&
            <InstagramIcon />
          }
          {dataId == 16545433 &&
            <YouTubeIcon />
          }
          {dataId == 165223255295 &&
            <TwitterIcon />
          }
          {dataId == 16571806895 &&
            <FacebookIcon />
          } / {dataName}</span>
      </div>
      <div className="mt-1">
        <p className="text-6xl font-bold">{dataFollowers}</p>
        <p className="uppercase tracking-widest">followers</p>
        <p>ID: {dataId}</p>
        {dataPrevFollowers && <p>{totalAdjustedFollowers > 0 ? <p>+{totalAdjustedFollowers} from yesterday</p> : <p>{totalAdjustedFollowers} from yesterday</p>}</p> }
      </div>
    </div>
  )
}
