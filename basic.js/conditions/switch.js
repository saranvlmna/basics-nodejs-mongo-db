var inp = require('readline-sync')
var num1 = inp.question('Enter Two Numbers')
var num2 = inp.question('')

// console.log(num1)
// console.log(num2)

switch (true) {
    case (num1 > num2):
        console.log(`Bigger number is ${num1}`)
        break;
    case (num1 < num2):
        console.log(`Bigger number is ${num2}`)
    case (num1 === num2):
        console.log(`${num1}is equal to${num2}`)
    default: console.log(false, '-> Something went wrong')
}

