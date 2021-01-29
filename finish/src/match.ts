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
