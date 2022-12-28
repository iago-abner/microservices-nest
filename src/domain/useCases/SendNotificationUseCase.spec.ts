import { InMemoryNotificationRepository } from '../../../test/repositories/inMemoryNotificationsRespository';
import { SendNotification } from './SendNotificationUseCase';

describe('Send notification', () => {
  test('it should be able to send notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      category: 'Social',
      content: 'This is a notification',
      recipientId: 'Example recipientId',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
