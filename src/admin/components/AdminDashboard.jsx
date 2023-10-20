import DashboardHeader from "./DashboardHeader";
import SocialCard from "./SocialCard";

import useFetch from "../hooks/useFetch";
import OverviewHeader from "./OverviewHeader";
import OverviewCard from "./OverviewCard";

export default function AdminDashboard() {
  const {data, loading, error } = useFetch("src/admin/data/SocialData.json");
  // When getting data, set to "loading".
  if (loading) return <h1>Loading data...</h1>;

  if (data === null)
    return <div>No data available. Please try again later.</div>;

  // Return error in console if one shows up
  if (error) console.log("there is an error " + error);

  const getTotalFollower = data[0].instagram_followers + data[0].youtube_followers + data[0].twitter_followers + data[0].facebook_followers;

  return (
    <>
      <section className="w-full text-center pt-10">
        <DashboardHeader color="dark-mode" followersTotal={getTotalFollower} />
      </section>

      {/* <section className=""> */}
        <div className="w-10/12 mx-auto lg:flex justify-between pt-10 pb-10">
          <SocialCard dataName={data[0].instagram_name} dataId={data[0].instagram_id} dataFollowers={data[0].instagram_followers} dataPrevFollowers={data[0].instagram_prev_day_followers} bgcolor="dark-mode-card-bg" border="instagram-border-color" color="dark-mode" width="w-full" center="text-center" />
          <SocialCard dataName={data[0].youtube_name} dataId={data[0].youtube_id} dataFollowers={data[0].youtube_followers} dataPrevFollowers={data[0].youtube_prev_day_followers} bgcolor="dark-mode-card-bg" border="youtube-border-color" color="dark-mode" width="w-full" center="text-center" />
          <SocialCard dataName={data[0].twitter_name} dataId={data[0].twitter_id} dataFollowers={data[0].twitter_followers} dataPrevFollowers={data[0].twitter_prev_day_followers} bgcolor="dark-mode-card-bg" border="twitter-border-color" color="dark-mode" width="w-full" center="text-center" />
          <SocialCard dataName={data[0].facebook_name} dataId={data[0].facebook_id} dataFollowers={data[0].facebook_followers} dataPrevFollowers={data[0].facebook_prev_day_followers} bgcolor="dark-mode-card-bg" border="fb-border-color" color="dark-mode" width="w-full" center="text-center" />
        </div>
      {/* </section> */}

      <section className="w-full text-center pt-10">
        <OverviewHeader color="dark-mode" />
      </section>
      <section>
        <div className="w-10/12 mx-auto flex justify-between pt-5 pb-5">
          <OverviewCard dataId={data[0].instagram_id} pageview={data[0].instagram_profile_views} pageviewyesterday={data[0].instagram_yesterday_views} bgcolor="dark-mode-card-bg" color="dark-mode" width="w-full" center="text-center" border="instagram-border-color" />
          <OverviewCard dataId={data[0].instagram_id} pagelike={data[0].instagram_like} pageyesterdaylike={data[0].instagram_yesterday_likes} bgcolor="dark-mode-card-bg" color="dark-mode" width="w-full" center="text-center" border="instagram-border-color" />
          <OverviewCard dataId={data[0].youtube_id} pageview={data[0].youtube_total_views} pageviewyesterday={data[0].youtube_yesterday_views} bgcolor="dark-mode-card-bg" color="dark-mode" width="w-full" center="text-center" border="youtube-border-color" />
          <OverviewCard dataId={data[0].youtube_id} pagelike={data[0].youtube_like} pageyesterdaylike={data[0].youtube_yesterday_likes} bgcolor="dark-mode-card-bg" color="dark-mode" width="w-full" center="text-center" border="youtube-border-color" />
        </div>
        <div className="w-10/12 mx-auto flex justify-between pt-5 pb-5">
          <OverviewCard dataId={data[0].twitter_id} pageview={data[0].twitter_retweets} pageviewyesterday={data[0].twitter_yesterday_retweets} bgcolor="dark-mode-card-bg" color="dark-mode" width="w-full" center="text-center" border="twitter-border-color" />
          <OverviewCard dataId={data[0].twitter_id} pagelike={data[0].twitter_like} pageyesterdaylike={data[0].twitter_yesterday_likes} bgcolor="dark-mode-card-bg" color="dark-mode" width="w-full" center="text-center" border="twitter-border-color" />
          <OverviewCard dataId={data[0].facebook_id} pageview={data[0].facebook_page_views} pageviewyesterday={data[0].facebook_yesterday_views} bgcolor="dark-mode-card-bg" color="dark-mode" width="w-full" center="text-center" border="fb-border-color" />
          <OverviewCard dataId={data[0].facebook_id} pagelike={data[0].facebook_like} pageyesterdaylike={data[0].facebook_yesterday_likes} bgcolor="dark-mode-card-bg" color="dark-mode" width="w-full" center="text-center" border="fb-border-color" />
        </div>
      </section>
    </>
  )
}