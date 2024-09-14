
import React from 'react';
import PropTypes from 'prop-types'


export default function NotificationItem({ type = "default", html, value }) {
  return (
	<li data-notification-type={type}
	  dangerouslySetInnerHTML={html ? html : undefined}>
	  {value}
	</li>
  )
}

NotificationItem.propTypes = {
    html: PropTypes.shape({ __html: PropTypes.string }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string
};
