// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const input = {
      a: 41,
      b: 1,
      action: Action.Add,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(42);
    // Write your test here
  });

  test('should subtract two numbers', () => {
    const input = {
      a: 43,
      b: 1,
      action: Action.Subtract,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(42);
    // Write your test here
  });

  test('should multiply two numbers', () => {
    const input = {
      a: 42,
      b: 1,
      action: Action.Multiply,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(42);
    // Write your test here
  });

  test('should divide two numbers', () => {
    const input = {
      a: 84,
      b: 2,
      action: Action.Divide,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(42);
    // Write your test here
  });

  test('should exponentiate two numbers', () => {
    const input = {
      a: 2,
      b: 2,
      action: Action.Multiply,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(4);
    // Write your test here
  });

  test('should return null for invalid action', () => {
    const input = {
      a: 42,
      b: 1,
      action: !Action,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(null);
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    const input = {
      a: "41",
      b: 1,
      action: Action.Add,
    };
    const result = simpleCalculator(input);
    expect(result).toBe(null);
    // Write your test here
  });
});
