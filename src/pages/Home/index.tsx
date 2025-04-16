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
          <a href="#" key={i} className="mx-1 text-decoration-none link">
            {t}
          </a>
        ))}
      </div>

      <nav className="nav justify-content-center border-bottom py-2 d-none d-md-flex">
        {SECTIONS.map((s, i) => (
          <a href="#" key={i} className="nav-link px-2 text-dark">
            <small>{s}</small>
          </a>
        ))}
      </nav>

      <div
        className=" text-white text-center py-2 d-none d-md-block"
        style={{
          background: palette.primary,
        }}
      >
        {REGIONS.map((r, i) => (
          <a
            href="#"
            key={i}
            className="mx-2 text-white text-uppercase small text-decoration-none"
          >
            <small>{r}</small>
          </a>
        ))}
      </div>

      <div className="adv text-secondary text-center py-4 mt-3 d-none d-sm-block">
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
