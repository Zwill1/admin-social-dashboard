import PropTypes from 'prop-types';

export default function OverviewHeader({color}) {
    const h2Header = "text-black text-3xl font-bold " + color;
    const pHeaders = "italic text-sm " + color;
  return (
    <>
    <h2 className={h2Header}>Overview - Today</h2>
    <p className={pHeaders}>See below for social media counts</p>   
  </>
  )
}

OverviewHeader.propTypes = {
  color: PropTypes.string.isRequired
}