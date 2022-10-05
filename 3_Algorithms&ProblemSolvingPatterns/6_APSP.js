// ** 문제를 복습하고 재구성 (Look Back and Refactor) **
// 시간을 내어 코드를 살펴보고, 되돌아보고, 복습하는게 제일 중요하다.
// 가독성을 높여서 이해력을 높여라

// 리펙토링 질문
// 결과를 확인 할 수 있는가?
// 결과를 다른 방식으로 도출 할 수 있는가? (코딩은 문제에 대한 해결책이 하나만 있는 경우가 드물기 때문이다.)
// 해결한 이 방법 외에 생각나는 다른 접근 방식이 있나?
// 앞서 생각하지 못한 다른 방법을 적용할 수 있나?
// 한눈에 보고 이해할 수 있는가? (얼마나 직관적인가?)
// 코드 내용을 종이나 화이트보드에서 보더라도 이해할 수 있는가?
// 결과나 방법을 다른 문제에도 적용할 수 있는가? (문제를 해결함으로써 얻을 수 있는 큰 이점 중 하나는 직감을 발달시켜 다른 문제를 해결할 수 있는 직관력을 길러준다는 것이다.)
// 해결책의 성능을 향상시킬 수 있는가? (주로 시간 복잡도와 공간 복잡도를 사용)

// Example
// 문자열을 취하고 문자열의 각 문자 수를 반환하는 함수를 만드는 상황

console.log(charCount('aaaa'));
console.log(charCount('heLlo'));
console.log(charCount('my phone number is 1823123'));

// function charCount(str) {
//     var result = {};
//     for(var i  =0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if(/[a-z0-9]/.test(char)){
//             if(result[char]>0){
//                 result[char]++;
//             } else {
//                 result[char]=1;
//             }
//         }
//     }
//     return result;
// }

function charCount(str) {
    let result = {};
    for(let char of str){
        if(isAlphaNumberic(char)){
            char = char.toLowerCase();
            result[char] = ++result[char]||1;
        }
    }
    return result;
}

// 정규표현식 말고 charCodeAt을 사용 가능
// test상에서 charCodeAt이 정규표현식 보다 빠르다.

function isAlphaNumberic(char) {
    var code = char.charCodeAt(0);
    if( !(code>47&&code<58)&& // 숫자(0~9)
        !(code>64&&code<91)&& // 대문자(A-Z)
        !(code>96&&code<123)) { // 소문자(a-z)
        return false;
    }
    return true;
}