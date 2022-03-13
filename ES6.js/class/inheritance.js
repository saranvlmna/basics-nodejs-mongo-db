//create a classs
class sample{
    sampleHello(){
        console.log("hello")
    }
}

//inheritance for another class

class hello extends sample{
    constructor(num1,num2){
        super()
        //call super for subclas to base class call
        this.num1=num1
        this.num2=num2
    }
}

//create object of parant class

hey=new hello(10,20)
//call child class function 
hey.sampleHello()

