import React from "react";
import { palette } from "../../config";

type CategoryTitleProps = {
  title: string;
  black?: boolean;
};

export const CategoryTitle = ({ title, black }: CategoryTitleProps) => {
  return (
    <div style={{ display: "inline-block" }}>
      <h3
        style={{
          color: black ? "#000" : "#055C85",
          fontWeight: 600,
          fontSize: "22px",
          textTransform: "uppercase",
          marginBottom: "4px",
        }}
      >
        {title}
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
