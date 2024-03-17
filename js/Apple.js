class Apple {
    constructor(gridItems) {
        do{
            this.x = Math.floor(Math.random() * gridItems) ;
            this.y = Math.floor(Math.random() * gridItems) ;
        } while((Game.grid[this.y][this.y] === 1)||(Game.grid[this.y][this.x]=== 2)||(Game.grid[this.y][this.x]=== 4))
    }
    addApple(){
        Game.grid[this.y][this.x] = 2;
        //document.getElementById(`${this.y},${this.x}`).innerText = 2;
        document.getElementById(`${this.y},${this.x}`).className = "apple row-item";
    }

}
