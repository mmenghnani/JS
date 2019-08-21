class minHeap {
    constructor(){
        this.tasks = []
    }

    addTask(elem){
        // bubble up
        this.tasks.push(elem);
        let index = this.tasks.length - 1;
        let parentIndex = Math.floor((index-1)/2);
        while(index > 0){
            if(this.tasks[index].priority < this.tasks[parentIndex].priority){
                [this.tasks[index], this.tasks[parentIndex]] = [this.tasks[parentIndex], this.tasks[index]]
                index = parentIndex;
                parentIndex = Math.floor((index-1)/2)
            }
            else return;
        }
    }

    removeTask(){
        //bubble down
        [this.tasks[0], this.tasks[this.tasks.length-1]] = [this.tasks[this.tasks.length-1], this.tasks[0]]
        this.tasks.pop();
        let index = 0;
        while(true){
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2
            if((this.tasks[leftChild] && this.tasks[index].priority > this.tasks[leftChild].priority) || (this.tasks[rightChild] && this.tasks[index].priority > this.tasks[rightChild].priority)){
                if(this.tasks[leftChild].priority < this.tasks[rightChild].priority){
                    [this.tasks[index],this.tasks[leftChild]] = [this.tasks[leftChild], this.tasks[index]]
                    index = leftChild;
                }
                else if(this.tasks[rightChild].priority < this.tasks[leftChild].priority){
                    [this.tasks[index],this.tasks[rightChild]] =  [this.tasks[rightChild], this.tasks[index]]
                    index = rightChild;
                }
                else {
                    if(this.tasks.leftChild){
                        [this.tasks[index],this.tasks[leftChild]] = [this.tasks[leftChild], this.tasks[index]]
                        index = leftChild;
                    }
                    else if(this.tasks.rightChild){
                        [this.tasks[index],this.tasks[rightChild]] =  [this.tasks[rightChild], this.tasks[index]]
                        index = rightChild;
                    }
                }
            }
            else return;
        }
    }
}

let minH = new minHeap();
minH.addTask({'priority' : 5});
minH.addTask({'priority' : 4});
minH.addTask({'priority' : 3});
minH.addTask({'priority' : 2});
minH.addTask({'priority' : 1});
console.log(minH);
minH.removeTask();
console.log(minH);
minH.removeTask();
console.log(minH);
minH.removeTask();
console.log(minH);