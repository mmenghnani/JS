/** Undirected Graph */

class Graph {
  constructor() {
    (this.adjacencyList = {}), (this.visited = {}), (this.result = []);
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      item => item !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      item => item !== vertex1
    );
  }

  removeVertex(vertex) {
    let i = 0;
    while (this.adjacencyList[vertex].length > 0) {
      let v = this.adjacencyList[vertex][0];
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];
  }

  /**
   * Check if the vertex is null
   * push the vertex to the result
   * mark the vertex is visited
   * for each neighbor
   *    if its visited skip,
   *    else run the same function again
   * @param {*} vertex 
   */
  dfs(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    } else {
      this.result.push(vertex);
      this.visited[vertex] = true;
      this.adjacencyList[vertex].forEach(neighbor => {
          if(!this.visited[neighbor]){
              return this.dfs(neighbor);
          }
      });
    }
  }

  /**
   * Define a stack named S
   * push the current vertex in S
   * while stack is not empty
   *    get vertex by popping S
   *    if vertex is not marked as visited, 
   *        push the vertex to the result
   *        mark the vertex as visited
   *        for each neighbor of vertex, if its not marked as visited push it in the stack.
   * @param {*} vertex 
   */

  iterativeDFS(vertex){
      if(!this.adjacencyList[vertex]){
          return;
      } else {
              let stack = [];
              stack.push(vertex);
              while(stack.length > 0){
                  let v = stack.pop();
                  if(!this.visited[v]){
                      this.visited[v] = true;
                      this.result.push(v);
                      this.adjacencyList[v].forEach(neighbor => {
                          if(!this.visited[neighbor]){
                              stack.push(neighbor)
                          }
                      })
                  }
              }
      }
  }

  /**
   * Create a queue
   * add the vertex to the queue
   * while queue is not empty
   *    pop the first element of the queue
   *    push the element to the result
   *    mark the visited vertex as true
   *    push all neighbors of the vertex to the queue
   *    
   * @param {*} vertex 
   */
  BFS(vertex){
    if(!this.adjacencyList[vertex]){
        return;
    }
    else {
        let queue = [];
        queue.push(vertex);
        while(queue.length > 0){
            let v = queue.shift();
            if(!this.visited[v]){
                this.visited[v] = true;
                this.result.push(v);
                this.adjacencyList[v].forEach(neighbor => {
                    if(!this.visited[neighbor]){
                        queue.push(neighbor)
                    }
                });
            }
        }
    }

  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
// console.log(g);

let result = [];
let visited = {};

// g.dfs("A");
// g.iterativeDFS('A');
g.BFS('A');
console.log(g.result);
