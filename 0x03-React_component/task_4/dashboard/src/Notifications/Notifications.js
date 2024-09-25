import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }
  
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  handleCloseClick = () => {
    console.log("Close button has been clicked");
  };

  render() {
    const {displayDrawer, listNotifications} = this.props;

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
      <div className="Notifications_section">
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className="Notifications">
            {listNotifications.length > 0 && (
              <p>Here is the list of notifications</p>
            )}
            <ul>{notificationsRows}</ul>
            <button
              className="close_button"
              aria-label="Close"
              type="button"
              onClick={this.handleCloseClick}
            >
              <img src={closeIcon} alt="Close Icon" />
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
