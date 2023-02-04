// Truthy  -- 1,-34,"a"," ",5==5, 'A', '&' ,{},[]
// Falsy  -- 0 , null , NaN , undefined ,8 !== 8 , false

//Truthy
if({}){
    console.log('hello')
}
else{
    console.log('bye')
}

//Falsy

if(0){  
    console.log('hello')
}
else{
    console.log('bye')
}