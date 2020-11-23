import Calculator from "./calculator";

describe("Calculator", () => {
  test("add two numbers", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test("divide by zero throws error", () => {
    expect(() => Calculator.integerDivision(1, 0)).toThrow("Divide by zero");
  });

  test("divide", () => {
    expect(Calculator.integerDivision(9, 4)).toBe(2);
  });
});
