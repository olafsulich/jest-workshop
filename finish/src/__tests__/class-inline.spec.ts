import { mocked } from "ts-jest/utils";
import { MatchClass } from "../match-class";
import { BoostClass } from "../boost";
import { player1, player2 } from "../../data/teams";

const mockedBoost = jest.fn().mockReturnValue(3);

jest.mock("../boost", () => {
  return {
    BoostClass: jest.fn().mockImplementation(() => {
      return {
        boost: mockedBoost,
      };
    }),
  };
});

const MockedBoostClass = mocked(BoostClass, true);

describe("MatchClass", () => {
  beforeEach(() => {
    MockedBoostClass.mockClear();
    mockedBoost.mockClear();
  });

  it("should work correctly with BoostClass", () => {
    const match = new MatchClass();
    expect(match).toBeTruthy();
    expect(BoostClass).toHaveBeenCalledTimes(1);

    match.getBetterPlayer(player1, player2);

    expect(mockedBoost).toHaveBeenCalledTimes(1);
  });

  it("should work correctly with BoostClass", () => {
    const match = new MatchClass();
    expect(match).toBeTruthy();
    expect(BoostClass).toHaveBeenCalledTimes(1);

    match.getBetterPlayer(player1, player2);

    expect(mockedBoost).toHaveBeenCalledTimes(1);
  });
});
