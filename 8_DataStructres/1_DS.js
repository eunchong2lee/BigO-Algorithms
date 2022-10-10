// ** 자료 구조 **
// 이진 검색 트리(Binary Search Trees)
// 큐 (Queues)
// 단방향 연결 리스트 (Singly Linked Lists)
// 비방향/비비중 그래프 (Undirected Unweighted Graphs)
// 이진 힙 (Binary Heaps)
// 방향 그래프 (Directed Graphs)
// 해쉬 테이블 (Hash Tables)
// 양방향 연결 리스트 ( Doubly Linked Lists)
// 스택 (Stacks)

// class basic
class Student {
    constructor(firstName, lastName,year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tradies = 0;
        this.scores =[];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tradies += 1;
        if(this.tradies >=3){
            return "you are expelled!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tradies} times`
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){
        let sum = this.scores.reduce((a,b)=>a+b);
        return sum/this.scores.length;
    }

    // static
    static EnrollStudents(){
        return "ENROLLING STUDENTS!"
    }
}

let firstStudent = new Student("Colt", "Steele", 18);
let secondStudent = new Student("Blue", "hawai", 19);

console.log(firstStudent.addScore(18));
console.log(firstStudent.addScore(20));
console.log(firstStudent.addScore(22));
console.log(firstStudent.calculateAverage());
console.log(Student.EnrollStudents());

class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}


const p1 = new Point(5,5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));