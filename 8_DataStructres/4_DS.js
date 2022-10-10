// ** 스택, 큐  Stacks QUEUES **

// ** 스택 Stacks **
// 후입 선출 원칙을 따르는 데이터들의 모음

let stack = [];
stack.push("google");
console.log(stack);
stack.push("instagram");
console.log(stack);
stack.push("youtube");
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
    }
    pop() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
let stack2 = new Stack();
stack2.push(23);
stack2.push(233);
console.log(stack2);

// stack 
// bigO
// insertion O(1)
// removal O(1)
// searching O(N)
// Access O(N)


// ** 큐 Queues **
// 선입선출 원칙을 따르는 데이터들의 모음

let q = [];
console.log(q);
q.push("FIRST");
console.log(q);
q.push("SECOND");
console.log(q);
q.push("THIRD");
console.log(q);
q.shift();
console.log(q);
q.shift();
console.log(q);
q.shift();
console.log(q);

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node2(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size ++;
        return this;

    }

    dequeue() {
        if(!this.first) return null;

        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size --;
        return temp.value;
    }
}

class Node2 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let q2 = new Queue();
q2.enqueue(11);
q2.enqueue(22);
console.log(q2)
q2.dequeue();
console.log(q2)
q2.dequeue();
console.log(q2)

// 큐
// BigO
// insertion O(1)
// removal O(1)
// searching O(N)
// Access O(N)
