class Snake {
    constructor(props) {
        this.body = new Stack(81);
        for(let i = 0; i < 3; i++){
            this.body.push(new SnakeSegment(i,0))
        }

    }

}