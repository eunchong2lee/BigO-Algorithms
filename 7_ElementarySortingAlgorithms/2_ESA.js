// ** 버블 정렬 BubbleSort ** 
// https://visualgo.net/en/sorting
// 두개의 항목을 비교하고 그 다음 다음 두개의 항목을 비교해서 정렬하는 방식
// 전부다 정렬 될 때까지 계속 반복한다.

function BubbleSort(arr) {
    for(var i = arr.length; i > 0; i--) {
        for(var j = 0; j < i-1; j++) {
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(BubbleSort([37,45,29,36,8,12,88,1000]));

// 최적화
// 더이상 비교할 필요가 없을 때 for 문에서 나오는 식을 추가

function BubbleSort2(arr) {
    var noSwaps;
    for(var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(var j = 0; j < i-1; j++) {
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(BubbleSort2([8,1,2,3,4,5,6,7]));

// 시간 복잡도
// 일반적으로 O(n^2)
// 거의 정렬 됐거나 이미 정렬이 끝난 상태에서는 O(N)
// 거의 다 정렬된 상태일 때는 사용해도 좋지만
// 좋은 정렬은 아니다.

