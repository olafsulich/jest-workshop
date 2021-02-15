export type Person = {
  readonly name: string;
  readonly age: number;
};

export function getBeer(person: Person) {
  if (person.age < 18) {
    throw new Error("You're too young to buy a beer");
  }
  return "🍺";
}
