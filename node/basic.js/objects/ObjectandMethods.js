var person = {
    name: "saranjith", age: 19,place:"kannur",
    //add function and value in object
    display: function () {
        //add this for object of value
        console.log(this.name)
    }
}

//add value of object
person.dob="09-06-2002"
// console.log(person)

// add function of object
person.Pritplace=function(){
    console.log(this.place)
}

// call function
// console.log(person.display())

console.log(person.Pritplace())



