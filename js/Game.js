
class Game {
    static grid = [
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
    tickSpeed;
    gameFinished = false;

    constructor(_tickSpeed) {
        this.tickSpeed = _tickSpeed;

    }
    gameLoop(){
        let interval = setInterval(async function(){

        }, this.tickSpeed);

    }
    setGrid(x,y){
        Game.grid[y][x] = 1;
        document.getElementById(`${y},${x}`).innerText = 1;
    }
}
