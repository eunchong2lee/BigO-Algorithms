// ** 다중 포인터 (MULTIPLE POINTERS) **
// 중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동시키는 것을 말한다.
// 결론적으로 말하자면, 배열이나 문자열과 같은 일종의 선형 구조나 이중 연결리스트 같은 것을 단일 연결 리스트를 만드는거다.

// Example
// 정렬된 배열을 취하는 sumZero라는 합수를 작성한다.
// 분류가 아닌 정렬인 배열이어야만 한다. (다만 오름차순이어야한다.)
// 이 함수는 합계가 0인 첫 번째 쌍, 즉 한 숫자에 한 숫자를 더해 0이 되는 쌍을 찾는 것
// 합이 0인 쌍이 없으면 undefined을 출력한다.

console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3]
console.log(sumZero([-2,0,1,3])) // undefined
sumZero([1,2,3]) //undefined

// native solution
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j=i+1; j< arr.length; j++){
            if(arr[i]+arr[j]===0){
                return [arr[i], arr[j]];
            }
        }
    }
}
// 시간 복잡도 O(N^2)
// 공간 복잡도 O(N)



// 리팩토링 코드
console.log(sumZero2([-3,-2,-1,0,1,2,3])) // [-3,3]
console.log(sumZero2([-2,0,1,3])) // undefined
sumZero2([1,2,3]) //undefined


function sumZero2(arr) {
    let left = 0;
    let right = arr.length -1;
    while(left <right){
        let sum = arr[left]+arr[right];
        if( sum ===0){
            return [arr[left], arr[right]];
        } else if(sum>0){
            right --;
        } else{
            left ++;
        }
    }
}
// 시간 복잡도 O(N)
// 공간 복잡도 O(1)