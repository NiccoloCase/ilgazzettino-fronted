import React from "react";
import { palette } from "../../config";
import "./HomePage.scss";
import { PromoBanner } from "../../components/PromoBanner";
import { HotNews } from "../../components/HotNews";
import { HomePageMainSection } from "./MainSection";
import { VideoAD } from "../../components/VideoAD";
import { REGIONS, SECTIONS, TOPICS } from "./content";
import { useDownBreakpoint } from "../../theme";

export const HomePage: React.FC = () => {
  const isMobile = useDownBreakpoint("sm");

  return (
    <div className="HomePage container-fluid ">
      <div className="text-center my-3 d-none d-md-block">
        <img
          src="/assets/logo.png"
          alt="ilgazzettino"
          style={{
            height: "39px",
          }}
        />
      </div>

      <div className="text-center small  border-top border-bottom py-0 mt-1 d-none d-md-block">
        <span style={{ color: "#000", marginRight: "1rem" }}>Temi caldi:</span>
        {TOPICS.map((t, i) => (
          <a href="#" key={t + i} className="mx-1 hot-link hover-decoration">
            {t}
          </a>
        ))}
      </div>

      <nav className="nav justify-content-center border-bottom py-2 d-none d-md-flex ">
        {SECTIONS.map((s, i) => (
          <a
            href="#"
            key={s + i}
            className="nav-link px-2 text-dark hover-decoration"
          >
            <small>{s}</small>
          </a>
        ))}
      </nav>

      <div
        className=" text-white text-center d-none d-md-flex justify-content-center flex-wrap"
        style={{
          background: "color-mix(in srgb, var(--primary) 99%, black 1%)",
        }}
      >
        {REGIONS.map((r, i) => (
          <div className="h-100 region-btn py-2" key={"REGIONE:" + r + i}>
            <a
              href="#"
              className="mx-2 text-white text-uppercase small text-decoration-none"
            >
              <small>{r}</small>
            </a>
          </div>
        ))}
      </div>

      <div className="adv text-center py-4 mt-3 d-none d-sm-block">
        <small>adv</small>
      </div>

      <HotNews />
      <HomePageMainSection />

      {/* 
      
      TODO: active before prod
  
       <PromoBanner />
      {!isMobile && <VideoAD />}
      
      */}
    </div>
  );
};
