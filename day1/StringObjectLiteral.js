
// Sting literal will be allocating the Stack memory 
// Object literal will be allocating the heap memory 

// Conclsion  : Strict === compare will check if the value , memory , Datatype is same


let comapnyName="Shiva"

let comapnyName2="Shiva"

let companyName3=new String("Shiva")

console.log(comapnyName===comapnyName2);

console.log(comapnyName2===companyName3);

console.log(comapnyName2==companyName3);