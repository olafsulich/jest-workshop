import { BoostClass } from "./boost";
import type { Player } from "./match";

export class MatchClass {
  private boost: () => number;

  constructor() {
    this.boost = new BoostClass().boost;
  }

  public getBetterPlayer(player1: Player, player2: Player) {
    if (player1.points + this.boost() > player2.points) {
      return player1;
    }
    return player2;
  }
}
