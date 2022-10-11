// ** 해시 테이블 HASH TABLES **
// 해시 테이블은 key -value 값을 저장하는데 사용한다.
// 해시 테이블이 좋은 이유는 값을 찾거나, 새로운 값을 추가하거나, 값을 제거하는데 아주 빠르다.

// First Eaxmple

function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

console.log("hash1",hash("purple", 10));

function hash2(key, arrayLen) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        let char = key[i];
        let value = char.charCodeAt(0) -96;
        total = (total + value) % arrayLen;
    }
    return total;
}
console.log("hash2",hash2("purple", 10));

function hash3(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length,100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) -96;
        total = (total + WEIRD_PRIME+ value) % arrayLen;
    }
    return total;
}

console.log("hash3",hash3("purple", 10));

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
    
        for (let i = 0; i < Math.min(key.length,100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) -96;
            total = (total + WEIRD_PRIME+ value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }     
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i<this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    values(){
        let valuesArr = [];
        for(let i =0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j =0; j<this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }   
            }
        }
        return valuesArr;
    }
    keys(){
        let keysArr = [];
        for(let i =0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j =0; j<this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }   
            }
        }
        return keysArr;
    }
}

let hashtable = new HashTable();
console.log(hashtable.set("purple","goodbye!"));
console.log(hashtable.get("purple"));
console.log(hashtable.values());
console.log(hashtable.keys());

// bigO
// insert O(1)
// Deletion O(1)
// Access O(1)

