import HashMap from './HashMap.js';

test('test set', () => {
  const test = new HashMap();
  test.set('1', 'red');
  test.set('2', 'yellow');
  test.set('3', 'orange');
  test.set('4', 'brown');
  test.set('5', 'gray');
  test.set('6', 'green');
  test.set('7', 'purple');
  test.set('8', 'black');
  test.set('9', 'white');
  test.set('10', 'blue');
  test.set('11', 'pink');
  test.set('12', 'golden');
  test.set('13', 'silver');
  test.set('14', 'black');
  test.set('15', 'white');
  test.set('16', 'sky');
  test.set('17', 'cinnamon');

  expect(test.length()).toBe(17);
});
