function longTask(milliseecond){
    dt=new Date();
    while((new Date())<=milliseecond){

    }
}

function showEnd(){
    console.log("End");
}

console.log("Start");
setTimeout(showEnd,2000);

console.log("Start");
longTask(showEnd,2000);


console.log("Start");
longTask(showEnd,2000);