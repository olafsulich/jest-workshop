import { multiplyBy2 } from "./multiplyBy2";

export function multiplyBy2Async(value: number) {
  return Promise.resolve(multiplyBy2(value));
}
