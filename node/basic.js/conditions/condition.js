//call a library get input text
var read = require('readline-sync')

//get values
var num1 = read.question('Enter Two Number')
var num2 = read.question('')

//condition
if (num1 > num2) {

    console.log(num1 + "is Biggest")
}
else if (num1 === num2) {
    console.log("same")
} else {

    console.log(num2 + "is Biggest")
}


// = assign
// == condent same or not
// === condent object same or not