import PropTypes from 'prop-types';

//icons
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function OverviewCard({
  bgcolor,
  color,
  width,
  center,
  dataId,
  pagelike,
  pageview,
  pageyesterdaylike,
  pageviewyesterday,
  border,
  bottom
}) {
  const overviewStyle =
    bgcolor +
    " " +
    color +
    " " +
    width +
    " " +
    center +
    " " +
    border +
    " " +
    bottom +
    " " +
    "pt-8 pb-8 mx-4 border-2 border-black";

  const totalLikesOutput = pageyesterdaylike - pagelike;
  const totalViewOutput = pageview - pageviewyesterday;

  console.log("lets see here " + pageviewyesterday);

  return (
    <>
      <div className={overviewStyle}>
        <div className="flex mt-1 mb-2">
            {dataId == 1653345695 && (
              <p className="text-center w-full text-2xl"><InstagramIcon className="instagram-icon-color" /> Daily Numbers</p>
            )}
            {dataId == 16545433 && (
              <p className="text-center w-full text-2xl"><YouTubeIcon className="youtube-icon-color" /> Daily Numbers</p>
            )}
            {dataId == 165223255295 && (
              <p className="text-center w-full text-2xl"><TwitterIcon className="twitter-icon-color" /> Daily Numbers</p>
            )}
            {dataId == 16571806895 && (
              <p className="text-center w-full text-2xl"><FacebookIcon className="fb-icon-color" /> Daily Numbers</p>
            )}
        </div>
        <div className="mt-2 flex justify-around">
          <div>
            {pageview && <p className="italic">Page Views</p>}
            {pagelike && <p className="italic">Likes</p>}
          </div>
          <div>
            <span>
              {dataId == 1653345695 && (
                <>Difference</>
              )}
              {dataId == 16545433 && (
                <>Difference</>
              )}
              {dataId == 165223255295 && (
                <>Difference</>
              )}
              {dataId == 16571806895 && (
                <>Difference</>
              )}
            </span>
          </div>
        </div>
        <div className="mt-1 flex justify-around pt-2">
          <div className="text-3xl font-semibold">
            {pageview}
            {pagelike}
          </div>
          {pageviewyesterday && (
            <div className="text-1xl font-semibold">
              {totalViewOutput < 0 ? (
                <p className="negative-rating text-2xl">{totalViewOutput}</p>
              ) : (
                <p className="positive-rating text-2xl">+{totalViewOutput}</p>
              )}
            </div>
          )}

          {pageyesterdaylike && (
            <div className="text-1xl font-semibold">
              {totalLikesOutput < 0 ? (
                <p className="negative-rating text-2xl">{totalLikesOutput}</p>
              ) : (
                <p className="positive-rating text-2xl">+{totalLikesOutput}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

OverviewCard.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  center: PropTypes.string.isRequired,
  dataId: PropTypes.number.isRequired,
  pagelike: PropTypes.number,
  pageview: PropTypes.number,
  pageyesterdaylike: PropTypes.number,
  pageviewyesterday: PropTypes.number,
  border: PropTypes.string.isRequired,
  bottom:PropTypes.string.isRequired
}