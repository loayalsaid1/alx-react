import React from 'react';
import PropTypes from 'prop-types';
import { html } from 'cheerio';



export default function NotificationItem({ type, html, value }) {
  return (
	<li data-notification-type={type}
	  dangerouslySetInnerHTML={html ? html : undefined}>
	  {value}
	</li>
  )
}


NotificationItem.propTypes = {
	html: PropTypes.shape({
		__html: PropTypes.string
	}),
	type: PropTypes.string,
	value: PropTypes.string
}

NotificationItem.defaultProps = {
	type: 'default'
}
