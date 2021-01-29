import { multiplyBy2Async } from "../src/multiplyBy2Async";

it("multiplies given number by 2 asynchronously", async () => {
  const result = await multiplyBy2Async(2);
  const expected = 4;
  expect(result).toBe(expected);
});
