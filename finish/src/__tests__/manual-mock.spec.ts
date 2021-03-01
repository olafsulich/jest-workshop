import * as match from "../match";
import { player1, player2 } from "../../data/teams";

jest.mock("../match");

it("returns better player", () => {
  expect(match.getBetterPlayer(player1, player2)).toEqual(player1);
});
