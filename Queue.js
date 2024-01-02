
class SnakeItem {
	constructor(x,y){
		this.x = x;
		this.y = y
		this.direction="left";
	}
}
class Apple {
	constructor(x,y){
		this.x = x;
		this.y = y
	}
}
class Queue {
	constructor(){
	    this.items = {};
	    this.head = 0;
	    this.tail = 0;
 
	}
	enqueue(element){
	    this.items[this.tail] = element;
	    this.tail++;
 
	}
	deQueue(){
		const deltedItem = this.items[this.head];
	    delete this.items[this.head];
	    this.head++;
	    return deltedItem;
	    
	}
	peek() {
	    let peekElement = this.items[this.head];
	    return peekElement;
	}
	isEmpty() {
	    return this.head === this.tail;
	}
 }
