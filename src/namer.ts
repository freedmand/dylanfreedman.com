export class Namer {
  constructor(readonly chars = "abcdefghijklmnopqrstuvwxyz", public id = 0) {}

  newId(id: number | null = null): string {
    if (id == null) {
      id = this.id;
      this.id++;
    } else {
      if (id < 0) return "";
    }

    return (
      this.newId(Math.floor(id / this.chars.length) - 1) +
      this.chars[id % this.chars.length]
    );
  }
}
