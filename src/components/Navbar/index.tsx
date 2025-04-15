import React, { useMemo, useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { palette } from "../../config";

import "./Navbar.scss";
import NotificationBell from "../NotificationBell";
import { SearchBar } from "../SearchBar";
import { useStore } from "../../store";

const GazzettinoNavbar: React.FC = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  const isDrawerOpen = useStore((s) => s.isDrawerOpen);
  const setIsDrawerOpen = useStore((s) => s.setIsDrawerOpen);

  const updateTimeText = useMemo(() => {
    const date = new Date().toLocaleDateString("it-IT", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

    const capitalizeWords = (str: string) =>
      str.replace(/\b\w/g, (char) => char.toUpperCase());

    return (
      capitalizeWords(date) +
      " – agg. " +
      new Date().toLocaleTimeString("it-IT", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > headerHeight) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, headerHeight]);

  return (
    <>
      <header
        ref={headerRef}
        className={
          "Navbar border-bottom bg-white w-100 py-1 " +
          (isHeaderHidden ? "fixed-nav" : "position-relative")
        }
        style={{ fontSize: "14px" }}
      >
        <Container fluid className="p-0">
          <div className="d-flex justify-content-between align-items-center position-relative">
            <div className="d-flex align-items-center z-1">
              <button
                className="d-flex align-items-center border-0 p-0 m-0 bg-transparent"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              >
                <Hamburger toggled={isDrawerOpen} size={20} label="Menu" />
                <span className="fw-bold d-none d-md-inline ">
                  <small>MENU</small>
                </span>
              </button>
              <FontAwesomeIcon icon={faSearch} className="ms-4" fontSize={17} />
              <SearchBar />
            </div>

            <div className="position-absolute start-50 translate-middle-x">
              {!isHeaderHidden ? (
                <div
                  style={{
                    pointerEvents: "none",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "rgb(94, 94, 94)",
                  }}
                >
                  {updateTimeText}
                </div>
              ) : (
                <div>
                  <img
                    src="/assets/logo.png"
                    alt="ilgazzettino"
                    style={{
                      height: "16px",
                    }}
                  />
                </div>
              )}
            </div>

            <div className="d-flex align-items-center z-1">
              <NotificationBell />
              <div className="d-flex ps-4">
                <a
                  href="https://www.facebook.com/gazzettino.it"
                  className="me-3"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    color="#3C5997"
                    fontSize={17}
                  />
                </a>
                <a href="https://x.com/Gazzettino" className="me-3">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    color="#000"
                    fontSize={20}
                  />
                </a>
              </div>
              <span className="me-3 nav-btn">
                <small>ACCEDI</small>
              </span>
              <span
                style={{ color: palette.primary }}
                className="fw-bold nav-btn"
              >
                <small>PROMO FLASH</small>
              </span>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default GazzettinoNavbar;
