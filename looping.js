// const numbers = [1,2,3,4,5,6,7,8,9];

// for(let i = 0; i< numbers.length; i++){
//     // console.log(numbers[i])
// }

// for (let number of numbers){
//     console.log(number)
// }


const student =  {
    name: 'shaiful',
    age: 30,
    address: 'mirpur',
    students: true
}

const keys = Object.keys(student);
console.log(keys);


for (let key of keys){
    const value = student[key];
    console.log(key,value)
    
}
