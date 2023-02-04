console.log("hello");

//https://nodejs.org/en/download/
//download and install
//https://code.visualstudio.com/docs/?dv=win
//download and install
//create a folder with name javscript
//Open the folder with visual studio code and write code
//open terminal and execute js file

let x= 10
console.log(x)
x=20
console.log(x)

const y= 40
console.log(y)
//y=40
//console.log(y)

// Arithmetic operator

// Addition       +
// Subtraction    -
// Multiplication *
// Division       /
// Modulus        %

let a = 10
let b = 5

console.log(a+b) // 15
console.log(a-b) // 5
console.log(a*b) // 50
console.log(a/b) // 2
console.log(a%b) // 0

// 10 pair - 50 lines DRY

function Calculator(x,y)
{
    console.log(x+y);
    console.log(x-y);
    console.log(x*y);
    console.log(x/y);
    console.log(x%y);
}

Calculator(7,9)