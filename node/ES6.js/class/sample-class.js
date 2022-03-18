//create class
class Hello {
    //create constructor pass params
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }


    //create function and operation
    hi() {
        console.log("hello Friends" + (this.num1 + this.num2))
    }
}
       
// create object of HEllO
let hey = new Hello(10, 20)

// call function object.function
hey.hi()