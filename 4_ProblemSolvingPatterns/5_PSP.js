// ** 기준점 간 이동 배열 패턴(Sliding Window) **
// 배열이나 문자열과 같은 일련의 데이터를 입력하거나 특정 방식으로 연속적인
// 해당 데이터의 하위 집합을 찾는 경우에 유용하다.

// Example
// 정수 배열과 n이라는 수를 취하는 maxSubarraySum 함수를 작성
// 해당 배열의 연속된 요소의 가장 큰 합계를 계산한다.

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) //10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) //17
console.log(maxSubarraySum([4,2,1,6],1)) //6
console.log(maxSubarraySum([4,2,1,6,2],4)) //13
console.log(maxSubarraySum([],4)) //null

// Nave soluition

function maxSubarraySum(arr, num) {
    if( num >arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i< arr.length -num +1; i++){
        temp = 0;
        for (let j = 0; j < num; j++){
            temp += arr[i+j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}
// 시간 복잡도 O(N^2)

// 리팩토링 코드

console.log(maxSubarraySum2([1,2,5,2,8,1,5],2)) //10
console.log(maxSubarraySum2([1,2,5,2,8,1,5],4)) //17
console.log(maxSubarraySum2([4,2,1,6],1)) //6
console.log(maxSubarraySum2([4,2,1,6,2],4)) //13
console.log(maxSubarraySum2([],4)) //null

function maxSubarraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if( arr.length <num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// 시간 복잡도 O(N)