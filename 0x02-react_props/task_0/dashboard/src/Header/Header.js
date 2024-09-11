import React from "react";
import './Header.css';

export default function Header() {
  return (
    <>
      <img src={logo} className="logo" alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </>
  );
}
