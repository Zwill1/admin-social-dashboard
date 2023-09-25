import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AdminDashboard from "../components/AdminDashboard";

export default function AppLayout() {
  return (
    <>
      <Nav />
      <AdminDashboard />
      <Footer />
    </>
  );
}
