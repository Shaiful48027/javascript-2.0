function add (num1, num2 = 15){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;   
}

const sum = add(7);



function fullname(first, last = "Robi"){
    const full = first + " " + last;
    console.log(full);
    
}

const name = fullname("shaiful");