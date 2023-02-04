// while 

/* 
intialization  (outside)
while(condition){
    // statments 
    // increment / decrement
}
*/

console.log("print 1 to 5")
let i =1
while(i<=5){
    console.log(i)
    i++
}

console.log("print in reverse order")
let j=5
while(j>=1){
    console.log(j)
    j--
}

console.log("print table of 2")
let k=2
while(k<=20){
    console.log(k)
    k=k+2
}

console.log("print table of 5 in reverse order")
let q=50
while(q>=5){
    console.log(q)
    q=q-5
}

console.log("break statement with while")

let z=1
while(z<=4){
    if(z == 2){
        break
    }
    console.log(z)
    z++
}

console.log("break statement with continue")

let y =2
while(y<=7)
{
    if(y==4){
        continue
    }
    console.log(y)
    y++
}