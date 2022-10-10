// ** 합병 정렬 Merge Sort **
// 분할, 정렬, 합병이 모두 일어난다.
// 배열을 더 작은 배열로 나누는 방식이다.
// 분할 한다음에 정렬 후 합병한다.
// https://visualgo.net/en/sorting

// 정렬된 두 배열 합병을 담당할 함수를 먼저 구현하는게 좋다.
// 정렬된 두 배열이 주어지면 이 헬퍼 함수는 마찬가지로 정렬된 새 배열을 만든다.
// 재귀 함수를 많이 사용한다.

// 합병
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// console.log(merge([1,10,50], [2,14,99,100]));

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}


console.log(mergeSort([10,24,76,73,72,1,9]));

// bigO
// Best O(n log n)
// average O(n log n)
// Worst O(n log n)
// Space O(n);
