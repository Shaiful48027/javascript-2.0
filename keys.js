const student =  {
    name: 'shaiful',
    age: 30,
    address: 'mirpur',
    students: true
}

// console.log(student);



const keys = Object.keys(student);
// console.log(keys);


const value = Object.values(student);
// console.log(value);

const pair = Object.entries(student);
// console.log(pair);


const {students, ...others} = student;
console.log(others);


student.source = 'bangladesh';
console.log(student);


