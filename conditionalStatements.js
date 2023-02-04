// conditional statements 
// 1 input ---------- multiple outcomes

// if(condition){
//     // statement
// }

let marks=76
if(marks>90){
    console.log('Grade A')
}
if(marks>75){
    console.log('Grade B')
}
if(marks>60){
    console.log('Grade C')
}
if(marks>30){
    console.log('Grade D')
}

//else if block
console.log("Else if block")
if(marks>90){
    console.log('Grade A')
}
else if(marks<90 && marks>=75){
    console.log('Grade B')
}
else if(marks<75 && marks>=60){
    console.log('Grade C')
}
else if(marks>30){
    console.log('Fail')
}

//else block
console.log('Else block')
let a =10
let b=50
if(a>b){
    console.log('a is greater')
}
else{
    console.log('b is greater')
}

//Ternery Operator
//condition ? console.log('if true'):console.log('for false')
//a == b ?console.log('both are equal'):console.log('not equal')

console.log('Ternery operator')
a>b?console.log('a is greater'):console.log('b is greater')

let age = 17
let r1 = age >= 18? "can drive":"cannot drive"
console.log(r1)

//Switch Statement
console.log("//Prog1 Switch without break")
let city ='indore'
switch(city){
    case 'bangolore':
        console.log("KR")
    case 'rajpura':
        console.log('PB')
    case 'indore':
        console.log('MP')
    case 'pune':
        console.log('MH')
    default:
        console.log('Incorrect City')
}

console.log("//Prog2 Switch with break")
let city2 ='indore'
switch(city2){
    case 'bangolore':
        console.log("KR")
        break
    case 'rajpura':
        console.log('PB')
        break
    case 'indore':
        console.log('MP')
        break
    case 'pune':
        console.log('MH')
        break
    default:
        console.log('Incorrect City')
}

console.log("//Prog3 Switch")
let city3 ='sirhind'
switch(city3){
    case 'bangolore':
    case 'OTY':
        console.log("KR")
        break
    case 'rajpura':
    case 'sirhind':
        console.log('PB')
        break
    case 'indore':
    case 'bhopal':
        console.log('MP')
        break
    case 'pune':
    case 'nagpur':
        console.log('MH')
        break
    default:
        console.log('Incorrect City')
}