export class Food {

  //Constructor
  constructor() {
    this.position = {x: 15, y: 10};
  }

  spawn() {
    this.position = {
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20)
    }
  }
}