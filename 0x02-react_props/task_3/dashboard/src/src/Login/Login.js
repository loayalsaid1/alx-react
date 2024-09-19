import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>

      {/* The login form */}
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />

      <button type="button">Ok</button>
    </>
  );
}
