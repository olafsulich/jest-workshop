import axios from "axios";
import * as match from "../match";
import { allPlayers } from "../../data/teams";
import { mocked } from "ts-jest/utils";

jest.mock("axios", () => {
  return {
    get: jest.fn().mockImplementation(() => Promise.resolve(allPlayers)),
  };
});

const mockedAxios = axios as jest.Mocked<typeof axios>; // mocked(axios,true);

it("returns list of players", async () => {
  const players = await match.getAllPlayers();

  expect(mockedAxios.get).toBeCalledTimes(1);
  expect(players).toEqual(allPlayers);
});
