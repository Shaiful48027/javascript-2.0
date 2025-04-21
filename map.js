const numbers = [2,5,46,98];

const doubled = [];
for (const num of numbers){
    const double = num *2;
    doubled.push(double);
}

console.log(doubled);


const result2 = numbers.map( doubled2 => doubled2 * 2);

function shaiful(num, num2){
    const result = num * num2;
    return result;
}

const outfut = shaiful(5, 7);
console.log(outfut);


const shaiful2 = num => num * 5;

const result3 = shaiful2(10);
console.log(result3);
