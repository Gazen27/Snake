import { Board } from "./Board.js"
import { Snake } from "./Snake.js"

export class Game {
  
  //Constructor
  constructor() {
    this.board = new Board(20);
    this.snake = new Snake();

    this.snakeBody = this.snake.body;
    this.board.drawSnake(this.snakeBody, 20);
  }
}