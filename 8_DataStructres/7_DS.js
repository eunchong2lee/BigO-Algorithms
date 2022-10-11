// ** 이진 힙 BINARY HEAPS **
// 보편적으로 MAX BINARY HEAP 과 MIN BINARY HEAP 두개의 종류가 있다. 
// 힙은 트리 구조의 일종이다.
// 최대 이진 힙에서는 부모 노드가 항상 자식 노드보다 큰 값을 가진다.
// 왼쪽이나 오른쪽 상관없이 한 레벨에 있는 자식 노드보다는 항상 부모 노드가 크다.
// 트리와 같이 최대 두개의 자식 노드를 가진다.
// 이진 탐색 트리와는 다르게 왼쪽과 오른쪽에는 순서가 존재하지 않는다.
// 만약에 새로운 값이 부모보다 크다면 부모랑 자식이랑 위치를 바꾼다.


// 최대 이진 힙 MAX BINARY HEAP

class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length -1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0 ) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element  = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx +1;
            let rightChildIdx = 2 * idx +2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild> element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (swap ===null &&rightChild> element) || 
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx;
                }
            }
            // let leftChild = this.values[leftChildIdx];
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
        
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);