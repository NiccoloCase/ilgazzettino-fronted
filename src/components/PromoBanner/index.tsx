import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PromoBanner.scss";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(
    // TODO: before production set to true

    false
  );

  const subscribe = () => {
    enqueueSnackbar("Grazie per esserti iscritto alla nostra newsletter!", {
      variant: "success",
      autoHideDuration: 3000,
    });
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      className="PromoBanner fixed-bottom"
      aria-label="Special promotion"
      style={{
        background:
          "linear-gradient(45deg, rgb(253, 204, 3) 0px, rgb(253, 204, 3) 100%)",
      }}
    >
      <div className="promo-content d-flex justify-content-between align-items-center">
        <section aria-labelledby="promo-heading promo-subheading">
          <h2 id="promo-heading" className="h3">
            <strong>Promo 3 Mesi a 9€</strong>
          </h2>
          <p id="promo-subheading" className="h5">
            Per te l'Edizione Digitale e tutto il Sito
          </p>
        </section>

        <div className="promo-actions d-flex flex-column justify-content-center align-items-end">
          <button
            className="close-button"
            onClick={handleClose}
            aria-label="Close promotion banner"
          >
            <FontAwesomeIcon icon={faX} size="lg" aria-hidden="true" />
          </button>

          <button
            className="subscribe-button"
            onClick={subscribe}
            aria-label="Subscribe to newsletter"
          >
            <strong>ABBONATI ORA</strong>
          </button>
        </div>
      </div>
    </aside>
  );
};
