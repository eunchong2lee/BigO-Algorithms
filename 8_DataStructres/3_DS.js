// ** 양방향 연결 리스트 ( Doubly Linked Lists) **
// 단방향과 다르게 각 노드마다 연결 되어있는 방향이 두개이다.
// 각 노드가 다음 노드와 전 노드를 가리킨다.


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // ****************************************************************
    // ** push **
    push(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;        
    }
    // ****************************************************************
    // ** pop **
    pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1) { 
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length --;
        return poppedNode;
    }
    // ****************************************************************
    // ** shift **
}

let list = new DoublyLinkedList();

list.push(99);

list.push(100);

list.push(101);
list.pop();
console.log(list);