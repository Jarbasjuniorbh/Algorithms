const permutations = require('./index');

test('function permutations exists', () => {
  expect(typeof permutations).toEqual('function');
});

test('get all permutations of a string', () => {
  const word = "abcd";  
  expect(permutations(word)).toEqual(["cab", "acb", "abc", "cba", "bca", "bac" ]);
});
