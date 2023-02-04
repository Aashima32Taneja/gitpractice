//immidiatly break and come out of loop

// break statement with for 

console.log('//prog1')
for(let i=1;i<=5;i++){
    if(i==3){
        break
    }
    console.log(i)
}

console.log('//Prog2')
for(let i=1;i<=5;i++){
    console.log(i)
    if(i==3){
        break
    }
}

console.log('//Prog3')
for(let i=5;i>=1;i--){
    console.log(i)
    if(i==4){
        break
    }
}

console.log('//Prog4')
for(let i=5;i>=1;i--){
    if(i==2){
        break
    }
    console.log(i)
}

console.log('// continue with for')
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 //4 // 5 // 6
    if(i == 1){
        continue
    }
    console.log(i) //1 // 2 // 4 // 5
}