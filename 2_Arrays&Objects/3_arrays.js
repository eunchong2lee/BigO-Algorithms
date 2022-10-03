// ** array methods **

// push - O(1)
// pop - O(1)
// shift - O(N)
// unshift - O(N)
// concat - O(N)
// slice - O(N)
// splice - O(N)
// sort - O(N*logN)
// forEach/map/filter/reduce/etc. - O(N)

// 대체로
// 객체는 거의 모든것을 더 빠르게 하지만, 정렬되어 있지 않고
// 배열은 정렬되어 있지만, 끝에 추가하고 제거하는 것이 시작에 추가하고 제거하는 작업보다 빠르다.
// 시작이나 중간에 넣으면 인덱스가 꼬이므로 O(N)의 시간 복잡도가 사용된다.