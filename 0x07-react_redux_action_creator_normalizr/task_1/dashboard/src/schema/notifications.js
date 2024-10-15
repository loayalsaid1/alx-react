import notifications from '../../notifications.json';
import { schema, normalize } from 'normalizr';
export function getAllNotificationsByUser(userID) {
  return notifications
    .filter((item) => userID === item.author.id)
    .map((item) => item.context);
}
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
