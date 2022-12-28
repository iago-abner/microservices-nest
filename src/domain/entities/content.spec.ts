import { Content } from './content';

describe('Notification content', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content('você recebeu uma solicitação');

    expect(content).toBeTruthy();
  });

  test('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('vc')).toThrow();
  });

  test('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
