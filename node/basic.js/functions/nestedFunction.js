var num=10
function first(){
   num=20

    function second(){
        num=50
    }
    second()
}

first()

console.log(num)
