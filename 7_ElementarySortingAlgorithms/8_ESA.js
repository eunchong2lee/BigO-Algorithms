// ** 기수 정렬 Radix Sort **
// 숫자 크기에 대한 정보를 자릿수로 인코딩한다는 사실을 이용한다.
// 첫 번째 자리 수를 비교하고 두 번째 자리수를 비교해서 계속 비교해서 정렬한다.

// helper function
// 첫 번째로 할 일은 자릿수 알아내야한다.
// 수와 위치를 가져온 다음 그 위치의 숫자를 반환한다.
function getDigit(num, i) {
    return Math.floor(Math.abs(num)/ Math.pow(10, i))%10;
}

// 자릿 수 세기
function digitCount(num) {
    if( num === 0 ) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1;
}

// 가장 큰 자릿 수 구하기
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for( let i =0; i < maxDigitCount; i++){
        let digitBuckets = Array.from({length : 10}, () => [])
        for(let j =0; j< nums.length; j ++) {
            let digit = getDigit(nums[j],i);
            digitBuckets[digit].push(nums[j]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([23,567,89,1223,4324,90]))

// bigO
// best O(ni) // i 는 자릿수 길이 n 배열읙 ㅣㄹ이
// average O(ni)
// Worst O(ni)
// space O(n + i)