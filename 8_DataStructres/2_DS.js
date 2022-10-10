// ** 단방향 연결 리스트 (Singly Linked Lists) **

//  연결 리스트는 배열과 다르게 인덱스가 없다.
// 헤드 노드가 어디 있는지만 알고, 이 헤드 노드부터 다음 두 번째 노드를 알아내고,
// 두번째 노드에서 세 번째 노드를 알아 내는 식으로 마지막 노드까지 접근한다.

 // Example
// basic node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// 단방향 연결리스트
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // ****************************************************************
    // ** push **
    push(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // ****************************************************************
    // ** pop **

    // traverse(){
    //     let current = this.head;
    //     while(current) {
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    
    // ****************************************************************
    // shift

    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0 ){
            this.tail = null;
        }
        return currentHead;
    }

    // ****************************************************************
    // unshift

    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}
let list= new SinglyLinkedList();
console.log(list)
list.push("hello");
console.log(list)
list.push("Good Bye");
console.log(list)
list.push("my name is Eunchong");
console.log(list);
list.unshift("hellohello");
console.log(list);



