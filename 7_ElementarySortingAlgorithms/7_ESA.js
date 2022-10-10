// ** 퀵 정렬 Quick Sort **
// 피벗 포인트라는 단일 요소를 선택하여 수행한다.
// (기준)해당 숫자보다 작은 숫자를 왼쪽으로 옮기고 큰 숫자를 오른쪽으로 옮긴다.
// 이 과정을 왼쪽과 오른쪽에 반복한다.

// https://visualgo.net/en/sorting

// 요소 하나를 피벗으로 설정해 피벗보다 작은 값은 왼쪽으로 큰 값은 오른쪽으로 옮긴다.
// 왼쪽과 오른쪽 안에서는 순서가 상관없다.

// 피벗 선택 위치를 정하는 것 (피벗의 값에 따라서 효율이 달라진다. 최대한 중간값이 설정되게 한다.)

// pivot 함수

function pivot(arr, start=0, end = arr.length+1){
    function swap(array, i , j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start+1; i< arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr,swapIdx,i)
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length-1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr,left, pivotIndex-1);
    
        //right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}
console.log(quickSort([4,8,2,1,5,7,6,3]))

// bigO
// Best O(n log n)
// average O(n log n)
// Worst O(n^2)
// Space O(log n)