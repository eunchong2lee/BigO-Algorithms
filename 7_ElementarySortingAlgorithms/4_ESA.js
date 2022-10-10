// ** 삽입 정렬(Insertion Sort) **
// https://visualgo.net/en/sorting

function insertionSort(arr) {
    for(let i =1; i< arr.length; i++) {
        let currentVal = arr[i];
        for(var j = i-1; j >= 0 && arr[j]> currentVal; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
        console.log(arr);
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));

// bigO 
// worst O(n^2)
// best O(n)
// 거의 정렬되어 있을 때 유리함
