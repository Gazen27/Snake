export class Board {

  //Constructor
  constructor(size){
    this.cells = [];
    this.size = size * size;    
    this.board = document.getElementById("board");

    this.#generate();
  }

  //Creation of the board
  #generate() {
    for(let i=0; i<this.size; i++){
      const cell = document.createElement("div");
      cell.classList.add("cell");

      this.board.append(cell);
      this.cells.push(cell);
    }
  }

  //Refreshing the state of the snake
  clearSnake() {
    for(let i = 0; i<this.size; i++){
      this.cells[i].classList.remove("snake");
    }
  }

  //Refreshing the state of the food
  clearFood() {
    for(let i = 0; i<this.size; i++){
      this.cells[i].classList.remove("food");
    }
  }

  //Placing the snake on the board
  drawSnake(snake) {
    for(let i=0; i<snake.length; i++){
      const segment = snake[i];
      const index = segment.y * 20 + segment.x;

      this.cells[index].classList.add("snake");
    }
  }
}