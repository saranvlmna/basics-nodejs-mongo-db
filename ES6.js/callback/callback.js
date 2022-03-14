var hello=function (data){
    console.log("Data"+data)
}

var hey=function(callback){
    callback("hello")
}
// call a function in function
hey(hello)