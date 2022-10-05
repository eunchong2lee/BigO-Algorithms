// ** 이진 검색 Binary Search **
// 훨씬 더 빠르게 찾을 수 있다.
// 이진 검색은 확인을 할 때마다 남은 항목의 절반을 없앨 수 있다.
// 주의 이진 검색은 분류된 배열을 대상으로만 작동한다. 오름차순 또는 내림차순
// 기본적인 개념은 분할 정복이다. 배열을 계속 반으로 나누면서 해당되는 부분만 남긴다.
// 이 함수는 분류된 배열을 인자로 받는다.

// Example

function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start +end)/2);

    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) {
            end = middle -1;
        } else {
            start = middle +1;
        }
        middle = Math.floor((start + end)/2);
        
    }
    return arr[middle] === elem ? middle : -1; 
}
console.log(binarySearch([2,3,4,5,8,10,15,24], 25));

// 이진 검색 BigO
// Worst and Average Case O(log n)
// Best Case O(1)