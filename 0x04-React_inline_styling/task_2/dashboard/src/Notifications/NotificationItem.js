
import React from 'react';
import PropTypes from 'prop-types'
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: blue,
  },
  urgent: {
    color: red
  }
})
function NotificationItem({ type = "default", id, html, value, markAsRead = () => {} }) {
  return (
	<li data-notification-type={type}
	  dangerouslySetInnerHTML={html ? html : undefined}
    onClick={() => markAsRead(id)}
    className={css(
      type === 'default' ? styles.default : styles.urgent
    )}
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
