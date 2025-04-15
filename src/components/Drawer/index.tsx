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
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "SEZIONI",
  ]);

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <nav
      className={`drawer ${isOpen ? "open" : ""}`}
      aria-label="Main navigation"
    >
      <div className="p-3">
        {menuData.map((section, i) => {
          const sectionId = `section-${i}`;
          const isExpanded = expandedSections.includes(section.title);

          return (
            <section key={i} className="mb-3">
              <button
                className="btn w-100 d-flex align-items-center text-start fw-bold text-uppercase py-2"
                onClick={() => toggleSection(section.title)}
                aria-expanded={isExpanded}
                aria-controls={sectionId}
                id={`toggle-${sectionId}`}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                {section.expandable !== false && (
                  <span style={{ marginRight: "1rem" }}>
                    <FontAwesomeIcon
                      icon={isExpanded ? faChevronUp : faChevronDown}
                      className="ms-2"
                      style={{ fontSize: "0.8rem" }}
                    />
                  </span>
                )}

                <small>{section.title}</small>
              </button>

              {section.items.length > 0 && isExpanded && (
                <ul
                  className="nav flex-column ps-3 mt-2"
                  role="menu"
                  aria-labelledby={`toggle-${sectionId}`}
                  id={sectionId}
                >
                  {section.items.map((item, idx) => (
                    <li key={idx} className="nav-item" role="none">
                      <a
                        href="#"
                        className="nav-link px-0 py-1 d-flex align-items-center"
                        role="menuitem"
                      >
                        <div style={{ width: "1rem", marginLeft: "1.5rem" }}>
                          {item.expandable && (
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              style={{ fontSize: "0.7rem" }}
                              color="#959595"
                            />
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
            </section>
          );
        })}
      </div>
    </nav>
  );
};
