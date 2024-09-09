import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";


export default function Notifications() {
  const handleCloseClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li key="1" data-priority="default">
          New course available
        </li>
        <li key="2" data-priority="urgent">
          New resume available
        </li>
        <li key="3" data-priority="urgent"
		dangerouslySetInnerHTML={{__html: getLatestNotification()}}
		>
        </li>
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
  );
}
