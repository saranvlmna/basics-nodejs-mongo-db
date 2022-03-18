function add(num1, num2, callback) {
    let Error = false
    if (num1 == 0) {
        Error = true
    }
    callback(num1 + num2, Error)
}

function multiple(number1, number2, callback) {
    callback(number1 * number2)
}

function div(n1, n2, callback) {
    callback(n1 / n2)
}

add(10, 20, (sum, Error) => {
    
    if (Error) {
        console.log("frist number is zero")
    }
    else {
        console.log(sum)
        multiple(sum, sum, (product) => {
            console.log(product)
            div(product, product, (result) => {
                console.log(result)
            })
        })
    }
})