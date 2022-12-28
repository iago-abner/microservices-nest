import { Notification } from '../../src/domain/entities/notification';
import { NotificationRepository } from '../../src/domain/repositories/NotificationsRepository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
