// variables 
// let and const


let balance = 0
console.log(balance)
balance = 1000
console.log(balance)


const pi = 3.14
console.log(pi)
//pi = 89

// Arithmetic operation

let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(22 % 5)

let k = 90
let l = 45

console.log(k+l)
console.log(k-l)
console.log(k*l)
console.log(k/l)
console.log(k%l)

// 10  pair -- 50 lines (DRY)


// functions 

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(10,5)
Calculator(9,3)


 // program 1
// function without parameter and without return type 

function Sum(){
    console.log(2+3)
}
Sum();  //calling the function
Sum();

//  program 2
//  function with parameter and without return type

function Sum1(x,y){
    console.log(x+y)
}
Sum1(10,5)
Sum1(120,60)

// program 3
// function with parameter and return type 
// 100 Given   --->  100 + 100 , 100 - 50 , 100 * 0.10(Given value through return type)
// 100 Show    ---> print(100) -->function with parameter and without return type(Only show)

function sum3(x,y){
    return x + y
}
let w = sum3(1,3)
console.log(w)
console.log(w + w)
console.log(w - 2)
console.log(w * 0.10)


