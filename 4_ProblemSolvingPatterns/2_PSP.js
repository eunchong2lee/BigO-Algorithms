// ** Frequency Counter 빈도수 세기 **
// ANAGRAMS

//Example
// 두 개의 문자열을 취해서 두 문자열이 서로의 아나그램이면 참

// console.log(validAnagram('','')); //true
console.log(validAnagram('aaz','zza')) //false
// console.log(validAnagram('anagram', 'nagaram')) //true
// console.log(validAnagram("rat", "car")) //false
// console.log(validAnagram('awesome','awesom')) //false
// console.log(validAnagram('qwerty', 'qeywrt')) //true
// console.log(validAnagram('texttwisttime', 'timetwisttext')) // true

function validAnagram(first, second) {
    if(first.length !== second.length){
        return false;
    }

    const lookup= {};
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] =1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }
    return true;
}