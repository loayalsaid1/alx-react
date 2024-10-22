import {Seq} from 'immutable';

export const filterTypeSelected = state => state.get('filter');
export const getNotifications = state => state.getIn(['notifications', 'entities', 'notifications']);
export const getUnreadNotifications = state => {
	const allNotifications = getNotifications(state);
	return allNotifications.filter(item => !item.get('isRead'));
}
