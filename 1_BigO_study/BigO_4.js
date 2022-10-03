// 빅오 표기법의 간소화
// 2n, n+10, 4n, 10n 등등 모두 O(n)으로 표기
// O(10), O(1000000) 등등 모두 O(1)으로 표기
// n*n +5n +8, 12n*n 등등 모두 O(n*n)으로 표기
// 다 간소화해서 표기한다.
// 섬세하게 다 따질 수 있지만 크게크게 표기한다.

// 쉽게 적용할 수 있는 규칙이 있다.
// 1. 산수는 상수라는 것이다. 덧셈, 뺄셈, 곱셈, 나눗셈 모두다 상수 시간이다.
// 2. 인덱스를 사용해서 배열 요소에 접근한다.
// * 배열에서 첫번째 아이템을 찾던지, 10번째 아이템을 찾던지 인덱스를 사용하면 똑같은 시간이 걸린다.
// 3. 루프로 처리할 때 n으로 처리 (중첩되면 n의 제곱 등등 늘어난다.)


// ****************************************************************
// First Example
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
logAtLeast5(10);
// 여기서 빅오 표기법은 어떻게 될까
// 처음에는 5까지 출력되지만
// 5이상부터는 계속 n의 값까지 출력되지만
// 표기법은 O(n)으로 표기한다.


// Second Example
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
logAtMost5(3);
// 여기서 빅오 표기법은
// 5까지는 n으로 출력되지만
// n이 5이상일 경우에는 계속 5까지만 출력되기 때문에
// 표기법은 O(1)으로 표기한다.