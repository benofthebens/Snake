
const board = [
     [0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0],
     
];
let Snake;
let numRows;
let itemsPerRow;
let IsGameOver;
let apple;

function AddApple() {
     let appleX, appleY;
     do{
            appleX = Math.floor(Math.random() * itemsPerRow) ;
            appleY = Math.floor(Math.random() * numRows) ;
            console.log(appleX,appleY);
     } while((board[appleY][appleX] === 1)||(board[appleY][appleX]=== 2))
     board[appleY][appleX] = 2;      
     const apple = new Apple(appleY,appleX);
     return apple;       
     
}
function gameLoop() {
     
     let gameInterval = setInterval(async function () {
          if (IsGameOver) {
               clearInterval(gameInterval); // Stop the game loop when it's over
               const score = Snake.length - 3;
               alert(`Game Over! Your score is ${score}`);
               for (let j = 0; j < numRows; j++) {
                    for (let i = 1; i <= itemsPerRow; i++) {
             
                         board[j][i - 1] = 0;
             
                    }
             }
             Snake = [];
             const Intial = new SnakeItem(5,4);
             const Intial2 = new SnakeItem(6,4);
             const Intial3 = new SnakeItem(7,4);
   
             Snake.push(Intial);
             Snake.push(Intial2);
             Snake.push(Intial3);
             IsGameOver = false;

             Update();
             AddApple();

                  
        } 
        else {
                  
             move(Snake[0].direction);
             
             
             if (board[Snake[0].y][Snake[0].x] === 1) {
                  // Snake collided with itself
                  IsGameOver = true;
             } else if (board[Snake[0].y][Snake[0].x] === 2 || board[Snake[1].y][Snake[1].x] === 2  || board[Snake[2].y][Snake[2].x] === 2) {
                  // Snake ate an apple
                  // Handle scoring, snake growth, etc.
                  // For now, let's just remove the apple and add a new one
                  AddApple(); // Add a new apple
                  
                  const Increase = new SnakeItem(
                       Snake[Snake.length - 1].x,
                       Snake[Snake.length - 1].y
                  
                  );
                                 
                  Snake.push(Increase);
                  board[Increase.y][Increase.x] = 0; // Remove eaten apple   
                                      
             }

        }
        // Check for game over conditions, update score, etc.
        // Your rendering logic goes here
        Update();
   }, 150);
}
function move(direction) {
       
     if (
            (Snake[0].direction === "left" && direction === "right") ||
            (Snake[0].direction === "right" && direction === "left") ||
            (Snake[0].direction === "up" && direction === "down") ||
            (Snake[0].direction === "down" && direction === "up")
     ) {
            // Do nothing if trying to reverse direction
            return;
     }
     for (let i = Snake.length - 1; i > 0; i--) {
            
            Snake[i].x = Snake[i - 1].x;
            Snake[i].y = Snake[i - 1].y;
            
     }
     switch(direction){
            case "left":
                   Snake[0].x = Snake[0].x - 1; break;
            case "up":
                   Snake[0].y = Snake[0].y - 1; break;
            case "right":
                   Snake[0].x = Snake[0].x + 1; break;
            case "down":
                   Snake[0].y = Snake[0].y + 1; break;
     }
     Snake[0].direction = direction;
     if(Snake[0].x >8 ||Snake[0].x <0||Snake[0].y>8||Snake[0].y<0){
            IsGameOver = true;
            return;
     } 
}  
function Update(){
     for (let j = 0; j < numRows; j++) {
            for (let i = 1; i <= itemsPerRow; i++) {
                   if(board[j][i - 1] != 2){
                          board[j][i - 1] = 0;
                   }
            }
     }
     for(let i = 0; i < Snake.length; i++){

            board[Snake[i].y][Snake[i].x] = 1;
     }
     for(let j = 0; j<9;j++){
            for(let i =1; i < 10;i++){
                   const item = document.getElementById(`${j}${i}`);
                   
                   if(board[j][i-1]===1){
                          
                         item.style.backgroundColor = "red";
                   }
                   else if(board[j][i-1]===2){
                          
                         item.style.backgroundColor = "green";
                   }
                   else {
                         if ((i + j) % 2 === 0) {
                              item.style.backgroundColor = "black";
                         } 
                         else {
                              item.style.backgroundColor = "rgb(37, 36, 36)";
                         }       
                   }
            }
     } 
}

document.addEventListener("DOMContentLoaded", function () {
     // Number of rows and items per row
     numRows = 9;
     itemsPerRow = 9;
     IsGameOver = false;

     // Container to hold the generated HTML
     let html = '';

     // Generate the rows and items dynamically
     for (let j = 0; j<9;j++) {
          html += `<div class="Row-Container">`;
          for (let i =1; i < 10;i++) {
               
               html += `<div class="Row-Item" id="${j}${i}"></div>`;
          }
          html += `</div>`;
     }

     // Insert the generated HTML into the body of the document
     document.getElementById("con").innerHTML = html;

     Snake = [];
     const Intial = new SnakeItem(5,4);
     const Intial2 = new SnakeItem(6,4);
     const Intial3 = new SnakeItem(7,4);

     Snake.push(Intial);
     Snake.push(Intial2);
     Snake.push(Intial3);

     Update();
     apple = AddApple();
     
     document.addEventListener("keydown", function (event) {
          if (event.key === "d") {
                move("right");
          }
          else if (event.key === "a"){
                 move("left");
          }
          else if(event.key === "w"){
                 move("up");
     
          }
          else if(event.key === "s"){
                 move("down");
     
          }
     });
     
});
function AiGameLoop(){
     const queue = new Queue();
     let gameInterval = setInterval(async function () {
         if (IsGameOver) {
             clearInterval(gameInterval);
             const score = Snake.length - 3;
             alert(`Game Over! Your score is ${score}`);
         } else {
             if (queue.isEmpty()) {
                 const direct = Dijkstra(`${Snake[0].y},${Snake[0].x}`,`${apple.x},${apple.y}`,board);
                 console.log(`${Snake[0].y},${Snake[0].x}`,`${apple.y},${apple.x}`)
                 for (let i = 0; i < direct.length; i++) {
                     queue.enqueue(direct[i]);
                 }
             }
 
             let nextDirection = queue.deQueue();
             if(!nextDirection){
               nextDirection = "left";
             }
             if (nextDirection) {
                 Snake[0].direction = nextDirection;
                 move(Snake[0].direction);
 
                 if (board[Snake[0].y][Snake[0].x] === 1) {
                     // Snake collided with itself
                     IsGameOver = true;
                 } else if (board[Snake[0].y][Snake[0].x] === 2 || board[Snake[1].y][Snake[1].x] === 2 || board[Snake[2].y][Snake[2].x] === 2) {
                     apple = AddApple();
                     const Increase = new SnakeItem(
                         Snake[Snake.length - 1].x,
                         Snake[Snake.length - 1].y
                     );
                     Snake.push(Increase);
                     board[Increase.y][Increase.x] = 0; // Remove eaten apple
                 }
 
                 Update();
             }
         }
     }, 150);
 }
 