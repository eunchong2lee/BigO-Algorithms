// ** 그래프 순회 Graph Traversal **

class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]){ 
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1,v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length){
            const adjacentVertex= this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex];
    }


    // DFS 깊이 우선 탐색 에서는 두가지 방법이 있다.
    //     A
    //   /   \
    //  B    C
    //  |    |
    //  D -- E
    //  \    /
    //    F
     
    // 1. 재귀형 Recursive
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            })
        })(start);

        return result;
    }

    // 2. 순환형 Iterative
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length > 0) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] =true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }

    // ** BFS 너비 우선 탐색 **
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }

}
const g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//     A
//   /   \
//  B    C
//  |    |
//  D -- E
//  \    /
//    F

console.log(g.depthFirstRecursive("A"));
// [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(g.depthFirstIterative("A"));
// [ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log(g.breadthFirst("A"));
// [ 'A', 'B', 'C', 'D', 'E', 'F']
