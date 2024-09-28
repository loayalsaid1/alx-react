import React from "react";
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton_logo.png';

const cssVars = {
  mainColor: '#e0354b'
}
const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    borderBottom: '.3rem solid ' + cssVars.mainColor,
    height: '15rem',
  },

  logo: {
    height: '100%',
    objectFit: 'contain'
  },

  header: {
    color: cssVars.mainColor,
    textAlign: 'left'
  }
})

export default function Header() {
  return (
    <div className={css(styles.AppHeader)}>
      <img src={logo} className={css(styles.logo)} alt="Holberton Logo" />
      <h1 className={css(styles.header)} >School dashboard</h1>
    </div>
  );
}
