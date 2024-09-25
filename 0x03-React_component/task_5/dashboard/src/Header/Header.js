import React from "react";
import './Header.css';
import logo from '../assets/holberton_logo.png';

export default function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="logo" alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </div>
  );
}
