import React from "react";
import { palette } from "../../config";

type CategoryTitleProps = {
  title?: string;
  black?: boolean;
  logo?: string;
};

export const CategoryTitle = ({ title, black, logo }: CategoryTitleProps) => {
  if (!title && !logo) return null;
  return (
    <div style={{ display: "inline-block" }} className="w-100">
      <h3
        style={{
          color: black ? "#000" : "#055C85",
          fontWeight: 600,
          fontSize: "22px",
          textTransform: "uppercase",
          marginBottom: "4px",
          width: "100%",
        }}
      >
        {!!logo ? <img src={logo} alt="logo" height={20} /> : title}
      </h3>
      <div
        style={{
          height: "2px",
          backgroundColor: black ? "#000" : palette.primary,
          width: "100%",
        }}
      />
    </div>
  );
};
