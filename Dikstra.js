const graph = 
[
     [0,0,0],
     [0,0,0],
     [0,0,0]
];
const start = "0,0";
let Cost = 0;

function Dijkstra(){
     let unvisited = {};
     let visited = {};

     for(let i = 0; i < graph.length; i++){
          for(let j = 0; j < graph[0].length; j++){
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
               let neighbours = GetNeighbours(current);
               
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
     return visited;
     

     
}
function GetNeighbours(current){
     
     const [currentRow, currentCol] = current.split(',').map(Number);
     const neighbours = [];
     // Check the left neighbor
     if (currentCol > 0) {
          neighbours.push(`${currentRow},${currentCol - 1}`);
     }

     // Check the right neighbor
     if (currentCol < graph[0].length - 1) {
          neighbours.push(`${currentRow},${currentCol + 1}`);
     }

     // Check the upper neighbor
     if (currentRow > 0) {
          neighbours.push(`${currentRow - 1},${currentCol}`);
     }

     // Check the lower neighbor
     if (currentRow < graph.length - 1) {
          neighbours.push(`${currentRow + 1},${currentCol}`);
     }

     return neighbours;
}
console.log(Dijkstra());