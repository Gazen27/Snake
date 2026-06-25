import { Board } from "./Board.js"
import { Snake } from "./Snake.js"

export class Game {
  
  //Constructor
  constructor() {
    this.board = new Board(20);
    this.snake = new Snake();
  }
}