import DashboardHeader from "./DashboardHeader";
import SocialCard from "./SocialCard";

export default function AdminDashboard() {
  return (
    <>
      <section className="w-full text-center pt-10">
        <DashboardHeader />
      </section>
      <section>
        <div className="w-10/12 mx-auto flex justify-between pt-10 pb-10">
          <SocialCard bgcolor="bg-gray-600" width="w-full" center="text-center" />
          <SocialCard bgcolor="bg-gray-200" width="w-full" center="text-center" />
          <SocialCard bgcolor="bg-gray-400" width="w-full" center="text-center" />
          <SocialCard bgcolor="bg-gray-100" width="w-full" center="text-center" />
        </div>
      </section>
    </>
  )
}
