import axios from "axios";

export type Player = {
  readonly name: string;
  readonly points: number;
};

type Players = {
  players: Player[];
};

export async function getAllPlayers() {
  try {
    const res = await axios.get<Players>(
      "https://api.jsonbin.io/b/60392b8e81087a6a8b917da0"
    );
    return res;
  } catch {
    throw new Error("Something went wrong...");
  }
}

function getRandomInt(min: number, max: number) {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
    Math.ceil(min)
  );
}

function boost() {
  return getRandomInt(1, 10);
}

export function getBetterPlayer(player1: Player, player2: Player) {
  if (player1.points + boost() > player2.points) {
    return player1;
  }
  return player2;
}

export function multiplyPoints(
  points: number[],
  callback: (points: number) => number
) {
  return points.map((point) => callback(point));
}

export function startGame() {
  setTimeout(() => {
    console.log("Ready? 3...2...1...Go!");
  }, 1000);
}

export function getName(name: string) {
  return name;
}
