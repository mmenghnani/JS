/**
 * 100, 19, 36, 17, 12, 25, 5
 * parent - i
 * left child -> 2i + 1
 * right child -> 2i + 2
 * 
 * parent = Math.floor((index-1)/2)
 * 
 * We are storing the maxHeap like an array where for every node i, the left child is at 2i + 1 and the right child is at 2i + 2.
 * Similarly, the parent node is stored at Math.floor((index-1)/2).
 * 
 * Insertion -> while inserting, we insert the node at the end of the array and compare with the parent. if the parent key is greater, we stop right there. 
 * else we swap parent and new node. keep doing this until the parent is greater. this is called bubbling up.
 * 
 * Extraction -> While removing, we swap the first element and last element of the array. And then pop the element. After this, we do bubbling down which 
 * means that compare the root node to both left and right parents. 
 * If both are greater, then we swap with the greater of left and right child. And repeat it until the root node finds its place. 
 */

class MaxBinaryHeap {
    constructor(){
        this.values = [41,39,18,27,12,33];
    }

    insert(val){
        this.values.push(val);
        // do bubbling up
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index-1)/2);
        while(true){
            if(this.values[index] > this.values[parentIndex]){
                [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]]
                index = parentIndex;
                parentIndex = Math.floor((index-1)/2)
            }
            else return;
        }
    }

    // Removing the max element from a heap
    extractMax(){
        // bubble down
        // swap first and last element.
        // then pop
        [this.values[0],this.values[this.values.length-1]] = [this.values[this.values.length-1], this.values[0]]
        // console.log(element + ' removed from the heap');
        this.values.pop();
        let index = 0;
        while(true){
            // compare with both the children and swap with the larger one.
            let leftParent = 2 * index + 1;
            let rightParent = 2 * index + 2;
            if(this.values[index] < this.values[leftParent] || this.values[index] < this.values[rightParent]){
                if(this.values[leftParent] > this.values[rightParent]){
                    [this.values[index], this.values[leftParent]] = [this.values[leftParent], this.values[index]]
                    index = leftParent;

                }
                else if(this.values[rightParent] > this.values[leftParent]){
                    [this.values[index], this.values[rightParent]] = [this.values[rightParent], this.values[index]]
                    index = rightParent;
                }
                else {
                    if(this.values[rightParent]){
                        [this.values[index], this.values[rightParent]] = [this.values[rightParent], this.values[index]]
                        index = rightParent
                    }
                    else {
                        [this.values[index], this.values[leftParent]] = [this.values[leftParent], this.values[index]]
                        index = leftParent
                    }
                    
                };
            }
            else return;
        }
    }
}

let newHeap = new MaxBinaryHeap();
newHeap.insert(55);
console.log(newHeap);
newHeap.extractMax();
console.log(newHeap);
newHeap.extractMax();
console.log(newHeap);