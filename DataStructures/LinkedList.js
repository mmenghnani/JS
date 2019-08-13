class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
      this.length--;
    } else {
      let curr = this.head;
      let prev = null;
      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
      this.tail = prev;
      this.length--;
      console.log("Value of the node removed from the end is: " + curr.val);
    }
  }

  traverse() {
    let i = 0;
    let curr = this.head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
      i++;
    }
    console.log("Length of the list :" + i);
  }

  unshift(val) {
    let newNode = new Node(val);
    let curr = this.head;
    this.head = newNode;
    newNode.next = curr;
  }

  shift() {
    let curr = this.head;
    this.head = curr.next;
    this.length--;
    console.log("Value of the node removed from the beginning is : " + curr.val);
  }

  get(position) {
    let i = 0;
    let curr = this.head;
    while (curr.next) {
      if (i === position) {
        console.log(`Value of the node at ${position} is: ` + curr.val);
        return;
      }
      curr = curr.next;
      i++;
    }
  }

  // remove(val){
  //     if(!val) return 'null';
  //     if(this.head.val === val){
  //         this.head = this.head.next;
  //     }
  //     else {
  //         let curr = this.head;
  //         let prev = null;
  //         while(curr){
  //             prev = curr;
  //             curr = curr.next;
  //             if(curr.val === val){
  //                 prev.next = curr.next;
  //             }
  //         }
  //     }

  // }
}

var list = new LinkedList();
list.push(5);
list.push(7);
list.push(8);
list.push(10);
list.pop();
list.shift();
list.unshift(3);
list.traverse();
list.get(0);
// console.log(list);
