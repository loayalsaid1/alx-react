import React from "react";
import { StyleSheet, css } from "aphrodite";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleLoginSubmit(event) {
    this.setState({ isLoggedIn: true });
    event.preventDefault();
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, () => {
      this.handleChangeInput();
    });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, () => {
      this.handleChangeInput();
    });
  }

  handleChangeInput() {
    this.setState({
      enableSubmit: this.state.email !== "" && this.state.password !== "",
    });
  }

  render() {
    return (
      <div>
        <p>Login to access the full dashboard</p>

        <form
          onSubmit={this.handleLoginSubmit}
          className={css(styles.loginFrom)}
        >
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />

          <input type="submit" value="OK" disabled={!this.state.enableSubmit} />
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  loginFrom: {
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});
