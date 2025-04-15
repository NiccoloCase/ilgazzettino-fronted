import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./NotificationBell.scss";

const NotificationBell: React.FC = () => {
  return (
    <div className="notification-bell">
      <FontAwesomeIcon icon={faBell} className="bell-icon" />
      <span className="badge">
        <small>2</small>
      </span>
    </div>
  );
};

export default NotificationBell;
