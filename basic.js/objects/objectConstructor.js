// create base model
function person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name:"+this.name+"Age:"+this.age)
    }
}

// create object of person constrcutor object

var saran=new person("Saranjith",20,"Kannur")
var jithu=new person("jithu",19,"malappuram")


saran.display()
jithu.display()