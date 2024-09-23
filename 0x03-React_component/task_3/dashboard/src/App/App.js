import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCtrlHClick = this.handleCtrlHClick.bind(this);
  }

  handleCtrlHClick() {
    alert("Logging you out");
    this.props.logOut();
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


    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <div className="App-body">
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
              <p>Loay AL-Said made something for you guys, Check <a href="https://remindme-l.vercel.app/landing">RemindMe</a>, His latest app</p>
            </BodySectionWithMarginBottom>
          </div>

          <div className="App-footer">
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

export default App;
