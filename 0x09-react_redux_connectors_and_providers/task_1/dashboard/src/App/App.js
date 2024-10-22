import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import "./normalize.css";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../utils/utils";
import UserContext, { defaultUser, defaultLogOut } from "./AppContext";
import {displayNotificationDrawer, hideNotificationDrawer} from '../actions/uiActionCreators';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: { ...defaultUser },
      logOut: () => this.logOut(),
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "default", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },      
      ]
    };

    this.handleCtrlHClick = this.handleCtrlHClick.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  handleCtrlHClick(event) {
    alert("Logging you out");
    this.state.logOut();
    event.preventDefault();
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: { email, password, isLoggedIn: true },
    });
  }

  logOut() {
    this.setState({
      user: { ...defaultUser },
    });
  }

  markNotificationAsRead(id) {
    const oldList = this.state.listNotifications;
    this.setState({
      listNotifications: oldList.filter(item => {
        return item.id !== id;
      })
    })
  }
  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.code === "KeyH") {
        this.handleCtrlHClick(event);
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCtrlHClick);
  }

  render() {
    return (
      <>
        <UserContext.Provider
          value={{ user: this.state.user, logOut: this.state.logOut }}
        >
          <Notifications
            listNotifications={this.state.listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
            handleDisplayDrawer={this.props.handleDisplayDrawer}
            handleHideDrawer={this.props.handleHideDrawer}
            displayDrawer={this.state.displayDrawer}            
          />

          <div className={css(styles.App)}>
            <Header />

            <div className={css(styles.AppBody)}>
              {this.state.user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>
              )}

              <BodySectionWithMarginBottom title="News from the school">
                <p>
                  Loay AL-Said made something for you guys, Check{" "}
                  <a href="https://remindme-l.vercel.app/landing">RemindMe</a>,
                  His latest app
                </p>
              </BodySectionWithMarginBottom>
            </div>

            <div className={css(styles.AppFooter)}>
              <Footer />
            </div>
          </div>
        </UserContext.Provider>
      </>
    );
  }
}

const cssVars = {
  mainColor: "#e0354b",
};

const styles = StyleSheet.create({
  App: {
    position: "relative",
    height: "100%",
  },

  AppBody: {
    textAlign: "left",
    padding: "3rem",
    fontSize: "1.3rem",
  },

  AppFooter: {
    textAlign: "center",
    width: "100%",
    borderTop: `.3rem solid ${cssVars.mainColor}`,
    position: "fixed",
    bottom: 0,
    left: 0,
  },
});

export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn')
})


export const mapDispatchToProps = {
  handleDisplayDrawer: displayNotificationDrawer,
  handleHideDrawer: hideNotificationDrawer,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
