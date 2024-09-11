import React from "react";
import { getFooterCopy, getFullYear } from '../utils/utils';1
import "./Footer.css";

export default function () {
  return (
    <p>
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </p>
  );
}
