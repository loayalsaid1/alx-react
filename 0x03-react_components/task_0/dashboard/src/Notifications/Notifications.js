import React from "react";
import PropTypes from 'prop-types';
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "../NotificationItemShape";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";


export default function Notifications({ displayDrawer = false, listNotifications = []}) {
  const handleCloseClick = () => {
    console.log("Close button has been clicked");
  };

  const notificationsRows = listNotifications.length 
    ? listNotifications.map(item => {
      <NotificationItem id={item.id} html={item.html} value={item.value} type={item.value} />
    })
    : <NotificationItem value="No new notification for now" type="default" />
  return (
    
    <div className="Notifications_section">
      <div className='menuItem'>  
          <p>Your notifications</p>
      </div>
      {displayDrawer &&
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            {notificationsRows}
          </ul>
          <button
            className="close_button"
            aria-label="Close"
            type="button"
            onClick={handleCloseClick}
            >
            <img src={closeIcon} alt="Close Icon" />
          </button>
        </div>
      }
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: NotificationItemShape
};
