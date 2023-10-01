/* eslint react/prop-types: 0 */

export default function DashboardHeader({followersTotal}) {
  return (
    <>
      <h1 className="text-black text-3xl font-bold">Social Media Dashboard</h1>
      <p className="italic text-sm">Total Followers: {followersTotal}</p>   
    </>
  )
}
