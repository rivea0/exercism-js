// @ts-check


/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 * @param {number | undefined} [width]
 * @param {number | undefined} [height]
 */
export function Size(width, height) {
  this.width = (width === 0) ? 0 : (width || 80);
  this.height = (height === 0) ? 0 : (height || 60);
  }
  
Size.prototype.resize = function(newWidth, newHeight) {
  [this.width, this.height] = [newWidth, newHeight];
}
  
export function Position(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Position.prototype.move = function(newX, newY) {
  [this.x, this.y] = [newX, newY];
}
  
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  
  /**
  * @param {Size} size
  */
  resize(size) {
    [this.size.width, this.size.height] = [
      ((size.width < 1) ? 1 : (
        (size.width > this.screenSize.width - this.position.x) ? (this.screenSize.width - this.position.x) : size.width)
      ), ((size.height < 1) ? 1 : (
        (size.height > this.screenSize.height - this.position.y) ? (this.screenSize.height - this.position.y) : size.height)
      )
    ];
  }
  
  /**
  * @param {Position} position
  */
  move(position) {
    [this.position.x, this.position.y] = [
      ((position.x < 0) ? 0 : (
        (position.x > this.screenSize.width - this.size.width) ? (this.screenSize.width - this.size.width) : position.x)
      ), ((position.y < 0) ? 0 : (
        (position.y > this.screenSize.height - this.size.height) ? (this.screenSize.height - this.size.height) : position.y)
      )
    ];  
  }
}
  
/**
 * @param {ProgramWindow} programWindow
 */
export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
