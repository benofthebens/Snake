document.addEventListener("DOMContentLoaded", function () {

   const gridContainer = document.getElementById("grid-container")

   for(let i = 0; i < Game.grid.length;i++){

      const row = document.createElement("div");
      row.className = "row"

      for (let j = 0;  j < Game.grid.length; j++){

         const rowItem = document.createElement("div");
         rowItem.className = "row-item";
         rowItem.id = `${i},${j}`;
         //rowItem.innerText = Game.grid[i][j].toString();

         row.append(rowItem);
      }

      gridContainer.append(row);

   }
   const snake = new Snake();
   console.log(snake.body.getStackData());

   const game = new Game(150);
   for(let i = snake.body.getStackData().length - 1; i >= 0; i--){

      game.setGrid(snake.body.getStackData()[i].x,snake.body.getStackData()[i].y,snake);

   }
   const apple = new Apple(9);
   apple.addApple();
   let canMove = true; // Flag to control whether the snake can move

   document.addEventListener("keydown", function (event) {
      if (!canMove) return; // If canMove is false, ignore the keypress

      canMove = false; // Set canMove to false to prevent subsequent keypresses
      setTimeout(() => {
         canMove = true; // After a delay, set canMove to true to allow the next keypress
      }, 150); // Adjust the delay as needed (100 milliseconds in this example)

      if (event.key === "d") {
         snake.move(90);
      }
      else if (event.key === "a"){
         snake.move(270);
      }
      else if(event.key === "w"){
         snake.move(0);

      }
      else if(event.key === "s"){
         snake. move(180);

      }
   });
   game.gameLoop(snake);

});


