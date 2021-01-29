import { getAllPlayers, getGreatestPlayer } from "../src/match";
import { team1, team2, allPlayers } from "../data/teams";

it("returns all players in match", () => {
  const result = getAllPlayers(team1, team2);
  expect(result).toEqual(allPlayers);
});

it("returns player with most points", () => {
  const players = getAllPlayers(team1, team2);
  const greatestPlayer = getGreatestPlayer(players);
  expect(greatestPlayer.name).toBe("Blake Griffin");
});