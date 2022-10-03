// 지금까지는 시간복잡도

// ** 공간 복잡도 **
// 입력이 커질수록 알고리즘이 얼마나 많은 공간을 차지 하는지에 대해

// booleans, numbers, undefined, null은 자바스크립트에서 모두 불변 공간이다. O(1)
// Strings(문자열)은 조금 다르다. 문자열은 O(n) 공간이 필요하다.
// reference 타입 (배열, 객체)도 대부분 O(n) 공간을 사용한다.


// First Example
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
// 공간을 차지하는 것 : total 변수 하나, i 변수 하나
// 상수 공간이여서 O(1) 공간을 차지한다.


// Second Example

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
// 새로운 배열을 만들기 때문에
// 공간 복잡도는 O(n)이다.