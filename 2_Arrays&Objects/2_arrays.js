// ** Arrays **

// 접근 O(1) object와 같음 배열의 어느 위치에 있어도 접근은 O(1)의 시간 복잡도를 사용
// 입력과 제거는 어디에 입력과 제거를 하는지에 따라서 시간복잡도가 달라진다.
// 끝에다가 추가하는 것과 제거하는 것은 O(1)의 시간 복잡도를 사용한다.
// 앞에다가 추가하는 것과 제거하는 것은 인덱스가 엉망이 되어서 O(N)의 시간 복잡도를 사용한다.
// 찾는 것은 O(N)의 시간 복잡도를 사용

// Example
let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];
