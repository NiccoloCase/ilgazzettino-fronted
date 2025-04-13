import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUserCircle,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const GazzettinoNavbar: React.FC = () => {
  return (
    <>
      {/* Top bar */}
      <header
        className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom bg-white"
        style={{ fontSize: "14px" }}
      >
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faBars} className="me-2 d-md-none" size="lg" />
          <span className="fw-bold d-none d-md-inline">MENU</span>
          <span className="ms-3 text-secondary">CERCA</span>
        </div>
        <div className="text-secondary">Domenica 13 Aprile – agg. 18:52</div>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faBell} className="me-3 text-muted" />
          <FontAwesomeIcon icon={faXmark} className="me-2" />
          <span className="fw-bold me-3">ACCEDI</span>
          <span className="text-warning fw-bold">PROMO FLASH</span>
        </div>
      </header>

      {/* Main Navbar */}
      <Navbar expand="lg" className="bg-white border-bottom" as="nav">
        <Container fluid className="px-3">
          <Navbar.Brand href="#" className="fw-bold">
            <span className="text-primary">IL GAZZETTINO</span>
            <span className="text-warning">.it</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex mx-auto my-2 my-lg-0 w-50" role="search">
              <FormControl
                type="search"
                placeholder="Ricerca su Il Gazzettino"
                className="me-2 rounded"
                aria-label="Search"
              />
            </Form>
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll as="ul">
              <li className="nav-item">
                <FontAwesomeIcon icon={faBell} className="me-3 text-danger" />
              </li>
              <li className="nav-item">
                <FontAwesomeIcon icon={faUserCircle} size="lg" />
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Section Menu */}
      <section className="bg-primary text-white px-3 py-3">
        <h2 className="h5 mb-3">SEZIONI</h2>
        <div className="row">
          <div className="col-6 col-md-3">
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
          <div className="col-6 col-md-3">
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
    </>
  );
};

export default GazzettinoNavbar;
