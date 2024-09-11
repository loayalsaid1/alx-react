import React from "react";
import "./Footer.css";

export default function () {
  return (
    <p>
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </p>
  );
}
