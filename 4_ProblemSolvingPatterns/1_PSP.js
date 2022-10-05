// ** 일반적인 문제 해결 패턴을 파악하는 것 **

// ** Frequency Counter 빈도수 세기 **
// 빈도수 세기 패턴은 알고리즘과 과제에 있는 여러 데이터와 입력값이
// 서로 비슷한 값으로 구성되어 있는지, 서로 간의 값이 다른 값에 포함되는지 여부를 비교하거나,
// 데이터를 입렵값이나 두 개 이상의 빈도 혹은 특정하게 발생하는 빈도와 비교할 때 유용하다.
// 배열을 object 형래로 바꿔 효율적으로 바꾼다.

// Example
// 2개의 배열을 허용하는 same이라는 함수를 작성
// 배열의 모든 값이 두 번째 배열에 해당되는 값을 가지면 참을 반환
// 첫 번째 배열에는 여러 값이 있고 두 번째 배열의 값에 첫 번째 배열의 값이 제곱되어 해당되는지 확인
// 순서가 섞여도 상관 없다.
// 첫 번째 배열 하나의 값이 두 번째 배열의 하나의 값에 해당되어야한다. (빈도수가 같아야함)

console.log(same([1,2,3],[4,1,9])) // true
console.log(same([1,2,3,2],[4,1,9,4])) // true
same([1,2,3],[1,9]) // false 2에 해당되는 제곱의 값이 없으므로 false
same([1,2,1],[4,4,1]) // false

// 일반적인 코드

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    for(let i=0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i]**2);
        if(correctIndex === -1) return false;
        arr2.splice(correctIndex, 1);
    }
    return true;
}
// 시간 복잡도 - O(n**2)

// 빈도수 세기 패턴 리펙토링
console.log(same2([1,2,3],[4,1,9])) // true
console.log(same2([1,2,3,2],[4,1,9,4])) // true
same2([1,2,3],[1,9]) // false 2에 해당되는 제곱의 값이 없으므로 false
same2([1,2,1],[4,4,1]) // false


function same2(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    let frequncyCounter1 = {};
    let frequncyCounter2 = {};

    for (let val of arr1) {
        frequncyCounter1[val] = (frequncyCounter1[val] || 0)+1; 
    }
    for (let val of arr2) {
        frequncyCounter2[val] = (frequncyCounter2[val] || 0)+1; 
    }
    console.log(frequncyCounter1, frequncyCounter2);
    for(let key in frequncyCounter1){
        if(!(key**2 in frequncyCounter2)){
            return false;
        }
        if(frequncyCounter2[key**2]!==frequncyCounter1[key]){
            return false;
        }
    }
    return true;
}

// 시간 복잡도 - O(n)
