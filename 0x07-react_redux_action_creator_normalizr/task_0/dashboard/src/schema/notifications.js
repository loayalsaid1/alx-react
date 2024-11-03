import notifications from '../../notifications.json';
export function getAllNotificationsByUser(userID) {
  return notifications
    .filter((item) => userID === item.author.id)
    .map((item) => item.context);
}
