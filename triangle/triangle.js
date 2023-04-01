export class Triangle {
  constructor(...sides) {    
    this.sides = [...sides];
  }

  get isEquilateral() {
    return !this.sides.includes(0) && new Set(this.sides).size === 1;
  }

  get isIsosceles() {
    return !this.isInequal() && new Set(this.sides).size <= 2;
  }

  get isScalene() {
    return !this.isInequal() && new Set(this.sides).size === 3;
    
  }

  isInequal() {
    return this.sides[0] + this.sides[1] < this.sides[2] ||
      this.sides[0] + this.sides[2] < this.sides[1] ||
      this.sides[1] + this.sides[2] < this.sides[0];
  }
}
