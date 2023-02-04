// logical operators

// AND && 

// true   &&   true   ======> true
// false  &&   true   ======> false
// true   &&   false  ======> false
// false  &&   false  ======> false 

console.log(7 !== '7' && 8 !== 9)
console.log(7 === '7' && 8 !== 9)
console.log(7 === 7 && 8 === 9)
console.log(7 === '7' && 8 === 9)


// OR  ||
// true   ||   true   ======> true
// false  ||   true   ======> true
// true   ||   false  ======> true
// false  ||   false  ======> false 

console.log("OR OPERATOR")
console.log(7 == 7 || 8 == 8)
console.log(7 != 7 || 8 == 8)
console.log(7 == 7 || 8 != 8)
console.log(7 != 7 || 8 != 8)


// Not  ! (Negation Operator)

//True   --- False 
// False --- True

console.log("Not Operator")
console.log(!(9 === 9))
console.log(!(9 !== 9))