/* eslint react/prop-types: 0 */

//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function SocialCard({bgcolor, border, color, width, center, dataName, dataId, dataFollowers, dataPrevFollowers}) {
    const headerStyle = bgcolor + " " + border + " " + color + " " + width + " " + center + " " + "pt-8 pb-8 mx-4 border-2 border-black";
    console.log("in the card " + dataName);

    const totalAdjustedFollowers = dataFollowers - dataPrevFollowers;
  return (
    <div className={headerStyle}>
      <div>
        <span>
          {dataId == 1653345695 &&
            <InstagramIcon className='instagram-icon-color' />
          }
          {dataId == 16545433 &&
            <YouTubeIcon className='youtube-icon-color' />
          }
          {dataId == 165223255295 &&
            <TwitterIcon className='twitter-icon-color' />
          }
          {dataId == 16571806895 &&
            <FacebookIcon className='fb-icon-color' />
          } / {dataName}</span>
      </div>
      <div className="mt-1">
        <p className="text-6xl font-bold">{dataFollowers}</p>
        <p className="uppercase tracking-widest">followers</p>
        <p>ID: {dataId}</p>
        {dataPrevFollowers && <p>{totalAdjustedFollowers > 0 ? <p className='positive-rating'>+{totalAdjustedFollowers} from yesterday</p> : <p className='negative-rating'>{totalAdjustedFollowers} from yesterday</p>}</p> }
      </div>
    </div>
  )
}
