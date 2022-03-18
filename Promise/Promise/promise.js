
const { resolve, reject } = require('promise')
const Promise = require('promise')

function add(num1, num2) {
    //resolve = success
    //reject =err
    return new Promise((resolve, reject) => {
        if (num1 == 0) {
            reject("First Number is zero")
        }
        resolve(num1 + num2)
    })
}

function multiply(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 == 0) {
            reject("First Number Is zero")
        }
        resolve(num1 * num2)
    })
}

function div(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 == 0) {
            reject("First Number Is zero")
        }
        resolve(num1 / num2)
    })
}

add(10, 20).then((sum) => {
    console.log(sum)
    return multiply(sum, sum)
    //return value pass next then
}).then((product) => {
    console.log(product)
    return div(product, product)
}).then((div) => {
    console.log(div)
})
    .catch((err) => {
        console.log(err)
    })
//chaining


