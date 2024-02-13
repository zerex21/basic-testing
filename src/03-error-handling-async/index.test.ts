/* eslint-disable prettier/prettier */
// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 42;
    const res = await resolveValue(value);
    expect(res).toBe(value)
    // Write your test here
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const messError = 'Error 42';
    try{
      throwError(messError);
    } catch (err) {
      if (err instanceof Error) expect(err.message).toBe(messError);
    }
    // Write your test here
  });

  test('should throw error with default message if message is not provided', () => {
    try{
      throwError();
    } catch (err) {
      if (err instanceof Error) expect(err.message).toBe('Oops!');
    }
    // Write your test here
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    try {
      throwCustomError();
    } catch (err) {
      if (err instanceof MyAwesomeError) expect(err.message).toBe('This is my awesome custom error!');
    }
    // Write your test here
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    try{
     await rejectCustomError()
    } catch (err){
      if (err instanceof MyAwesomeError) expect(err.message).toBe('This is my awesome custom error!');
    }
    // Write your test here
  });
});
