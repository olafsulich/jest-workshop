import type { Player } from "../types/types";

export function getAllPlayers<T extends Player[], U extends Player[]>(
  team1: T,
  team2: U
) {
  return [...team1, ...team2];
}

export function getGreatestPlayer(players: Player[]) {
  const playerWithHighestScore = players.reduce((prev, curr) => {
    return prev.points > curr.points ? prev : curr;
  });
  return playerWithHighestScore;
}

export function getTotalScore(players: Player[]) {
  const totalScore = players.reduce((prev, curr) => {
    return prev + curr.points;
  }, 0);
  return totalScore;
}
