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

  //Getting new direction
  getDirection(event) {
  if (event.key === "ArrowRight" && this.direction != "left") {this.direction = "right";}
  if (event.key === "ArrowLeft" && this.direction != "right") {this.direction = "left";}
  if (event.key === "ArrowUp" && this.direction != "down") {this.direction = "up";}
  if (event.key === "ArrowDown" && this.direction != "up") {this.direction = "down";}
  }

  //Starting the game
  start() {
    document.addEventListener("keydown", this.getDirection.bind(this));
    this.interval = setInterval(this.update.bind(this), 120);
  }

  //Refreshing game instance
  update() {
    this.snakeBody = this.snake.move(this.direction);
    this.board.clearSnake();
    this.board.drawSnake(this.snakeBody);
  }
}