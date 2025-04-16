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
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="PromoBanner fixed-bottom" aria-label="Special promotion">
      <div className="promo-content d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
        <section aria-labelledby="promo-heading promo-subheading">
          <h2 id="promo-heading" className="h3">
            <strong>Promo 3 Mesi a 9€</strong>
          </h2>
          <p id="promo-subheading" className="h5">
            Per te l'Edizione Digitale e tutto il Sito
          </p>
        </section>

        <div className="promo-actions d-flex flex-row flex-sm-column justify-content-start justify-content-sm-center align-items-start align-items-sm-end gap-2 mt-3 mt-sm-0">
          <button
            className="close-button order-2 order-sm-1"
            onClick={handleClose}
            aria-label="Close promotion banner"
          >
            <FontAwesomeIcon icon={faX} size="lg" aria-hidden="true" />
          </button>

          <button
            className="subscribe-button order-1 order-sm-2"
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
