function shaiful( num1 , num2){
    return num1 + num2;
}

const result = shaiful(20, 50);
console.log(result);


// =====================================

const shaiful2 = function (num3 , num4){
    const result = num3 + num4;
    return result;
}

const sum = shaiful2(30, 50);
console.log(sum);

// ==================================

const total = ( num5 , num6 )=> num5 + num6;

const total2 = total(30 , 70);
console.log(total2);
// ==================================

const total3 = (num4, num6) => num4 + num6;

const result5 = total3(56, 70);
console.log(result5);

// ==================================

const total6 = (num33 , num55) => num33 + num55;

const summ = total6(34, 67);
console.log(summ)


// ==================================

const totalNumber = (num20 , num21) => num20 + num21;

const totalResult = totalNumber(350 , 70);
console.log(totalResult);

// ==================================

const student = {name: "shaful", age: 30};

const getAge = (person) => person.name;
const age = getAge(student);
console.log(age);


// ==================================

const number = [2, 25, 35, 56, 80];

const getNumber = numOne => numOne[2];
const results = getNumber(number);
console.log(results);


// ==================================

const students = [23, 56, 89, 45];

const findId = num2 => num2[2];
const result2 = findId(students);
console.log(result2);

// ==================================

const studentIdg =  student => student[3];

const resultss =  studentIdg([2, 5, 89, 335, 65]);
console.log(resultss);


// ==================================


const getPI = num => num * 2;
console.log(getPI(5));
