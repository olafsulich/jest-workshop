import axios from "axios";
import { mocked } from "ts-jest/utils";
import * as match from "../match";
import { allPlayers } from "../../data/teams";

jest.mock("axios");
const mockedAxios = mocked(axios, true); // axios as jest.Mocked<typeof axios>;

describe("getAllPlayers", () => {
  it("returns list of players", async () => {
    mockedAxios.get.mockResolvedValue(allPlayers);

    const players = await match.getAllPlayers();

    expect(mockedAxios.get).toBeCalledTimes(1);
    expect(players).toEqual(allPlayers);
  });

  it("trows an error", async () => {
    mockedAxios.get.mockRejectedValue(allPlayers);

    expect(() => match.getAllPlayers()).rejects.toThrow(
      "Something went wrong..."
    );
  });
});
