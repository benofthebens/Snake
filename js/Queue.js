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
        const deletedItem = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return deletedItem;

    }
    peek() {
        return this.items[this.head];
    }
    isEmpty() {
        return this.head === this.tail;
    }
}