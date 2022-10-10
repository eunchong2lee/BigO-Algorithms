// ** 트리 TREES **
// 일반 트리, 이진 트리, 이진 탐색 트리

// 트리란?
// 트리는 연결 리스트 처럼 노드로 이루어진 데이터 구조
// 노드들 사이에는 부모 자식 관계가 있다.
// 트리는 가지를 가지게 된다.
// 한 노드가 여러개의 노드를 가지게 된다. (2개, 3개, 여러가지)
// 연결리스트처럼 한 노드가 한개의 노드가 아니라 여러개의 노드를 가질 수 있다.
// 리스트는 선형 구조고 트리는 비선형 구조이다.
// 출발지점은 하나이다

// 용어
// 루트 Root - 트리 꼭대기에 있는 노드를 말한다.
// 자식 child - 자식은 루트에서 멀어지는 방향으로 연결된 노드이다.
// 부모 parent - 자식과 반대 개념
// 시블링 siblings - 같은 부모는 가지는 노드를 말한다.
// 리프 leaf - 자식이 없는 노드 
// 간선 edge - 간선은 한 노드에서 다른 노드로 향하는 화살표

// 사용 하는 곳
// HTML DOM
// NETWORK ROUTING
// ABSTRACT SYNTAX TREE 추상 구문 트리
// 인공지능 Artificial intelligence
// 운영체제에서 폴더가 설계 된 방식


// ** 이진 검색 트리 **
// 큰 숫자는 오른쪽 작은 숫자는 왼쪽
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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(3);
console.log(tree);
console.log(tree.find(6));

// bigO
// insertion O(log n)
// searching O(log n)