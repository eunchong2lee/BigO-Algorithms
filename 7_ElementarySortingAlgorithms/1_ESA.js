// ** 정렬 **
// 간단하게 설명하자면 정렬 알고리즘은 컬렉션의 항목을 재배열 하는 과정을 말한다.

// 자바스크립트 기본 내장 정렬
let array = [1,5,4,3,2,1]
array.sort();

function numberCompare(num1, num2) {
    return num1 - num2;
}
console.log([6,4,15,10].sort(numberCompare));