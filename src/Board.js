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

  //Placing the food on the board
  drawFood(food) {
    const index = food.position.y * 20 + food.position.x;
    this.cells[index].classList.add("food");
  }

  //Checking colliding cell
  checkCell(snake) {
    const head = snake[snake.length - 1];
    const index = head.y * 20 + head.x;
    
    if(this.cells[index] == undefined){return "collide";}
    else if(head.x < 0 || head.x > 19){return "collide";}
    else if(this.cells[index].classList.contains("snake")){return "collide";}
    else if(this.cells[index].classList.contains("food")){return "eatable";}
    else {return "empty";}
  }
}