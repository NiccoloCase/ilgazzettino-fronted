import React from "react";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="Footer mt-5 text-muted small">
      <div className="row">
        <div className="col-8 text-left left-links">
          <a href="#">CALTAGIRONE EDITORE</a>
          <a href="#">IL MESSAGGERO</a>
          <a href="#">IL MATTINO</a>
          <a href="#">CORRIERE ADRIATICO</a>
          <a href="#">QUOTIDIANO DI PUGLIA</a>
          <a href="#">LEGGO</a>
        </div>

        <div className="col-4 text-right right-links ">
          <a href="#">Privacy Policy </a>

          <a href="#">Cookie Policy</a>

          <a href="#">Informazioni legali</a>

          <a href="#">Preferenze cookie</a>

          <a href="#">Whistleblowing</a>
        </div>
      </div>

      <div className="mt-4 mb-2 bottom-links">
        <span>
          Società editrice © 2025 Il Gazzettino
          <span>C.F. 00744300286 P. IVA 02742610278</span>{" "}
          <a href="#" className="text-muted text-decoration-none">
            CONTATTI
          </a>{" "}
          <a href="#" className="text-muted text-decoration-none">
            PUBBLICITÁ
          </a>
        </span>
      </div>
    </footer>
  );
};
