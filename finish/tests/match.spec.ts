import { getAllPlayers } from "../src/match";
import { team1, team2, allPlayers } from "../data/teams";

it("returns all players in match", () => {
  const result = getAllPlayers(team1, team2);
  expect(result).toEqual(allPlayers);
});
