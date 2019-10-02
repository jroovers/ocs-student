class DinoKeeper {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi(): string {
    return `${this.name} says "hi"`;
  }
}

export default DinoKeeper;
