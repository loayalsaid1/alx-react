import React from "react";
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";


export default function Notifications({ displayDrawer = false }) {
  const handleCloseClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    
    <div className="Notifications_section">
      <div className='menuItem'>  
          <p>Your notifications</p>
      </div>
      {displayDrawer &&
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem key="1" type="default" value="New course available" />
            <NotificationItem key="2" type="default" value="New resume available" />
            <NotificationItem key="3" type="urgent" html={{__html: getLatestNotification()}} />
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
  displayDrawer: PropTypes.bool
};
