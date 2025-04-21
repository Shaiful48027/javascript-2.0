const actor = {
    name: "jolil",
    age : 45,
    movi: "what is love"
}

const {age} = actor;
console.log(age);


const {age: boyos} = actor;
console.log(boyos);




function doubleCount (numb1, numb2){
    return [numb1*2, numb2*2];
}

// const [num1, num2] = doubleCount(12, 18);
// console.log(num1, num2);

const result = doubleCount()
