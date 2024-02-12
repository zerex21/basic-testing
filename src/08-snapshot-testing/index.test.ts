/* eslint-disable prettier/prettier */
// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const res = generateLinkedList([40, 41, 42]);
    expect(res).toStrictEqual({
      value: 40,
      next: {
        value: 41,
        next: {
          value: 42,
          next: {
            value: null,
            next: null,
          },
        },
      },
    });
    // Write your test here
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
    const result = generateLinkedList(['a', 'b', 'c']);
    expect(result).toMatchSnapshot();
  });
});
