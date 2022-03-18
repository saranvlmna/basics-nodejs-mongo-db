
var num=10
var num=20

// result is 20


let num=10
let num=20
 
//result is error

///////////////////////////////////////////////////////////////////////////////

function hello() {
    var i=0
  if(i==0){
      var hey=10
      let hoy=20
  }
  console.log(hey)
  console.log(hoy)
  //onlly print var variable
  //let variable scope only a block to block
}

hello()