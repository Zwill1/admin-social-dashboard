import PropTypes from 'prop-types';

//icons
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

import { useAuth } from "../../contexts/AuthContext";

export default function SocialCard({
  bgcolor,
  border,
  color,
  width,
  center,
  dataName,
  dataId,
  dataFollowers,
  dataPrevFollowers,
  bottom
}) {

  const headerStyle =
    bgcolor +
    " " +
    border +
    " " +
    color +
    " " +
    width +
    " " +
    center +
    " " +
    bottom +
    " " +
    "pt-8 pb-8 mx-4 border-2 border-black";

  const totalAdjustedFollowers = dataFollowers - dataPrevFollowers;

  const { user } = useAuth();

  //console.log("user " + user.avatar);


  return (
    <div className={headerStyle}>
      <div>
        <span>
          {dataId == 1653345695 && (
            <>
              <div className='flex justify-center'><img src={user.avatar} className='rounded-full' /></div>
              <div><InstagramIcon className="instagram-icon-color" /> / <span className="instagram-icon-color">{dataName}</span></div>
            </>
          )}
          {dataId == 16545433 && (
            <>
              <div className='flex justify-center'><img src={user.avatar} className='rounded-full' /></div>
              <div><YouTubeIcon className="youtube-icon-color" /> / <span className="youtube-icon-color">{dataName}</span></div>
            </>)}
          {dataId == 165223255295 && (
            <>
              <div className='flex justify-center'><img src={user.avatar} className='rounded-full' /></div>
              <div><TwitterIcon className="twitter-icon-color" /> / <span className="twitter-icon-color">{dataName}</span></div>
            </>
          )}
          {dataId == 16571806895 && (
            <>
              <div className='flex justify-center'><img src={user.avatar} className='rounded-full' /></div>
              <div><FacebookIcon className="fb-icon-color" /> / <span className="fb-icon-color">{dataName}</span></div>
            </>)}
        </span>
      </div>
      <div className="mt-1">
        <p className="text-6xl font-bold">{dataFollowers}</p>
        <p className="uppercase tracking-widest">followers</p>
        <p>ID: {dataId}</p>
        {dataPrevFollowers && (
          <p>
            {totalAdjustedFollowers > 0 ? (
              <p className="positive-rating text-2xl">
                +{totalAdjustedFollowers} from yesterday
              </p>
            ) : (
              <p className="negative-rating text-2xl">
                {totalAdjustedFollowers} from yesterday
              </p>
            )}
          </p>
        )}
      </div>
    </div>
  );
}

SocialCard.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  center: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired,
  dataId:PropTypes.number.isRequired,
  dataFollowers:PropTypes.number.isRequired,
  dataPrevFollowers:PropTypes.number.isRequired,
  bottom:PropTypes.string.isRequired
}
