import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";

export default class Notifications extends React.PureComponent {
  render() {
    const {
      listNotifications,
      markNotificationAsRead,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    const notificationsRows = listNotifications.length ? (
      listNotifications.map((item) => {
        return (
          <NotificationItem
            key={item.id}
            id={item.id}
            html={item.html}
            value={item.value}
            type={item.type}
            markAsRead={markNotificationAsRead}
          />
        );
      })
    ) : (
      <NotificationItem value="No new notification for now" type="default" />
    );
    return (
      <div className={css(styles.NotificationsSection)}>
        {!this.props.displayDrawer && (
          <>
            <div data-testid="menuItem" className={css(styles.menuItem)} onClick={handleDisplayDrawer} >
              <p>Your notifications</p>
            </div>
          </>
        )}
        {this.props.displayDrawer && (
          <div data-testid="notificationItemsBox" className={css(styles.notificationItemsBox)}>
            {listNotifications.length > 0 && (
              <p>Here is the list of notifications</p>
            )}
            <ul className={css(styles.NotificationsList)}>
              {notificationsRows}
            </ul>
            <button
              data-testid="closeButton"
              className={css(styles.closeButton)}
              aria-label="Close"
              type="button"
              onClick={handleHideDrawer}
            >
              <img
                src={closeIcon}
                alt="Close Icon"
                className={css(styles.closeButtonImg)}
              />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markNotificationAsRead: PropTypes.func,
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  listNotifications: [],
  markNotificationAsRead: () => {},
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHiDrawer: () => {},
};

const cssVars = {
  mainColor: "#e0354b",
};

const keyFrames = {
  opacity: {
    from: {
      opacity: 0.5,
    },
    to: {
      opacity: 1,
    },
  },

  bounce: {
    "0%": {
      transform: "translateY(0)",
    },
    "50%": {
      transform: "translateY(-5px)",
    },
    "100%": {
      transform: "translateY(5px)",
    },
  },
};

const styles = StyleSheet.create({
  NotificationsSection: {
    position: "fixed",
    top: ".3rem",
    right: ".3rem",
    zIndex: 1,
    width: "25vw",
    minWidth: 350,
    fontSize: "1rem",
  },
  menuItem: {
    textAlign: "right",
    float: "right",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    ":hover": {
      animationName: [keyFrames.opacity, keyFrames.bounce],
      animationDuration: "1s, .5s",
      animationIterationCount: 3,
    },
  },
  notificationItemsBox: {
    border: ".1rem dashed " + cssVars.mainColor,
    padding: "1rem",
    fontSize: 16,
    position: "relative",
    backgroundColor: "#fff8f8",
    "@media (max-width: 600px)": {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,

      fontSize: 20,
    },
  },

  NotificationsList: {
    paddingInlineStart: "inhirit",
    "@media (max-width: 600px)": {
      paddingInlineStart: 0,
      listStyle: "none",
    },
  },

  closeButton: {
    background: "transparent",
    border: "none",
    position: "absolute",
    top: ".5rem",
    right: ".5rem",
    padding: 0,
  },

  closeButtonImg: {
    width: "1rem",
    height: "1rem",
  },
});
