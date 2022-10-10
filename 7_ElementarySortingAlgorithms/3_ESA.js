// ** 선택정렬 Selection Sort **
// https://visualgo.net/en/sorting
// 1. 처음 해야 할 일은 최솟값을 저장할 변수를 만드는 것이다.
// 2. 그 다음 항목이 더 작을 경우, 해당 다음 항목을 가장 작은 변수 값으로 갱신한다.
// 3. 작은 값을 찾으면 그 작은 값으로 지정하고, 정렬 될 때까지 계속 진행한다.

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for( let j = i+1; j< arr.length; j++){
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([34,22,10,19,17]));

// bigO
// BigO O(n^2)