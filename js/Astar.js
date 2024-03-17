G_SCORE = 0
F_SCORE = 1
PREVIOUS = 2

function Astar(start,end,grid) {
    let unvisited = {};
    let visited = {};

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            unvisited[`${i},${j}`] = [-Infinity,-Infinity, null];
        }
    }
    let [startY, startX] = start.split(',').map(Number);
    let [endY, endX] = end.split (',').map(Number);
    function getNeighbours(current, board) {
        const [currentRow, currentCol] = current.split(',').map(Number);
        const neighbours = [];

        // Check the left neighbor
        if (currentCol > 0 && board[currentRow][currentCol - 1] !== 1 && board[currentRow][currentCol - 1] !== 3) {
            neighbours.push(`${currentRow},${currentCol - 1}`);
        }

        // Check the right neighbor
        if (currentCol < board[0].length - 1 && board[currentRow][currentCol + 1] !== 1 && board[currentRow][currentCol + 1] !== 3) {
            neighbours.push(`${currentRow},${currentCol + 1}`);
        }

        // Check the upper neighbor
        if (currentRow > 0 && board[currentRow - 1][currentCol] !== 1 && board[currentRow-1][currentCol] !== 3) {
            neighbours.push(`${currentRow - 1},${currentCol}`);
        }

        // Check the lower neighbor
        if (currentRow < board.length - 1 && board[currentRow + 1][currentCol] !== 1 && board[currentRow +1][currentCol] !== 3) {
            neighbours.push(`${currentRow + 1},${currentCol}`);
        }

        return neighbours;
    }
    function heuristic(startX, startY, endX, endY) {
        return Math.abs(startX - endX) + Math.abs(startY-endY) ;
    }

    let fScoreValue = heuristic(startX, startY, endX, endY);
    unvisited[start] = [0, fScoreValue, null];
    let finished = false;
    while(!finished){

        if(unvisited.length === 0){
            finished = true;
        }
        else {
            let keys = Object.keys(unvisited);
            let current = keys.reduce((minKey, key) => unvisited[key][F_SCORE] > unvisited[minKey][F_SCORE] ? key : minKey, keys[0]);
            if( current === end ){
                finished = true;
                visited[current] = unvisited[current];
            }
            else {
                let neighbours = getNeighbours(current, grid);


                for (let i = 0; i < neighbours.length; i++) {
                    if (!visited.hasOwnProperty(neighbours[i])) {
                        let newCost = unvisited[current][G_SCORE] + 1;
                        let [neighborY,neighborX] = neighbours[i].split(",").map(Number);

                        if (newCost > unvisited[neighbours[i]][G_SCORE]) {
                            unvisited[neighbours[i]][G_SCORE] = newCost;
                            unvisited[neighbours[i]][F_SCORE] = newCost + heuristic(neighborX, neighborY, endX, endY);
                            unvisited[neighbours[i]][PREVIOUS] = current;
                        }
                    }
                }
                visited[current] = unvisited[current];
                let [currentX, currentY] = current.split(",").map(Number);


                delete unvisited[current];
            }
        }
    }
    let path = [end];
    let currentNode = end;


    while (visited[currentNode][PREVIOUS] !== null) {
        path.unshift(visited[currentNode][PREVIOUS]);
        currentNode = visited[currentNode][PREVIOUS];
    }

    const direction = [];
    for (let i = 0; i < path.length; i++) {
        if (i !== 0) {
            let ref = path[i - 1];
            let [RefY, RefX] = ref.split(',').map(Number);
            let [pathY, pathX] = path[i].split (',').map(Number);

            if (RefX + 1 === pathX) {
                direction.push(90);
            } else if (RefX - 1 === pathX) {
                direction.push(270);
            } else if (RefY - 1 === pathY) {
                direction.push(0);
            } else if (RefY + 1 === pathY) {
                direction.push(180);
            }
        }
    }
    return direction


}
// const grid2 = [
//     [1,1,1,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
// ];
// console.log(Astar("0,2","0,0",grid2));
