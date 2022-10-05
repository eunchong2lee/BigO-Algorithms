// ** 분할과 정복 패턴 (Divide and Conquer) **
// 이 알고리즘은 주로 배열이나 문자열 같은 큰 규모의 데이터셋을 처리한다.


// Example
// 배열을 취합한다( 항상 정렬되어 있어야함)
// 숫자에 해당되는 인덱스 위치의 값을 출력한다.
// 해당되는 숫자가 없을 경우에 -1을 리턴한다.

console.log(search([1,2,3,4,5,6],4)); //3
console.log(search([1,2,3,4,5,6],6)); //5
console.log(search([1,2,3,4,5,6],11)); //-1


// Native Solution
function search(arr,num) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}

// 시간 복잡도 O(N)

// 리펙토링 solution

console.log(search2([1,2,3,4,5,6],4)); //3
console.log(search2([1,2,3,4,5,6],6)); //5
console.log(search2([1,2,3,4,5,6],11)); //-1


function search2(array, val) {
    let min = 0;
    let max = array.length -1;

    while(min <= max){
        let middle = Math.floor((min+max)/2);
        let currentElement = array[middle];

        if(array[middle]<val){
            min = middle +1;
        }
        else if(array[middle]>val){
            max = middle -1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

// 시간 복잡도 O(Log(N))