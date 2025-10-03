const { add } = require('./stringCalculator');

describe('String Calculator - Incubyte TDD Kata', () => {
  test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

    test('returns the number for single input', () => {
    expect(add("1")).toBe(1);
  });

    test('sums two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
  });

    test('handles any amount of numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
    expect(add("10,20,30")).toBe(60);
  });


});
