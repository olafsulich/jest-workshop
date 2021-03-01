export class BoostClass {
  private getRandomInt(min: number, max: number) {
    return (
      Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
      Math.ceil(min)
    );
  }

  public boost() {
    return this.getRandomInt(1, 10);
  }
}
