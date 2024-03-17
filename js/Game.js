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
        const queue = new Queue();

        let interval = setInterval(() => {
            if (queue.isEmpty()){
                const direct = Astar(
                    `${body[0].y},${body[0].x}`,
                    `${body[body.length- 1].y},${body[body.length-1].x}`,
                    Game.grid
                )
                for (let i = 0; i < direct.length; i++) {
                    queue.enqueue(direct[i]);
                }
            }
            if (Game.grid[body[0].y][body[0].x] === 4) return;
            if (Game.grid[body[0].y][body[0].x] === 2){
                const increase = new SnakeSegment(
                    body[body.length-1].x,
                    body[body.length-1].y
                )
                snake.body.push(increase);
                const apple = new Apple(9);
                apple.addApple();
            }

            for(let i = 0; i < snake.body.getStackData().length;i ++){
                this.setGrid(snake.body.getStackData()[i].x,snake.body.getStackData()[i].y,snake);
            }
            body[0].direction = queue.deQueue();

            snake.move(body[0].direction);

        }, this.tickSpeed);

    }
    setGrid(x,y,snake){
        if(Game.grid[y][x] === Game.grid[snake.body.getStackData()[snake.body.getStackData().length- 1].y][snake.body.getStackData()[snake.body.getStackData().length - 1].x]){
            Game.grid[y][x] = 4;
            //document.getElementById(`${y},${x}`).innerText = 4;
            document.getElementById(`${y},${x}`).className = "snake row-item";
            return;
        }

        Game.grid[y][x] = 1;

        //document.getElementById(`${y},${x}`).innerText = 1;
        document.getElementById(`${y},${x}`).className = "snake row-item";

    }
}
