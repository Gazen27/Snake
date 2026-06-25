import { Board } from "./Board.js"
import { Snake } from "./Snake.js"
import { Food } from "./Food.js"

export class Game {
  
  //Constructor
  constructor() {
    this.board = new Board(20);
    this.snake = new Snake();
    this.food = new Food();

    this.direction = "right";

    this.snakeBody = this.snake.body;
    this.board.drawSnake(this.snakeBody);
    this.board.drawFood(this.food);
  }

  //Getting new direction
  getDirection(event) {
  if (event.key === "w" && this.direction != "down") {this.direction = "up";}
  if (event.key === "a" && this.direction != "right") {this.direction = "left";}
  if (event.key === "s" && this.direction != "up") {this.direction = "down";}
  if (event.key === "d" && this.direction != "left") {this.direction = "right";}
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