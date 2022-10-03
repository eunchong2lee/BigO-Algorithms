// ** objects **

// First Example
let instructor = {
    firstName : 'Kelly',
    inInstructor : true,
    favoriteNumbers : [1,2,3,4]
} 

// key value형태로 이루어져 있다.
// 객체는 정렬되어 있을 필요가 없을 때 잘 작동한다.
// 그리고 빠른 접근, 입력과 제거를 원할 때 좋다. 접근하는 시간이 상수 시간이다.
// 입력, 제거, 접근 모두 상수 시간이다 O(1)
// Object 안에서 원하는 값을 찾을 때는 O(N)의 시간 복잡도가 필요하다.
// Object로 처리하는 것은 빠르다.

// Object.keys - O(N) - key값들 출력
// Object.values - O(N) - value값들 출력
// Object.entreis - O(N) - key, value 값들 출력
// hasOwnProperty - O(N) - instructor.hasOwnProperty("firstName") - 키가 있는지 확인 해준다.
