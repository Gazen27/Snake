import { Board } from "./Board.js"
import { Snake } from "./Snake.js"

export class Game {
  
  //Constructor
  constructor() {
    this.board = new Board(20);
    this.snake = new Snake();

    this.direction = "right";

    this.snakeBody = this.snake.body;
    this.board.drawSnake(this.snakeBody);
  }

  //Starting the game
  start() {
    this.interval = setInterval(this.update.bind, 150);
  }

  //Refreshing game instance
  update() {
    this.snake.move();
    this.board.clearSnake();
    this.board.drawSnake();
  }
}