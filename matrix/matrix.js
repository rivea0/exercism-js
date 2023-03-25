export class Matrix {
  constructor(str) {
    this.matrix = str;
  }

  get rows() {
    return this.matrix.split('\n').map(row => row.split(' ').map(_ => +_));
  }

  get columns() {
    return this.rows[0].map((_, i) => this.rows.map(row => +row[i]));
  }
}
