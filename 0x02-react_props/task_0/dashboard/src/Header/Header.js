import React, { Component } from "react";
import './Header.css';

export default function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="logo" alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </div>
  );
}