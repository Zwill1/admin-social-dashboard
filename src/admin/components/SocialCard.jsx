/* eslint react/prop-types: 0 */

export default function SocialCard({bgcolor, width, center}) {
    const headerStyle = bgcolor + " " + width + " " + center;
  return (
    <div className={headerStyle}>SocialCard</div>
  )
}
