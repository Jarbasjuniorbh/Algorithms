const permutations = require('./index');

test('function permutations exists', () => {
  expect(typeof permutations).toEqual('function');
});

test('get all permutations of a string', () => {
  const word = "abc";  
  const expected = ["cab", "acb", "abc", "cba", "bca", "bac" ];
  const result = permutations(word);
  expect(result).toEqual(expect.arrayContaining(expected));
  expect(result.length).toEqual(expected.length);  
});
