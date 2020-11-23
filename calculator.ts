export default class Calculator {
  constructor() {}

  static add(a: number, b: number) {
    return a + b;
  }

  static integerDivision(dividend: number, divider: number) {
    if (divider === 0) {
      throw new Error("Divide by zero");
    }

    return (dividend / divider) >> 0;
  }
}
