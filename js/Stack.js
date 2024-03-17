class Stack {

    #stackData = [];
    #stackSize;
    top = 0;

    constructor(stackSize) {
        this.#stackSize = stackSize;
    }
    getStackData(){
        return this.#stackData;
    }
    push(props){

        if(this.#stackData.length >= this.#stackSize) return;

        this.top++;
        this.#stackData.push(props);
    }
    peek(){ return this.#stackData[this.top - 1]; }
    pop(){
        if(this.#stackData.length === 0) return;

        const poppedItem = this.peek();
        this.#stackData.splice(this.top-1,1);
        this.top--;
        return poppedItem;
    }
}





