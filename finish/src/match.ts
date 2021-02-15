export type Player = {
  readonly name: string;
  readonly points: number;
};

export function getAllPlayers(team1: Player[], team2: Player[]) {
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
