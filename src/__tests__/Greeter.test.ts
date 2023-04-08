import { Greeter } from '../index';
test('My Greeter', () => {
  expect(Greeter('Gaurav')).toBe('Hello Gaurav');
});