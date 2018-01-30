const isUniqueChars = require('./index');

test('function isUniqueChars exists', () => {
  expect(typeof isUniqueChars).toEqual('function');
});


test('must not have unique characters', () => {  
  expect(isUniqueChars('abccde')).toEqual(false);
});

test('must have unique characters', () => {
  expect(isUniqueChars('abcde')).toEqual(true);
});
