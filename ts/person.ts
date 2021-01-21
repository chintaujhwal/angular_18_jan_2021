interface Person {
    name : string;
    age : number;
}

function  print(v : Person) {
    console.log(v.name)
    console.log(v.age)
}


var obj = { name : 'Scott',  age : 30}
var obj2 = { name : 'Scott',  email : 'abc@gmail.com'}

print(obj)
// print(obj2)
