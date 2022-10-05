// ** 나이브 문자열 검색 (Naive String Search) **
// 긴 만주열에서 짧은 문자열이 등장하는 횟수를 셀 떄 사용

// 방식
// 긴 문자열을 반복하는 루프를 만든다.
// 짧은 문자열을 반복하는 루프도 만든다.
// 기본적으로 확인을해 문자가 일치하지 않으면 내부 루프에서 벗어난다.
// 문자열이 일치하면, 계속 실행하고 횟수를 센다
// 리턴한다.

// Example

function naiveSearch(long, sort) {
    let count = 0;
    for(var i = 0; i < long.length; i++) {
       for (var j = 0; j <sort.length; j++) {
            if(sort[j] !== long[i+j]) {
                break;
            }
            if(j === sort.length -1) {
                count ++;
            }
       }
    }
    return count;
}

console.log(naiveSearch("lorie loled", ""));