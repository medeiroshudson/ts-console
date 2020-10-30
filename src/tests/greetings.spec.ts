import greetings from '../components/greetings';

test('It should greet the app developer', () => {
  const name = 'Hudson';

  expect(greetings.greet(name)).toBe(`Hello, ${name}!`);
});
