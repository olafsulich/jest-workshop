import { getAllPlayers, getGreatestPlayer, getTotalScore } from "../src/match";
import { team1, team2, allPlayers } from "../data/teams";

it("returns all players in a match", () => {
  const result = getAllPlayers(team1, team2);
  expect(result).toEqual(allPlayers);
});

it("returns player with the most points", () => {
  const players = getAllPlayers(team1, team2);
  const greatestPlayer = getGreatestPlayer(players);
  expect(greatestPlayer.name).toBe("Blake Griffin");
});

it("returns a total score", () => {
  const players = getAllPlayers(team1, team2);
  const totalScore = getTotalScore(players);
  expect(totalScore).toBe(163);
});
