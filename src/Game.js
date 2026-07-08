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
    this.score = 0;

    this.snakeBody = this.snake.body;
    this.board.drawSnake(this.snakeBody);
    this.board.drawFood(this.food);

    this.container = document.getElementById("gameContainer");
  }

  //Starting the game
  start() {
    document.addEventListener("keydown", this.getDirection.bind(this));
    this.interval = setInterval(this.update.bind(this), 110);
  }

  //Ending the game
  gameover() {
    clearInterval(this.interval);
    const end = document.createElement("div");
    end.innerHTML = "GAME OVER! Reload to play again.";
    end.id = "gameover";
    
    this.container.append(end);
  }

  //Drawing the snake in the new position
  updateSnake() {
    this.board.clearSnake();
    this.snakeBody.shift();
    this.board.drawSnake(this.snakeBody); 
  }

  //Crescita del serpente
  grow(){
    this.board.clearSnake();
    this.board.clearFood();
    this.food.spawn();
    this.board.drawFood(this.food);
    this.board.drawSnake(this.snakeBody); 

    this.score = this.score + 1;
    this.setScore(this.score);
  }

  //Refreshing game instance
  update() {
    this.snakeBody = this.snake.move(this.direction);
    
    //Next position is empty
    if(this.board.checkCell(this.snakeBody) == "empty"){this.updateSnake();}

    //Next position contains food
    else if(this.board.checkCell(this.snakeBody) == "eatable"){this.grow();}

    //Next position contains a collision point
    else{this.gameover();}
  }

  //Getting new direction
  getDirection(event) {
  if (event.key === "w" && this.direction != "down") {this.direction = "up";}
  if (event.key === "a" && this.direction != "right") {this.direction = "left";}
  if (event.key === "s" && this.direction != "up") {this.direction = "down";}
  if (event.key === "d" && this.direction != "left") {this.direction = "right";}
  }

  //Setting the score
  setScore(score) {
    document.querySelector("#textScore").textContent = `Score: ${score}`;
  }
}