import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Drawer } from "../components/Drawer";
import { useStore } from "../store";

export const Layout = () => {
  const isDrawerOpen = useStore((s) => s.isDrawerOpen);
  const setIsDrawerOpen = useStore((s) => s.setIsDrawerOpen);

  return (
    <div className="drawer-wrapper">
      <Drawer />
      <div
        className={`content ${isDrawerOpen ? "shifted" : ""}`}
        onClick={(e) => {
          if (isDrawerOpen) {
            e.preventDefault();
            setIsDrawerOpen(false);
          }
        }}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
