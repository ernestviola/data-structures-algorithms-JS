import Queue from './Queue';

test('123', () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  expect(q.inOrder()).toStrictEqual([1, 2, 3]);
  expect(q.reverseOrder()).toStrictEqual([3, 2, 1]);
});

test('dequeue', () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);

  expect(q.dequeue()).toBe(1);
  expect(q.dequeue()).toBe(2);
  expect(q.dequeue()).toBe(null);

  q.enqueue(3);
  q.enqueue(4);
  expect(q.dequeue()).toBe(3);
  expect(q.dequeue()).toBe(4);
  expect(q.dequeue()).toBe(null);
  expect(q.dequeue()).toBe(null);
});
