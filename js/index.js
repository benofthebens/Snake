
document.addEventListener("DOMContentLoaded", function () {

   const gridContainer = document.getElementById("grid-container")

   for(let i = 0; i < Game.grid.length;i++){

      const row = document.createElement("div");
      row.className = "row"

      for (let j = 0;  j < Game.grid.length; j++){

         const rowItem = document.createElement("div");
         rowItem.className = "row-item";
         rowItem.id = `${i},${j}`;
         rowItem.innerText = Game.grid[i][j].toString();

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
   game.gameLoop(snake);



});


