
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        else {
            let curr = this.root;
            while(true){
                if(curr.val > val){
                    if(!curr.left){ 
                        curr.left = newNode;
                        return this;
                    }
                    else {
                        curr = curr.left;
                    }
                }
                else if(curr.val < val){
                    if(!curr.right){
                        curr.right = newNode;
                        return this;
                    }
                    else {
                        curr = curr.right;
                    }
                }
            }
        }
    }

    find(val){
        if(!this.root) {
            console.log(false);
            return;
        }
        else {
            let curr = this.root;
            while(true){
                if(curr.val === val) {
                    console.log(true);
                    return;
                }
                else if(curr.val < val){
                    if(!curr.right) {
                        console.log(false);
                        return;
                    }
                    else {
                        curr = curr.right;
                    }
                }
                else if(curr.val > val){
                    if(!curr.left) {
                        console.log(false);
                        return;
                    }
                    else {
                        curr = curr.left;
                    }
                }
                
            }
        }
    }

    bfs(){
        if(!this.root) return null;
        let queue = [];
        let result = [];
        queue.push(this.root);
        while(queue.length > 0){
            let len = queue.length;
            let temp = [];
            for(let i=0;i<len;i++){
                let elem = queue.shift();
                if(elem.left){
                    queue.push(elem.left);
                }
                if(elem.right){
                    queue.push(elem.right);
                } 
                temp.push(elem.val);
            }         
            result.push(temp);   
        }
        console.log(result)
        return;
    }

    // dfs(){
    //     if(!this.root) return null;
    //     let result = [];
    //     let queue = [];
    //     queue.push(root);
    //     while(queue.length > 0){
    //         let elem = queue.shift();
    //         if(elem.left){
    //             queue.unshift(elem.left);
    //         }
    //         if(elem.right){

    //         }
    //     }
    // }

    dfs(){
        let result = [];
        function helper(root){
            if(!root) return null;
            if(root.left){
                helper(root.left);
            }
            result.push(root.val);
            if(root.right){
                helper(root.right);
            }
        }
        helper(this.root);
        console.log(result);
    }
}

var tree = new Tree();
tree.insert(5);
tree.insert(10);
tree.insert(7);
tree.insert(4);
// tree.find(8);
// tree.find(4);
// tree.find(5);
// tree.bfs();
tree.dfs();