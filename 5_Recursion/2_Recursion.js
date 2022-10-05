// ** Helper Recursion Methods **
// 도와주는 재귀 함수
// 영향이 끼치지 않는 재귀 함수가 필요할 때 함수 내에 재귀 함수를 작성한다.

// Example Helper Recursion Methods

function collectOddValues(arr) {
    let result = [];

    function helper(helperInput){
        if (helperInput.length === 0)return;
        if(helperInput[0]%2!==0) result.push(helperInput[0]);
        helperInput(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

// Example Recursion

function collectOddValues2(arr) {
    let newArr = [];
    if(arr.length ===0) {
        return newArr;
    }

    if(arr[0]%2!==0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr;
}