import * as match from "../match";

jest.useFakeTimers();

it("starts a game", () => {
  match.startGame();
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
});
