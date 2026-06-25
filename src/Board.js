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

  //Placing the snake on the board
  drawSnake(snake, rows) {
    for(let i=0; i<snake.length; i++){
      const segment = snake[i];
      const index = segment.y * rows + segment.x;

      this.cells[index].classList.add("snake");
    }
  }
}