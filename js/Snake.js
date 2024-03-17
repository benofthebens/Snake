class Snake {
    constructor(props) {

        this.body = new Stack(81);
        this.previousPostion = null;
        for(let i = 2; i >= 0; i--){

            this.body.push(new SnakeSegment(i,0));

        }
    }
    move(direction){
        const body = this.body.getStackData();
        if (this.previousPosition) {
            Game.grid[this.previousPosition.y][this.previousPosition.x] = 0;
            //document.getElementById(`${this.previousPosition.y},${this.previousPosition.x}`).innerText = 0;
            document.getElementById(`${this.previousPosition.y},${this.previousPosition.x}`).className = "row-item";
        }
        this.previousPosition = new SnakeSegment(body[body.length-1].x,body[body.length-1].y);

        if(Math.abs(body[0].direction - direction) === 180) return;

        for (let i = body.length- 1; i > 0; i--) {

            body[i].x = body[i - 1].x;
            body[i].y = body[i - 1].y;

        }

        switch (direction){
            case 0:
                body[0].y = body[0].y - 1;
                break;
            case 90:
                body[0].x = body[0].x + 1; break;
            case 180:
                body[0].y = body[0].y + 1; break;
            case 270:
                body[0].x = body[0].x - 1; break;
        }

        body[0].direction = direction;

    }

}