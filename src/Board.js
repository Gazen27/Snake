export class Board {

  //Costruttor
  constructor(size){
    this.cells = [];
    this.size = size * size;    
    this.board = document.getElementById("board");

    this.#generate();
  }

  //Creazione della griglia di gioco
  #generate() {
    for(let i=0; i<this.size; i++){
      const cell = document.createElement("div");
      cell.classList.add("cell");

      this.board.append(cell);
      this.cells.push(cell);
    }
  }
}