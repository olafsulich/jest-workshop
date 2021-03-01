import * as match from "../match";

it("multiplies points", () => {
  const mockedCallback = jest
    .fn((point: number) => point * 2)
    .mockName("multiplyPointsCallback");

  expect(match.multiplyPoints([1, 2, 3], mockedCallback)).toEqual([2, 4, 6]);

  mockedCallback.mockReset();

  console.log(mockedCallback.mock.calls); // []

  expect(match.multiplyPoints([1, 2, 3], mockedCallback)).toEqual([
    undefined,
    undefined,
    undefined,
  ]);

  expect(mockedCallback).toBeCalledWith(expect.any(Number));
});
