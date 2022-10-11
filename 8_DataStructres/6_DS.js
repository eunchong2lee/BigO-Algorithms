// ** 트리 순회 **

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true) {
                if( value === current.value ) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    }else {
                        current = current.left;
                    }
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        if(this.root ===null) return false;
        let current = this.root;
        let found = false;
        while(current &&!found) {
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    // ** BFS 너비 우선 탐색 **
    //                10
    //            6       15
    //          3   8         20
    // 10 -> 6 -> 15 -> 3 -> 8 -> 20

    BFS() {
        let node = this.root;
        let data = [];
        let queue = [];  
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    // ** DFS 깊이 우선 탐색 ** 전위 순회 PreOrder
    //                10
    //            6       15
    //          3   8         20
    // 10 -> 6 -> 3 -> 8 -> 15 -> 20
    DFSPreOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }


    // ** DFS 깊이 우선 탐색 ** 후위 순회 PostOrder
    //                10
    //            6       15
    //          3   8         20
    // 3 -> 8 -> 6 -> 20 -> 15 -> 10
    DFSPostOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }


    // ** DFS 깊이 우선 탐색 ** 중위 순회 InOrder
    //                10
    //            6       15
    //          3   8         20
    // 3 -> 6 -> 8 -> 10 -> 15 -> 20
    DFSInOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if(node.lef t) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;

    }

}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log("BFS", tree.BFS());

console.log("DFSpreOrder", tree.DFSPreOrder());
console.log("DFSPostOrder", tree.DFSPostOrder());
console.log("DFSInOrder", tree.DFSInOrder());
