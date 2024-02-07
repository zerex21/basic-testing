/* eslint-disable prettier/prettier */
// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, SynchronizationFailedError, TransferFailedError  } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initialBalance = 42
    const account = getBankAccount(initialBalance)
    expect(account.getBalance()).toBe(initialBalance)
    // Write your test here
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    const balance = 42
    const withdraw = 4242
    try{
      const account = getBankAccount(balance)
      account.withdraw(withdraw)
    } catch (err){
      if(err instanceof InsufficientFundsError) expect(err.message).toBe(`Insufficient funds: cannot withdraw more than ${balance}`);
    }

  });

  test('should throw error when transferring more than balance', () => {
    const balance = 42
    const transferring = 4242
    try{
      const account = getBankAccount(balance)
      account.transfer(transferring,account)
    } catch (err){
      if(err instanceof TransferFailedError) expect(err.message).toBe('Transfer failed');
}
    // Write your test here
  });

  test('should throw error when transferring to the same account', () => {
    const balance = 42
    const transferring = 42
    try{
      const account = getBankAccount(balance)
      account.transfer(transferring,account)
    } catch (err){
      if(err instanceof TransferFailedError) expect(err.message).toBe('Transfer failed');
}
    // Write your test here
  });

  test('should deposit money', () => {
    const balance = 42
    const depositIn = 42
    const account = getBankAccount(balance)
    account.deposit(depositIn)
    expect(account.getBalance()).toBe(balance + depositIn)
    // Write your test here
  });

  test('should withdraw money', () => {
    const balance = 42
    const withdrawing = 24
    const account = getBankAccount(balance)
    account.withdraw(withdrawing)
    expect(account.getBalance()).toBe(balance - withdrawing)
    // Write your test here
  });

  test('should transfer money', () => {
    const firstAcc = getBankAccount(400);
    const secondAcc = getBankAccount(200);
    const transferring = 42;
    firstAcc.transfer(transferring, secondAcc);
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(42);
    account.fetchBalance = jest.fn().mockResolvedValue(42);
    const balance = await account.fetchBalance();
    expect(typeof balance).toBe('number');
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(24);
    account.fetchBalance = jest.fn().mockResolvedValue(42);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(42);

    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(42);
    account.fetchBalance = jest.fn().mockResolvedValue(null);
    try{
      await account.synchronizeBalance();
    } catch (err) {
      if (err instanceof SynchronizationFailedError) expect(err.message).toBe('Synchronization failed');
    }
    // Write your tests here
  });
});
