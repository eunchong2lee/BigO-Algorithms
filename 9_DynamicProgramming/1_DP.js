// ** 동적 프로그래밍 Dynamic Programming **
// 동적 프로그래밍은 복잡한 문제를 더 간단한 하위 문제의 모음으로 쪼개서 각 하위 문제들을 풀어서
// 그 답을 저장하는 방식으로 문제를 푸는 거다.
// 간단하게 말하면 문제를 푸는데 사용할 수 있는 접근법 중 하나라는 말이다.

// 우리가 문제를 가지고 더 작은 조각으로 나눈 다음에 작은 조각들의 반복으로 환원하여
// 그것을 기억하거나 어떤 방식으로든 저장을 해서 문제를 푸는 접근법이다.

// 언제 사용할 수 있는가?
// 최적 부분 구조가 존재하는지 여부와 반복되는 하위 문제가 있는지 여부이다.

// 1. 반복되는 하위 문제
// - 한 문제를 더 작은 문제들로 나눌 수 있고, 그 조각들 중 일부가 재활용 가능하다는 말이다.
// 2. 최적 부분 구조의 존재
// - 하위 문제의 최적 해답을 통해서 더 큰 범주의 문제의 최적 해답을 구성할 수 있는 경우

// 피보노치의 수
// 기본 솔류션
function fib(n) {
    if(n <= 2) return 1;
    return fib(n - 1) +fib(n - 2);
}
console.log(fib(2));
console.log(fib(3));
// console.log(fib(100));

// bigO
// Worst O(2^n) // n^2 보다 안좋다. 대략 1.6^2 이다 정확히는

// 하향식
// Memoization 메모이제이션
// 보통 배열이나 객체인 데이터를 저장할 구조를 만든 다음에
// 시간이 오래 걸리는 함수를 실행하여 테이블이나 배열에 저장한다.
// 그리고 다시 오래 걸리는 함수를 실행할 때 테이블이나 배열에 저장되어 있는지 확인한다.

// 메모이제이션 솔루션
function fib2(n, memo=[undefined,1,1]){
    if(memo[n] !== undefined) return memo[n];
    let res = fib2(n-1, memo) + fib2(n-2, memo);
    memo[n] =res;
    return res;
}
console.log(fib2(100))

// bigO
// Best O(N)

// 다른 방식의 풀이
// 상향식
function fib3(n){
    if(n <= 2) return 1;
    let fibNums = [0,1,1];
    for( let i =3;i<=n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

console.log(fib3(100));