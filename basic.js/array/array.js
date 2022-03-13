// var peoples=["saran","jithu","shyam","jith"]

// console.log(peoples)

value=[]
var num=require('readline-sync')
limit=num.question('enter Limit')

for(i=0;i<limit;i++){
    value[i]=num.question('enter values')
}

console.log(value)