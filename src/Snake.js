export class Snake {

  //Constructor
  constructor() {
    this.body = [
      {x: 3, y: 10},
      {x: 4, y: 10},
      {x: 5, y: 10}
    ];
  }

  //Moving the snake
  move(direction) {
    this.head = this.body[length-1];
    
    if(direction == "left") { this.newHead = {x: this.head - 1, y: this.head.y} }
    else if(direction == "right") { this.newHead = {x: this.head + 1, y: this.head.y} }
    else if(direction == "up") { this.newHead = {x: this.head, y: this.head.y - 1} }
    else if(direction == "down") { this.newHead = {x: this.head, y: this.head.y + 1} }
  }

  //Increasing snake's size
  grow() {}
}