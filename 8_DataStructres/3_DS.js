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

    shift() {
        if(this.length===0) return undefined;
        let oldHead = this.head;
        if(this.length ===1) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length --;
        return oldHead;
    }
    // ****************************************************************
    // ** shift **

    unshift(val) {
        let newNode = new Node(val);
        if(this.length === 0 ) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this;
    }

    // ****************************************************************
    // ** get **

    get(index) {
        if(index < 0 || index >= this.length) return false;
        if(index <= this.length/2) {
            let count = 0;
            let current = this.head;
            while(count != index) {
                current = current.next;
                count ++;
            }
            return current;
        } else {
            let count = this.length-1;
            let current = this.tail;
            while(count != index){
                current = current.prev;
                count --;   
            }
            return current;
        }

    }

    // ****************************************************************
    // ** set **

    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // ****************************************************************
    // ** insert **

    insert(index, val) {
        if(index < 0 || index> this.length) return false;
        if(index === 0 ) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    // ****************************************************************
    // ** remove **

    remove(index) {
        if(index < 0 || index>= this.length) return undefined;
        if(index === 0 ) return this.shift();
        if(index === this.length -1) return this.pop();

        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev  = beforeNode;
        // removedNode.prev.next = removedNode.next;
        // removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length --;
        return removedNode;
    }
}

let list = new DoublyLinkedList();

list.push(99);

list.push(100);

list.push(101);
list.shift();
list.unshift(99);
console.log(list.get(1));


// 양방향 연결리스트 
// BigO
// insertion O(1)
// Removal O(1)
// Searching O(N)
// Access O(N)
// 좋은 Searching O(N/2)


// 단일 연결리스트
// BigO
// insertion O(1)
// removal O(1) or O(N)
// searching O(N)
// Access O(N)
