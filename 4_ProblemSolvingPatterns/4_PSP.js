// ** 다중 포인터 (MULTIPLE POINTERS) **
// 고유값을 세는 도전 (count unique values)


// Example
// 정렬된 배열의 고유값의 갯수를 구하는 함수
console.log(countUniqueValues([1,1,1,1,1,1,2])); //2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2,-1,-1,0,1])); //4


// solution
function countUniqueValues(arr){
    if(arr.length ===0)return 0;
    let i = 0;
    for (let j= 1; j< arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
        // console.log(i,j)
    }
    return i+1;
}

