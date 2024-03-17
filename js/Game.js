
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
        let interval = setInterval(() => {
            if (Game.grid[snake.body.getStackData()[0].y][snake.body.getStackData()[0].x] === 1) {

                return;
            }


            for(let i = 0; i < snake.body.getStackData().length;i ++){

                this.setGrid(snake.body.getStackData()[i].x,snake.body.getStackData()[i].y,snake);
            }

        }, this.tickSpeed);

    }
    setGrid(x,y,snake){
        Game.grid[y][x] = 1;

        document.getElementById(`${y},${x}`).innerText = 1;
        document.getElementById(`${y},${x}`).className = "snake row-item";
        if(snake.previousTail){
            Game.grid[snake.previousTail.y][snake.previousTail.x] = 0;
            document.getElementById(`${snake.previousTail.y},${snake.previousTail.x}`).innerText = 0;
            document.getElementById(`${snake.previousTail.y},${snake.previousTail.x}`).className = "row-item";
        }

    }
}
