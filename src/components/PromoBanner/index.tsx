import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PromoBanner.scss";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const subscribe = () => {
    enqueueSnackbar("Grazie per esserti iscritto alla nostra newsletter!", {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="PromoBanner fixed-bottom d-flex justify-content-between align-items-center"
      style={{
        background:
          "linear-gradient(45deg, rgb(253, 204, 3) 0px, rgb(253, 204, 3) 100%)",
      }}
    >
      <div>
        <h3>
          <strong>Promo 3 Mesi a 9€</strong>
        </h3>
        <h5>Per te l'Edizione Digitale e tutto il Sito</h5>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-end">
        <button
          className="close-button"
          onClick={handleClose}
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faX} size="lg" />
        </button>

        <button
          className="subscribe-button"
          onClick={subscribe}
          aria-label="Subscribe"
        >
          <strong>ABBONATI ORA</strong>
        </button>
      </div>
    </div>
  );
};
