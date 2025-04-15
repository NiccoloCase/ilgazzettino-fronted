import { Outlet } from "react-router-dom";
import GazzettinoNavbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Drawer } from "../components/Drawer";
import { useStore } from "../store";

export const Layout = () => {
  const isDrawerOpen = useStore((s) => s.isDrawerOpen);

  return (
    <div className="drawer-wrapper">
      <Drawer />
      <div className={`content ${isDrawerOpen ? "shifted" : ""}`}>
        <GazzettinoNavbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
