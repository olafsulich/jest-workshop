import { mocked } from "ts-jest/utils";
import { MatchClass } from "../match-class";
import { BoostClass } from "../boost";
import { player1, player2 } from "../../data/teams";

jest.mock("../boost");

const MockedBoostClass = BoostClass as jest.Mock;
const mockedBoost = jest.fn().mockReturnValue(3);

describe("MatchClass", () => {
  beforeAll(() => {
    MockedBoostClass.mockImplementation(() => {
      return {
        boost: mockedBoost,
      };
    });
  });

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
