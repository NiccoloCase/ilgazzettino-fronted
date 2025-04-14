import React from "react";
import { palette } from "../../config";
import GazzettinoNavbar from "../../components/Navbar";

import "./HomePage.scss";
import { PromoBanner } from "../../components/PromoBanner";

export const HomePage: React.FC = () => {
  const topics = [
    "Liliana Resinovich",
    "Luca Zaia",
    "Filippo Turetta",
    "Cristian Buonaiuto",
    "Baby Gang",
  ];
  const sections = [
    "Italia",
    "Economia",
    "Sport",
    "Esteri",
    "Tecnologia",
    "Cultura e Spettacoli",
    "Gossip",
    "Animali",
    "Blog",
    "Viaggi",
    "Salute",
    "Motori",
    "Europa",
  ];
  const regions = [
    "VENEZIA – MESTRE",
    "TREVISO",
    "PADOVA",
    "BELLUNO",
    "ROVIGO",
    "VICENZA – BASSANO",
    "VERONA",
    "PORDENONE",
    "UDINE",
    "TRIESTE",
    "NORDEST",
  ];

  const news = [
    {
      title:
        "Neonato seviziato dal papà 22enne, il piccolo è guarito: è sopravvissuto al genitore che gli metteva le dita in gola per avere i sussidi per la disabilità",
      img: "https://via.placeholder.com/300x200?text=Neonato",
      author: "Nicola Munaro",
    },
    {
      title:
        "«Non voglio affittare a un marocchino». Assessore neopapà discriminato mentre cerca una casa più grande dove vivere con le sue gemelline VIDEO",
      img: "https://via.placeholder.com/300x200?text=Assessore",
      author: "Redazione Treviso",
      video: true,
    },
    {
      title:
        "Bambino di 3 anni fugge dall’asilo e vaga per le strade da solo, scatta l'allarme ai carabinieri dalla scuola: il piccolo ritrovato in lacrime",
      img: "https://via.placeholder.com/300x200?text=Bambino",
      author: "Mauro Favaro",
    },
    {
      title:
        "Restaurano un palazzo di fronte al ponte di Rialto e sotto l'intonaco appare un affresco del sedicesimo secolo",
      img: "https://via.placeholder.com/300x200?text=Rialto",
    },
  ];

  return (
    <div className="HomePage container-fluid ">
      {/* Logo */}
      <div className="text-center my-3">
        <img
          src="/assets/logo.png"
          alt="ilgazzettino"
          style={{
            height: "39px",
          }}
        />
      </div>

      {/* Topics */}
      <div className="text-center small  border-top border-bottom py-0 mt-1">
        <span style={{ color: "#000" }}>Temi caldi:</span>
        {topics.map((t, i) => (
          <a
            href="#"
            key={i}
            className="mx-1 text-decoration-none text-primary link"
          >
            {t}
          </a>
        ))}
      </div>

      {/* Main Navbar */}
      <nav className="nav justify-content-center border-bottom py-2">
        {sections.map((s, i) => (
          <a href="#" key={i} className="nav-link px-2 text-dark">
            {s}
          </a>
        ))}
      </nav>

      {/* Region Tabs */}
      <div
        className=" text-white text-center py-2"
        style={{
          background: palette.primary,
        }}
      >
        {regions.map((r, i) => (
          <a
            href="#"
            key={i}
            className="mx-2 text-white text-uppercase small text-decoration-none"
          >
            <small>{r}</small>
          </a>
        ))}
      </div>

      {/* ADV */}
      <div className="bg-secondary text-white text-center py-4">adv</div>

      {/* News Grid */}
      <div className="container my-4">
        <div className="row g-4">
          {[...news, ...news, ...news, ...news, ...news, ...news].map(
            (item, i) => (
              <div className="col-12 col-md-6 col-lg-3" key={i}>
                <div className="card h-100">
                  <div className="position-relative">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.title.slice(0, 20)}
                    />
                    {item.video && (
                      <span className="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small">
                        ▶
                      </span>
                    )}
                  </div>
                  <div className="card-body">
                    <p className="card-text small fw-bold">{item.title}</p>
                    {item.author && (
                      <p className="card-text text-muted small">
                        di {item.author}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <PromoBanner />
    </div>
  );
};
