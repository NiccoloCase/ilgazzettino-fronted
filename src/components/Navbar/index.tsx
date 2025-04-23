import React, { useMemo, useState, useEffect, useRef } from "react";
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { palette } from "../../config";
import "./Navbar.scss";
import NotificationBell from "../NotificationBell";
import { SearchBar } from "../SearchBar";
import { useStore } from "../../store";
import { useDownBreakpoint } from "../../theme";
import classNames from "classnames";
import { menuData } from "../Drawer/menuData";

const Navbar: React.FC = () => {
  // Se l'header è uscito dalla view port (desktop)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  // Altezza dell'header
  const [headerHeight, setHeaderHeight] = useState(0);
  // Riferimento all'header
  const headerRef = useRef<HTMLElement | null>(null);
  // Drawer
  const isDrawerOpen = useStore((s) => s.isDrawerOpen);
  const setIsDrawerOpen = useStore((s) => s.setIsDrawerOpen);
  // Mobile Menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Se siamo su schermo mobile
  const isMobile = useDownBreakpoint("md");
  // Sezioni espanse nel menu mobile
  const [mobileMenuExpandedSections, setMobileMenuExpandedSections] = useState<
    string[]
  >(["SEZIONI"]);

  const isMenuOpen = useMemo(() => {
    return isDrawerOpen || isMobileMenuOpen;
  }, [isDrawerOpen, isMobileMenuOpen]);

  useEffect(() => {
    // Per evitare bugs su mobile sull'ombra della navbar
    if (isMobile && isHeaderHidden) setIsHeaderHidden(false);

    // Chiude drawer o mobile menu quando l'aspect ratio cambia per evitare bugs
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else if (isMobile && isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  }, [isMobile]);

  // Impedisce lo scroll della pagina quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = !isMobileMenuOpen ? "auto" : "hidden";
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    if (isMobile) {
      setIsMobileMenuOpen((s) => !s);
    } else {
      setIsDrawerOpen(!isDrawerOpen);
    }
  };

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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight, isMobile]);

  const toggleSection = (title: string) => {
    setMobileMenuExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const renderUpdateTime = () => {
    return (
      <div className="update-time-text">
        <time dateTime={new Date().toLocaleDateString()}>{updateTimeText}</time>
      </div>
    );
  };

  return (
    <>
      {!isMobileMenuOpen && (
        <div className="mobile-adv text-secondary text-center py-5 d-block d-sm-none">
          <small>adv</small>
        </div>
      )}
      <header
        ref={headerRef}
        className={
          "Navbar border-bottom bg-white w-100 py-1 " +
          (isMobile ? "" : isHeaderHidden ? "fixed-nav" : "position-relative")
        }
        style={{ fontSize: "14px" }}
      >
        <div className="d-flex justify-content-between align-items-center position-relative">
          <div className="d-flex align-items-center z-1">
            <button
              className="d-flex align-items-center border-0 p-0 m-0 bg-transparent"
              onClick={toggleMenu}
            >
              <Hamburger toggled={isMenuOpen} size={20} label="Menu" />
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
            <div className="d-flex ps-3 social-btn">
              <a
                href="https://www.facebook.com/gazzettino.it"
                className="me-3"
                aria-label="See on facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  color="#3C5997"
                  fontSize={17}
                />
              </a>
              <a
                href="https://x.com/Gazzettino"
                className="me-3"
                aria-label="See on X"
              >
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
      {/** MOBILE UPDATE TIME */}
      <section className="mobile-time-section d-block d-md-none border-bottom ">
        {renderUpdateTime()}
      </section>

      {/** MOBILE MENU */}
      <nav
        className={classNames("mobile-menu", { open: isMobileMenuOpen })}
        style={{
          height: "calc(100vh - " + headerHeight + "px )",
          marginTop: headerHeight + "px",
        }}
      >
        <div className="mobile-search mb-5">
          <input type="text" placeholder="Ricerca su Il Gazzettino" />
          <FontAwesomeIcon icon={faSearch} />
        </div>

        {menuData.map((section, idx) => (
          <div key={idx} className="mb-3 border-bottom border-black ">
            <button
              className="fw-bold text-uppercase pb-1 mb-2"
              onClick={() => {
                toggleSection(section.title);
              }}
            >
              {section.title}{" "}
              <FontAwesomeIcon
                icon={
                  mobileMenuExpandedSections.includes(section.title)
                    ? faChevronUp
                    : faChevronDown
                }
                className="ms-2"
                style={{ fontSize: "0.8rem" }}
              />
            </button>
            {mobileMenuExpandedSections.includes(section.title) && (
              <div className="d-flex flex-wrap">
                {section.items.map((item, subIdx) => (
                  <div key={subIdx} className="col-6 mb-1">
                    {item.expandable ? (
                      <>
                        {item.title.charAt(0).toUpperCase() +
                          item.title.slice(1).toLocaleLowerCase()}{" "}
                        <span className="text-info">▾</span>
                      </>
                    ) : (
                      <p>
                        {item.title.charAt(0).toUpperCase() +
                          item.title.slice(1).toLocaleLowerCase()}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
