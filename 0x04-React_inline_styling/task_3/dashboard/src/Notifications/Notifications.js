import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import {StyleSheet, css} from 'aphrodite';
import closeIcon from "../assets/close-icon.png";

const cssVars = {
	mainColor: '#e0354b',
}

const styles = StyleSheet.create({
  NotificationsSection: {
    position: 'fixed',
    top: '.3rem',
    right: '.3rem',
    zIndex: 1,
    width: '25vw',
    minWidth: 350,
    fontSize: '1rem',
  },
  menuItem: {
    textAlign: 'right',
  },
  notificationItemsBox: {
	border: '.1rem dashed ' + cssVars.mainColor,
	padding: '1rem',
	fontSize: 16,
	position: 'relative',
  },
  
  closeButton: {
	background: 'transparent',
	border: 'none',
	position: 'absolute',
	top: '.5rem',
	right: '.5rem',
	padding: 0,
  },
  closeButtonImg: {
	width: '1rem',
	height: '1rem'
  }
})


export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { listNotifications } = this.props;
    if (nextProps.listNotifications.length > listNotifications.length) {
      return true;
    } else {
      return false;
    }
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  handleCloseClick = () => {
    console.log("Close button has been clicked");
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;

    const notificationsRows = listNotifications.length ? (
      listNotifications.map((item) => {
        return (
          <NotificationItem
            key={item.id}
            id={item.id}
            html={item.html}
            value={item.value}
            type={item.type}
            markAsRead={this.markAsRead}
          />
        );
      })
    ) : (
      <NotificationItem value="No new notification for now" type="default" />
    );
    return (
      <div className={css(styles.NotificationsSection)}>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notificationItemsBox)}>
            {listNotifications.length > 0 && (
              <p>Here is the list of notifications</p>
            )}
            <ul>{notificationsRows}</ul>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              type="button"
              onClick={this.handleCloseClick}
            >
              <img src={closeIcon} alt="Close Icon" className={css(styles.closeButtonImg)} />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
