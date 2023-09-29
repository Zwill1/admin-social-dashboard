/* eslint react/prop-types: 0 */

export default function SocialCard({bgcolor, width, center}) {
    const headerStyle = bgcolor + " " + width + " " + center + " " + "pt-8 pb-8 mx-4";
  return (
    <div className={headerStyle}>
      <div>
        <span>Social icon / Social handle</span>
      </div>
      <div className="mt-1">
        <p className="text-6xl font-bold">10205</p>
        <p className="uppercase tracking-widest">followers</p>
        <p>Increase/decrease numbers</p>
      </div>
    </div>
  )
}
