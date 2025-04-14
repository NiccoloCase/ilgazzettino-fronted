import { Outlet } from "react-router-dom";
import GazzettinoNavbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <>
      <GazzettinoNavbar />
      <Outlet />
      <Footer />
    </>
  );
};
