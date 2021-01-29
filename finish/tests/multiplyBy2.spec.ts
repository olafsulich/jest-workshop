import { multiplyBy2 } from "../src/multiplyBy2";

it("multiplies given number by 2", () => {
  const result = multiplyBy2(2);
  const expected = 4;
  expect(result).toBe(expected);
});
