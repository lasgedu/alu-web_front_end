function studentshogwarts () {
    let privatescore = 0;
    let name = null;

    function changescoreby(points) {
        privatescore += points;
    }

    return {
        setname(newname) {
            name = newname;
        },

        rewardstudent() {
            changescoreby(1)
        },

        penalizestudent() {
            changescoreby(-1)
        },

        getscore() {
            return `${name}: ${privatescore}`
        }
    }
}

let harry = studentshogwarts();

harry.setname('Harry');
harry.rewardstudent();
harry.rewardstudent();
harry.rewardstudent();
harry.rewardstudent();
console.log(harry.getscore());

let draco = studentshogwarts();

draco.setname('Draco');
draco.rewardstudent();
draco.penalizestudent();
draco.penalizestudent();
draco.penalizestudent();
console.log(draco.getscore());