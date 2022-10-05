// ** 문제를 해결하고 단순화 (Solve/Simplify) **
// 문제를 해결할 수 있으면 하고 해결할 수 없으면 단순화 시켜라

// 단순화
// 수행하려는 작업에서 혼란에 빠뜨리는 어려운 부분을 찾고 잠깐 동안 무시해라
// 그리고 그 과정 중 보통 이 부분이 어떻게 작동하는지 이해하게 된다.
// 이해하게 된다면 어려운 부분에 다시 돌아가라

// Example
// 문자열을 취하고 문자열의 각 문자 수를 반환하는 함수를 만드는 상황

console.log(charCount('aaaa'));
console.log(charCount('heLlo'));
console.log(charCount('my phone number is 1823123'));

function charCount(str) {
    // 반환할 오브젝트를 만든다
    var result = {};
    // 문자열에 루프를 적용하고 string을 세부적인 부분으로 나눈다.
    for(var i  =0; i < str.length; i++) {
        // 만약에 반환할 object에 key가 있으면 1을 더하고
        // 없으면 새로 key를 추가해주고 1로 세팅해준다.
        // 문자가 공백, 마침표에 영향을 미치도 않도록 한다.
        // 대소문자 구분이 없도록한다.
        var char = str[i].toLowerCase();
        if(result[char]>0){
            result[char]++;
        } else {
            result[char]=1;
        }
    }
    // 오브젝트를 반환하고 끝낸다.
    return result;


}