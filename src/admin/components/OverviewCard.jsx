/* eslint react/prop-types: 0 */

//icons
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function OverviewCard({bgcolor, color, width, center, dataId, pagelike, pageview, pageyesterdaylike, pageviewyesterday}) {
    const overviewStyle = bgcolor + " " + color + " " + width + " " + center + " " + "pt-8 pb-8 mx-4 border-2 border-black";
    // console.log("this is the data " + dataId);
    // console.log("pageview: " + pageview);
    // console.log("pagelike: " + pagelike);
    // console.log("yesterday like " + pageyesterdaylike);

    const totalLikesOutput = pageyesterdaylike - pagelike;
    const totalViewOutput = pageview - pageviewyesterday;
    // console.log("this is the total likes " + totalLikesOutput);

    console.log("lets see here " + pageviewyesterday);

  return (
    <>
        <div className={overviewStyle}>
        <div className="mt-1 flex justify-around">
          <div>{pageview && <p>Page Views</p>}{pagelike && <p>Likes</p>}</div>
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
          }</span>
          </div>
        </div>
        <div className="mt-1 flex justify-around pt-2">
          <div className='text-3xl font-semibold'>{pageview}{pagelike}</div>
          {/* <div className='text-3xl font-semibold'>{pageyesterdaylike && <p>{pagelike - pageyesterdaylike}</p>}</div> */}
          {pageviewyesterday && <div className='text-1xl font-semibold'>{totalViewOutput < 0 ? <p className='negative-rating'>{totalViewOutput}</p> : <p className='positive-rating'>+{totalViewOutput}</p>}</div>}
          
          {pageyesterdaylike && <div className='text-1xl font-semibold'>{totalLikesOutput < 0 ? <p className='negative-rating'>{totalLikesOutput}</p> : <p className='positive-rating'>+{totalLikesOutput}</p>}</div>}
        </div>
        </div>
    </>
  )
}
