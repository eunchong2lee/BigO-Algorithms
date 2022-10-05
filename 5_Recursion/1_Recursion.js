// ** 재귀 **

// 정의
// 재귀 함수란 자기 자신을 호출하는 함수

// 함수를 자기자신을 호출한다.
// 종료 시점이 있어야한다. (종료 기준)
// 다른 입력값이 계속 들어가야한다.

// 위험성
// 종료 시점이 없을 때
// 잘못된 값을 반환하거나, 애초에 반환하지 않는 것
// 최대 호출 스택 크기 초과
//

// Example

function countDown(num){
    if(num <= 0) {
        console.log("All Done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(10);

// Second Example

function sumRange(num) {
    if(num ===1) return 1;
    return num + sumRange(num -1);
}
console.log(sumRange(10)); //55

// Third Example
// factorial (!)
// normal function

function factorial(num) {
    let total = 1;
    for(let i = num; i> 0; i--) {
        total *=i;
    }
    return total;
}
console.log(factorial(10));

// Recursion function
function factorail2(num) {
    if(num ===1) return 1;
    return num * factorail2(num-1);
}
console.log(factorail2(10));