import * as match from "../match";
import { player1, player2 } from "../../data/teams";

it("returns better player", () => {
  const getBetterPlayerSpy = jest
    .spyOn(match, "getBetterPlayer")
    .mockImplementation((player1, player2) => player1);

  expect(match.getBetterPlayer(player1, player2)).toEqual(player1);
  expect(getBetterPlayerSpy).toHaveBeenCalled();
});
