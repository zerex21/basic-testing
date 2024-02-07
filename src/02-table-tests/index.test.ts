/* eslint-disable prettier/prettier */
// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 41, b: 1, action: Action.Add, expected: 42 },
  { a: 40, b: 2, action: Action.Add, expected: 42 },
  { a: 39, b: 3, action: Action.Add, expected: 42 },

  { a: 43, b: 1, action: Action.Subtract, expected: 42 },
  { a: 44, b: 2, action: Action.Subtract, expected: 42 },
  { a: 45, b: 3, action: Action.Subtract, expected: 42 },

  { a: 42, b: 1, action: Action.Multiply, expected: 42 },
  { a: 21, b: 2, action: Action.Multiply, expected: 42 },
  { a: 6, b: 7, action: Action.Multiply, expected: 42 },

  { a: 42, b: 1, action: Action.Divide, expected: 42 },
  { a: 84, b: 2, action: Action.Divide, expected: 42 },
  { a: 168, b: 4, action: Action.Divide, expected: 42 },

  { a: 4, b: 4, action: Action.Exponentiate, expected: 256 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },

  { a: 42, b: 1, action: !Action, expected: null },
  { a: 40, b: 2, action: !Action, expected: null },
  { a: 39, b: 3, action: !Action, expected: null },

  { a: '41', b: 1, action: Action.Add, expected: null },
  { a: 40, b: '2', action: Action.Exponentiate, expected: null },
  { a: 42, b: ' ', action: Action.Multiply, expected: null },
  // continue cases for other actions
];

describe('simpleCalculator', () => {
  test.each(testCases.map(Object.values))(
    'simpleCalculator(%a, %b, %action)',(a, b, action, expected) =>{
      const input = { a, b, action };
      const res = simpleCalculator(input);
      expect(res).toBe(expected);
    }
  )
  // This test case is just to run this test suite, remove it when you write your own tests
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  test('should blah-blah', () => {});
  // Consider to use Jest table tests API to test all cases above
});
