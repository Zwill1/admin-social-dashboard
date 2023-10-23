import PropTypes from 'prop-types';

export default function DashboardHeader({followersTotal}) {
  return (
    <>
      <h1 id='text-header' className="text-3xl font-bold">Social Media Dashboard</h1>
      <p id='sub-header' className="italic text-sm">Total Followers: {followersTotal}</p>   
    </>
  )
}

DashboardHeader.propTypes = {
  followersTotal: PropTypes.number.isRequired
}