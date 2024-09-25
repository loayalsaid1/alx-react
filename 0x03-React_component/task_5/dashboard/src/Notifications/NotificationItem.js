
import React from 'react';
import PropTypes from 'prop-types'


function NotificationItem({ type = "default", id, html, value, markAsRead = () => {} }) {
  return (
	<li data-notification-type={type}
	  dangerouslySetInnerHTML={html ? html : undefined}
    onClick={() => markAsRead(id)}
    >
	  {value}
	</li>
  )
}

NotificationItem.propTypes = {
    html: PropTypes.shape({ __html: PropTypes.string }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    id: PropTypes.number,
    markAsRead: PropTypes.func
};

export default React.memo(NotificationItem);
