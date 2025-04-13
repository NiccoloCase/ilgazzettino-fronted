import { Outlet } from "react-router-dom";
import GazzettinoNavbar from "../components/Navbar";

export const Layout = () => {
  return (
    <>
      <GazzettinoNavbar />
      <Outlet />
    </>
  );
};
