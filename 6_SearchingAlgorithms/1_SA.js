// ** 검색 알고리즘 (Searching Algorithms) **

// ** 선형 검색 linear Search ** 
// 첫부분에서 시작해서 끝부분으로 이동하면서 한 번에 하나의 항목을 확인
// 끝부분에서 시작해서 첫부분으로도 이동 가능
// indexOf 이런 것과 같은 자바스크립트 내장함수는 선형 검색이다.

// Example

function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]=== val) {
            return i;
        }
    }
    return -1;
}

linearSearch([34,56,1,2],1)

// BigO
// Best O(1)
// Average O(N)
// Worst O(N)