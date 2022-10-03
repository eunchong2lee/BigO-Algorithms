// ** 빅오 표기법의 필요성 **
// 여러가지 코드를 서로 비교해서 좋은 코드를 찾는 시스템.
// 항상 장단점이 있어서 최고의 코드라는 것은 없다.
// 빅오를 공부하면 비효율적인 코드를 구별할 수 있다.
// 이것을 공부하는게 무조건적인 정답은 아니지만 배우면 효율적인 코드를 추구할 수 있다.

// ** 좋은 코드란? **
// 사람마다 다르지만 대표적으로 이런게 있다.
// 얼마나 빠른지
// 얼마나 메모리를 사용하는지?
// 코드를 얼마나 쉽게 읽을 수 있는지?

// **************************
// Example
// 1에서 부터 N까지의 합을 구하는 식

// frist Example
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

let t1 = performance.now();
console.log(addUpTo(1000000000));
let t2 = performance.now();
console.log(`처리 시간 : ${(t2 -t1)/1000}초`)

// Second Example
function addUpTo2(n) {
    return n * (n+1)/2;
}

let t3 = performance.now();
console.log(addUpTo2(1000000000));
let t4 = performance.now();
console.log(`처리 시간 : ${(t4 -t3)/1000}초`)

// 2가지 코드 둘다 같은 답을 나오는 것을 확인함
// 컴퓨터 처리 속도마다 다르겠지만
// 첫번쨰 코드는 1초 가량 걸리고 두번째 코드는 0.00004~5초가 걸리는 것을 확인 할 수 있다.
// 두번째 코드가 더 효율적인 것을 확인 할 수 있다.
// 코드를 비교할 때 코드 실행시간이 계속 변하기 때문에 시간을 비교하는 것에는 문제가 있다.
