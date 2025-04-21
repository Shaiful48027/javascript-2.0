// function declaration

function add (num1, num2){
    return num1 + num2;
}

const sum = add(7, 15);
console.log(sum);




// function expression

const add2 = function(num1, num2){
    return num1 * num2;
}

const sum2 = add2(10, 5);
console.log(sum2);



// Arrow Function

const add3 = (num1, num2) => num1 + num2;
const total = add3(10, 15);
console.log(total);



// arrow function with Object

const student = { name:"shaiful", age:30};
const getAge = (person) => person.age;
const age = getAge(student);
console.log(age);


// arrow function with arrray

const numbers = [12,58,96,5];
const getNumber = numb => numb[1];
const result = getNumber(numbers);
console.log(result);

const getNumber2 = numb => numb[1];
const result2 = getNumber([25,68,94]);
console.log(result2);
