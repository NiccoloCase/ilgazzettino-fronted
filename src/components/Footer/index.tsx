import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-5 border-top pt-3 text-muted small">
      <div className="container text-center">
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
          <span>CALTAGIRONE EDITORE</span>
          <span>IL MESSAGGERO</span>
          <span>IL MATTINO</span>
          <span>CORRIERE ADRIATICO</span>
          <span>QUOTIDIANO DI PUGLIA</span>
          <span>LEGGO</span>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
          <a href="#" className="text-muted text-decoration-none">
            Privacy Policy
          </a>
          <span className="vr" />
          <a href="#" className="text-muted text-decoration-none">
            Cookie Policy
          </a>
          <span className="vr" />
          <a href="#" className="text-muted text-decoration-none">
            Informazioni legali
          </a>
          <span className="vr" />
          <a href="#" className="text-muted text-decoration-none">
            Preferenze cookie
          </a>
          <span className="vr" />
          <a href="#" className="text-muted text-decoration-none">
            Whistleblowing
          </a>
        </div>

        <div className="mb-2">
          <span>
            Società editrice © 2025 Il Gazzettino | C.F. 00744300286 P. IVA
            02742610278 |{" "}
            <a href="#" className="text-muted text-decoration-none">
              CONTATTI
            </a>{" "}
            |{" "}
            <a href="#" className="text-muted text-decoration-none">
              PUBBLICITÁ
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
