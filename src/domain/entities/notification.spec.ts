import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('it should be able to create a notification', () => {
    const notification = new Notification({
      category: 'Social',
      content: new Content('Nova solicitação'),
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
