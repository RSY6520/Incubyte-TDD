const { add } = require('./stringCalculator');

describe('String Calculator - Incubyte TDD Kata', () => {
  test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

    test('returns the number for single input', () => {
    expect(add("1")).toBe(1);
  });

});
