
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
    gameLoop(snake){
        const body = snake.body.getStackData();
        let interval = setInterval(() => {
            
            if (Game.grid[snake.body.getStackData()[0].y][snake.body.getStackData()[0].x] === 1) return;

            for(let i = 0; i < snake.body.getStackData().length;i ++){
                this.setGrid(snake.body.getStackData()[i].x,snake.body.getStackData()[i].y);
            }

            snake.move(snake.body.getStackData()[0].direction);

        }, this.tickSpeed);

    }
    setGrid(x,y){

        Game.grid[y][x] = 1;

        document.getElementById(`${y},${x}`).innerText = 1;
        document.getElementById(`${y},${x}`).className = "snake row-item";

    }
}
