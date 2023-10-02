/* eslint react/prop-types: 0 */

export default function OverviewCard({bgcolor, color, width, center}) {
    const overviewStyle = bgcolor + " " + color + " " + width + " " + center + " " + "pt-8 pb-8 mx-4 border-2 border-black";
  return (
    <>
        <div className={overviewStyle}>
        <div className="mt-1">
            <p className="text-6xl font-bold"></p>
            <p className="uppercase tracking-widest">followers</p>
            <p>ID:</p>
            <p>Increase/decrease numbers</p>
        </div>
        </div>
    </>
  )
}
