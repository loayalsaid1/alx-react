import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  return (
    <div className={css(styles.loginSection)}>
      <p>Login to access the full dashboard</p>

      {/* The login form */}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
      />

      <button type="button">Ok</button>
    </div>
  );
}

const styles = StyleSheet.create({
  loginSection: {
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});
