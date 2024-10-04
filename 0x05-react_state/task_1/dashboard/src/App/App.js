import React from "react";
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
import BodySection from "../BodySection/BodySection";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "default", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };

    this.handleCtrlHClick = this.handleCtrlHClick.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleCtrlHClick() {
    alert("Logging you out");
    this.props.logOut();
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    window.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.code === "KeyH") {
        this.handleCtrlHClick();
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCtrlHClick);
  }

  render() {
    return (
      <>
        <Notifications
          listNotifications={listNotifications}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          displayDrawer={this.state.displayDrawer}
        />

        <div className={css(styles.App)}>
          <Header />
          
          <div className={css(styles.AppBody)}>
            {this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
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
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

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
    padding: "1rem",
    height: "3rem",
    width: "100%",
    borderTop: `.3rem solid ${cssVars.mainColor}`,
    position: "fixed",
    bottom: 0,
    left: 0,
  },
});

export default App;