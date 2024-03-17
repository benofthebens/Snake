
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

            snake.move(90,this);
            for(let i = 0; i < snake.body.getStackData().length;i ++){
                this.setGrid(snake.body.getStackData()[i].x,snake.body.getStackData()[i].y,snake);
            }

        }, this.tickSpeed);

    }
    setGrid(x,y,snake){
        Game.grid[y][x] = 1;

        document.getElementById(`${y},${x}`).innerText = 1;
        if(snake.previousTail){
            Game.grid[snake.previousTail.y][snake.previousTail.x] = 0;
            document.getElementById(`${snake.previousTail.y},${snake.previousTail.x}`).innerText = 0;
        }

    }
}
