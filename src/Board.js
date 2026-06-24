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
}