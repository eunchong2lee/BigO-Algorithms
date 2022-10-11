// ** 그래프 Graphs **
// 그래프는 유한하고 변할 수 있는 꼭지점이나 노드나 점들의 집합으로 구성된 데이터 구조이다.
// 이 꼭지점들의 집합에 순서가 없는 경우에는 무방향 그래프, 순서가 있는 경우에는 유방향 그래프라고 한다.

// 용어
// 정점 vertex - 노드를 이르는 다른 말
// 간선 edge - 노드들을 연결하는 선
// 가중/비가중 Weighted/Unweighted - 정점 사이의 거리에 할당된 값
// 방향/무방향 Directed/Undirected - 정점 사이의 거리에 지정된 방향

// ** REPRESENTING A GRAPH 그래프 정렬: 인접 정렬 **
//       A  B  C  D  E  F
let A = [0, 1, 0, 0, 0, 1]
let B = [1, 0, 1, 0, 0, 0]
let C = [0, 1, 0, 1, 0, 0]
let D = [0, 0, 1, 0, 1, 0]
let E = [0, 0, 0, 1, 0, 1]
let F = [1, 0, 0, 0, 1, 0]


// ** REPRESENTING A GRAPH 그래프 정렬: 인접 리스트 ** Example
let Graphs = {
    A : ["B", "F"],
    B : ["A", "C"],
    C : ["B", "D"],
    D : ["C", "E"],
    E : ["D", "F"],
    F : ["E", "A"]    
}

// BigO 인접 정렬 vs 인접 리스트
// Operation  ||  인접 리스트   ||   인접 정렬
// ADD VERTEX ||  O(1)       ||    O(|V^2|)
// ADD Edge   ||  O(1)       ||    O(1)
// Remove Vertex ||  O(|V|+|E|)  ||    O(|V^2|)
// Remove Edge   ||  O(|E|)      ||    O(1)
// Query      ||  O(|V|+|E|) ||    O(1)
// Storage    ||  O(|V|+|E|) ||    O(|V^2|)