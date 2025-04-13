import React, { useMemo, useState } from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUserCircle,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { palette } from "../../config";

import "./Navbar.scss";

const GazzettinoNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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

  return (
    <>
      <header
        className="Navbar border-bottom bg-white w-100 py-1 position-relative"
        style={{ fontSize: "14px" }}
      >
        <Container fluid>
          <div className="d-flex justify-content-between align-items-center position-relative">
            {/* Colonna sinistra */}
            <div className="d-flex align-items-center z-1">
              <Hamburger
                toggled={menuOpen}
                toggle={setMenuOpen}
                size={20}
                label="Menu"
              />
              <span className="fw-bold d-none d-md-inline ms-2">MENU</span>
              <FontAwesomeIcon icon={faSearch} className="ms-4" fontSize={17} />
              <span className="ms-1 text-secondary">CERCA</span>
            </div>

            {/* Testo centrale assoluto */}
            <div
              className="position-absolute start-50 translate-middle-x "
              style={{
                pointerEvents: "none",
                fontWeight: 400,
                fontSize: "13px",
                color: "rgb(94, 94, 94) !important",
              }}
            >
              {updateTimeText}
            </div>

            {/* Colonna destra */}
            <div className="d-flex align-items-center z-1">
              <FontAwesomeIcon icon={faBell} fontSize={25} color="#CCCCCC" />
              <div className="d-flex ps-5">
                <a
                  href="https://www.facebook.com/gazzettino.it"
                  title="seguici su facebook"
                  className="me-3"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    color="#3C5997"
                    fontSize={17}
                  />
                </a>
                <a
                  href="https://x.com/Gazzettino"
                  title="seguici su twitter"
                  className="me-3"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    color="#000"
                    fontSize={20}
                  />
                </a>
              </div>
              <span className="me-3">
                <small>ACCEDI</small>
              </span>
              <span style={{ color: palette.primary }} className="fw-bold">
                <small>PROMO FLASH</small>
              </span>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <section className="bg-primary text-white px-3 py-3 d-md-none">
          <h2 className="h5 mb-3">SEZIONI</h2>
          <div className="row">
            <div className="col-6">
              <Nav className="flex-column" as="nav">
                {[
                  "Home",
                  "Nordest",
                  "Italia",
                  "Economia",
                  "Moltodonna",
                  "Obbligati a crescere",
                  "Sport",
                  "Esteri",
                  "Tecnologia",
                  "Cultura e Spettacoli",
                ].map((section) => (
                  <Nav.Link key={section} className="text-white" href="#">
                    {section}
                  </Nav.Link>
                ))}
              </Nav>
            </div>
            <div className="col-6">
              <Nav className="flex-column" as="nav">
                {[
                  "Gossip",
                  "Le altre",
                  "Animali",
                  "Blog",
                  "Viaggi",
                  "Salute",
                  "Partner",
                  "Motori",
                  "Europa",
                  "Ultimissime",
                ].map((section) => (
                  <Nav.Link key={section} className="text-white" href="#">
                    {section}
                  </Nav.Link>
                ))}
              </Nav>
            </div>
          </div>
          <h2 className="h5 mt-4">MULTIMEDIA</h2>
          <h2 className="h5 mt-2">SERVIZI</h2>
        </section>
      )}
    </>
  );
};

export default GazzettinoNavbar;
