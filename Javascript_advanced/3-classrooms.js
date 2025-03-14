function createClassRoom(numberOfStudents) {
    function studenSeat(seat) {
        return function() {
            return seat;
        };
    }

    let students = [];
    for(let i = 0; i < numberOfStudents; i++) {
       let num = studenSeat(i + 1)
        students.push(num);
    }

    return students;
}

let classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
