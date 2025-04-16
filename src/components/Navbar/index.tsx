import React, { useMemo, useState, useEffect, useRef } from "react";
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { palette } from "../../config";

import "./Navbar.scss";
import NotificationBell from "../NotificationBell";
import { SearchBar } from "../SearchBar";
import { useStore } from "../../store";
import { useDownBreakpoint } from "../../theme";

const GazzettinoNavbar: React.FC = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  const isDrawerOpen = useStore((s) => s.isDrawerOpen);
  const setIsDrawerOpen = useStore((s) => s.setIsDrawerOpen);

  const isMobile = useDownBreakpoint("md");

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
    if (isMobile) return;
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
  }, [lastScrollY, headerHeight, isMobile]);

  const renderUpdateTime = () => {
    return (
      <div className="update-time-text">
        <time dateTime={new Date().toLocaleDateString()}>{updateTimeText}</time>
      </div>
    );
  };

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
            <FontAwesomeIcon
              icon={faSearch}
              className="ms-4 desktop-search-bar"
              fontSize={17}
            />
            <SearchBar className="desktop-search-bar" />
          </div>

          <div className="position-absolute start-50 translate-middle-x">
            {!isHeaderHidden && !isMobile ? (
              renderUpdateTime()
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
            <div className="d-flex ps-4 social-btn">
              <a href="https://www.facebook.com/gazzettino.it" className="me-3">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  color="#3C5997"
                  fontSize={17}
                />
              </a>
              <a href="https://x.com/Gazzettino" className="me-3">
                <FontAwesomeIcon icon={faXTwitter} color="#000" fontSize={20} />
              </a>
            </div>
            <span className="me-3 nav-btn login-btn">
              <small>ACCEDI</small>
            </span>
            <span
              style={{ color: palette.primary }}
              className="fw-bold nav-btn promo-btn"
            >
              <small>PROMO FLASH</small>
            </span>
            <a href="#" className="ms-3 user-btn" aria-label="User Profile">
              <FontAwesomeIcon
                icon={faUserRegular}
                color="#000"
                fontSize={23}
                role="img"
                aria-hidden="false"
              />
            </a>
          </div>
        </div>
      </header>

      <section className="mobile-time-section d-block d-md-none border-bottom ">
        {renderUpdateTime()}
      </section>
    </>
  );
};

export default GazzettinoNavbar;
