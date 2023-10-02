/* eslint react/prop-types: 0 */

export default function DashboardHeader({followersTotal, color}) {
  const h1Header = "text-black text-3xl font-bold " + color;
  const pHeader = "italic text-sm " + color;
  return (
    <>
      <h1 className={h1Header}>Social Media Dashboard</h1>
      <p className={pHeader}>Total Followers: {followersTotal}</p>   
    </>
  )
}
