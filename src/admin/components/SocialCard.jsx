/* eslint react/prop-types: 0 */

//icons
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

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
    "pt-8 pb-8 mx-4 border-2 border-black";

  const totalAdjustedFollowers = dataFollowers - dataPrevFollowers;
  return (
    <div className={headerStyle}>
      <div>
        <span>
          {dataId == 1653345695 && (
            <div><InstagramIcon className="instagram-icon-color" /> / <span className="instagram-icon-color">{dataName}</span></div>
          )}
          {dataId == 16545433 && 
            <div><YouTubeIcon className="youtube-icon-color" /> / <span className="youtube-icon-color">{dataName}</span></div>}
          {dataId == 165223255295 && (
            <div><TwitterIcon className="twitter-icon-color" /> / <span className="twitter-icon-color">{dataName}</span></div>
          )}
          {dataId == 16571806895 && <div><FacebookIcon className="fb-icon-color" /> / <span className="fb-icon-color">{dataName}</span></div>}
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
