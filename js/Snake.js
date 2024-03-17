class Snake {
    constructor(props) {

        this.body = new Stack(81);
        this.previousTail = null;
        for(let i = 2; i >= 0; i--){

            this.body.push(new SnakeSegment(i,0));

        }
    }
    move(direction){
        if(Math.abs(this.body.getStackData()[0].direction - direction) === 180){
            return;
        }
        const body = this.body.getStackData();

        this.previousTail = new SnakeSegment(body[this.body.top - 1].x,body[this.body.top - 1].y);

        for (let i = body.length- 1; i > 0; i--) {


            body[i].x = body[i - 1].x;
            body[i].y = body[i - 1].y;

        }
        switch (direction){
            case 0:
                body[0].y = body[0].y - 1; break;
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