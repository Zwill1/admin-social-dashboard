import DashboardHeader from "./DashboardHeader";
import SocialCard from "./SocialCard";

import useFetch from "../hooks/useFetch";

export default function AdminDashboard() {
  const {data, loading, error } = useFetch("src/admin/data/SocialData.json");
  // When getting data, set to "loading".
  if (loading) return <h1>Loading data...</h1>;

  if (data === null)
    return <div>No data available. Please try again later.</div>;

  // Return error in console if one shows up
  if (error) console.log("there is an error " + error);

  console.log("this is the data ", data);
  console.log(data[0].facebook_name);
  return (
    <>
      <section className="w-full text-center pt-10">
        <DashboardHeader />
      </section>
      <section>
        <div className="w-10/12 mx-auto flex justify-between pt-10 pb-10">
          <SocialCard dataName={data[0].facebook_name} bgcolor="bg-gray-600" width="w-full" center="text-center" />
          <SocialCard bgcolor="bg-gray-200" width="w-full" center="text-center" />
          <SocialCard bgcolor="bg-gray-400" width="w-full" center="text-center" />
          <SocialCard bgcolor="bg-gray-100" width="w-full" center="text-center" />
        </div>
      </section>
    </>
  )
}
