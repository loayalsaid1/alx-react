import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton_logo.png";
import UserContext from "../App/AppContext";

const cssVars = {
  mainColor: "#e0354b",
};
const styles = StyleSheet.create({
  AppHeader: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    borderBottom: ".3rem solid " + cssVars.mainColor,
    height: "15rem",
  },

  logo: {
    height: "100%",
    objectFit: "contain",
  },

  header: {
    color: cssVars.mainColor,
    textAlign: "left",
  },

  logoutButton: {
    cursor: 'pointer',
    fontWeight: 'bold',
  }
});

export default class Header extends React.Component {
  static contextType = UserContext;

  render() {
    return (
      <div className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.logo)} alt="Holberton Logo" />
        <div>
          <h1 className={css(styles.header)}>School dashboard</h1>
          {this.context.user.isLoggedIn && (
            <div id="logoutSection">
              <p>
                Welcome <i>{this.context.user.email}</i>{" "}
                <a className={css(styles.logoutButton)} onClick={this.context.logOut}>logOut</a>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
