num = require('readline-sync')
limit = num.question('Enter A Number')
print = ""
// for (i = 1; i <= limit; i++) {
//     for (j = 0; j < i; j++) {
//         print += "*"
//     }
//     print += "\n"
// }

// console.log(print)

for (i = 1; i < limit; i++) {
    for (j = i; j < limit; j++) {
        print += "*"
    }
    print += "\n"

}
console.log(print)