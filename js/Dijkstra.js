
let Cost = 0;
let Prev = 1;
function Dijkstra(start,end,board){
     function GetNeighbours(current,board){

          const [currentRow, currentCol] = current.split(',').map(Number);
          const neighbours = [];
          // Check the left neighbor
          if (currentCol > 0 && board[currentRow][currentCol - 1] !== 1) {
               neighbours.push(`${currentRow},${currentCol - 1}`);
          }

          // Check the right neighbor
          if (currentCol < board[0].length - 1 && board[currentRow][currentCol + 1] !== 1) {
               neighbours.push(`${currentRow},${currentCol + 1}`);
          }

          // Check the upper neighbor
          if (currentRow > 0  && board[currentRow - 1][currentCol] !== 1) {
               neighbours.push(`${currentRow - 1},${currentCol}`);
          }

          // Check the lower neighbor
          if (currentRow < board.length - 1 && board[currentRow + 1][currentCol] !== 1) {
               neighbours.push(`${currentRow + 1},${currentCol}`);
          }

          return neighbours;
     }



     let unvisited = {};
     let visited = {};

     for(let i = 0; i < board.length; i++){
          for(let j = 0; j < board[0].length; j++){
               unvisited[`${i},${j}`] = [Infinity, null] ;

          }
     }
     unvisited[start][Cost] = 0;

     let finished = false; 
     while(!finished){
          if(Object.keys(unvisited).length === 0){
               finished = true;
          }
          else {
               // Assuming unvisited is an object with numeric values
               let keys = Object.keys(unvisited);
               let current = keys.reduce((minKey, key) => unvisited[key] < unvisited[minKey] ? key : minKey, keys[0]);
               let neighbours = GetNeighbours(current,board);
               
               for(let i = 0; i < neighbours.length; i++){
                   
                    if(!visited.hasOwnProperty(neighbours[i])){
                         let newCost = unvisited[current][Cost] + 1;
                         if(newCost < unvisited[neighbours[i]][Cost]){
                              
                              unvisited[neighbours[i]][Cost] = newCost;
                              unvisited[neighbours[i]][1] = current;
                         }

                    }
               }
               
               visited[current] = unvisited[current];
               
               delete unvisited[current];
          }
          
          
     }
     let path = [end];
     let currentNode = end;
 
     while (visited[currentNode][1] !== null) {
         path.unshift(visited[currentNode][1]);
         
         currentNode = visited[currentNode][1];
     }
     const direction = [];
     for(let i = 0; i < path.length; i++){
          if(i != 0){
               let ref = path[i-1];
               let [RefY, RefX] = ref.split(',').map(Number);
               let [pathY, pathX] = path[i].split (',').map(Number);
               if(RefX + 1 === pathX){
                    direction.push("right");
               }         
               else if( RefX -1 === pathX){
                    direction.push("left");
               }
               else if(RefY-1 === pathY){
                    direction.push("up");
               }
               else if(RefY+1 === pathY){
                    direction.push("down");
               }
          }
          

     }
     return direction;    
}
