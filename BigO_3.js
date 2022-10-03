// BigO의 개념
// 빅오는 어떤 함수의 입력 값이 늘어나는 것과 함수의 실행시간이 늘어나는 것을 말한다.
// 입력의 크기와 실행시간의 관계를 말한다.

// ****************************************************************
// First Example
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
// N의 값에 따라서 연산 갯수가 다르게 나오기 때문에
// 빅오 표기법으로 O(n)
// 1n이나 6n이나 궁극적으로 그래프를 그렸을 때 다를게 없기 때문에
// 신경쓰지 않고 O(n)으로 표기한다.

// Second Example
function addUpTo2(n) {
    return n * (n+1)/2;
}
// 연산 갯수가 일정하기 때문에
// 빅오 표기법으로 O(1)로 표기한다.

// 3rd
function printAllParis(n){
    for (var i = 0; i<n; i++) {
        for(var j = 0; j<n; j++){
            console.log(i,j);
        }
    }
}
// 루프 안에 루프가 있기 때문에
// 빅오 표기법으로 O(n*n)로 표기한다.
// n이 커질 수록 실행시간이 제곱으로 늘어나기 때문에 시간이 상당하게 많이 소요될 것이다.
