class Stack {
    constructor(){
        this.items = [];
    }

    push(elem){
        this.items.push(elem);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length-1]
    }
}

let s = new Stack();
s.push(1);
s.push(3);
s.push(4);
console.log(s.pop());
console.log(s.peek());