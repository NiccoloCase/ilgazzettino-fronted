import React from "react";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="Footer mt-5 text-muted small" role="contentinfo">
      <div className="container">
        <nav className="row" aria-label="Related publications">
          <div className="col-md-8 text-left left-links">
            <ul className="list-unstyled d-flex flex-wrap">
              <li>
                <a href="#" className="px-2">
                  CALTAGIRONE EDITORE
                </a>
              </li>
              <li>
                <a href="#" className="px-2">
                  IL MESSAGGERO
                </a>
              </li>
              <li>
                <a href="#" className="px-2">
                  IL MATTINO
                </a>
              </li>
              <li>
                <a href="#" className="px-2">
                  CORRIERE ADRIATICO
                </a>
              </li>
              <li>
                <a href="#" className="px-2">
                  QUOTIDIANO DI PUGLIA
                </a>
              </li>
              <li>
                <a href="#" className="px-2">
                  LEGGO
                </a>
              </li>
            </ul>
          </div>

          <nav
            className="col-md-4 text-right right-links"
            aria-label="Legal links"
          >
            <ul className="list-unstyled d-flex flex-wrap justify-content-end">
              <li>
                <a href="#" className="px-2">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="px-2">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="px-2">
                  Informazioni legali
                </a>
              </li>
              <li>
                <a href="#" className="px-2">
                  Preferenze cookie
                </a>
              </li>
              <li>
                <a href="#" className="ps-2">
                  Whistleblowing
                </a>
              </li>
            </ul>
          </nav>
        </nav>

        <div className="mt-4 mb-2 bottom-links">
          <address>
            <p className="mb-0">
              Società editrice © 2025 Il Gazzettino
              <span>C.F. 00744300286 P.IVA 02742610278</span>
              <a href="#" className="text-muted text-decoration-none ps-2">
                CONTATTI
              </a>
              <a href="#" className="text-muted text-decoration-none ps-2">
                PUBBLICITÁ
              </a>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
};
