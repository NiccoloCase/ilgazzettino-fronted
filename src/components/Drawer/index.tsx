import React, { useState } from "react";
import "./Drawer.scss";
import { useStore } from "../../store";
import { menuData } from "./menuData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

export const Drawer: React.FC = () => {
  const isOpen = useStore((s) => s.isDrawerOpen);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="p-3">
        {menuData.map((section, i) => (
          <div key={i} className="mb-3">
            <button
              className="btn w-100 d-flex align-items-center text-start fw-bold text-uppercase  py-2"
              onClick={() => toggleSection(section.title)}
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              {section.expandable !== false && (
                <span style={{ marginRight: "1rem" }}>
                  <FontAwesomeIcon
                    icon={
                      expandedSections.includes(section.title)
                        ? faChevronUp
                        : faChevronDown
                    }
                    className="ms-2"
                    style={{ fontSize: "0.8rem" }}
                  />
                </span>
              )}

              <small>{section.title}</small>
            </button>

            {section.items.length > 0 &&
              expandedSections.includes(section.title) && (
                <ul className="nav flex-column ps-3 mt-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="nav-item">
                      <a
                        href={"#"}
                        className="nav-link px-0 py-1 d-flex align-items-center"
                      >
                        <div style={{ width: "1rem", marginLeft: "1.5rem" }}>
                          {item.expandable && (
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              style={{ fontSize: "0.7rem" }}
                              color="#959595"
                            ></FontAwesomeIcon>
                          )}
                        </div>
                        <span className="text-dark">
                          <small>{item.title}</small>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};
