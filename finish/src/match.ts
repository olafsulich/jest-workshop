import type { Player } from "../types/types";

export function getAllPlayers<T extends Player[], U extends Player[]>(
  team1: T,
  team2: U
) {
  return [...team1, ...team2];
}
