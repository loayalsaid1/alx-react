import notifications from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: (value) => value.guid,
  }
);
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedNotifications = normalize(notifications, [notification]);
export default normalizedNotifications;

export function getAllNotificationsByUser(userID) {
  const notifications = normalizedNotifications.entities.notifications;
  const messages = normalizedNotifications.entities.messages;
  
  const userNotifications = []
  for (const notification of Object.values(notifications)) {
    if (userID === notification.author) {
      userNotifications.push(messages[notification.context])
    }
  }

  return userNotifications;
}

export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}
