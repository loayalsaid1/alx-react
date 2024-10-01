import React from "react";
import { StyleSheet, css } from 'aphrodite';


export default function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>

      {/* The login form */}
        <label htmlFor="email">Email</label>
        <input className={css(styles.inputField)} type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input className={css(styles.inputField)} type="password" id="password" name="password" />

        <button type="button">Ok</button>
    </>
  );
}

const styles = StyleSheet.create({
  inputField: {
    '@media (max-width: 900px)': {
      ':after': {
        content: '""',
        display: 'block',
      },
    }
  }
})
