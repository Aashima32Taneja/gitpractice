//In javascript everthing is object and in object there are properties and methods
// type 

// Human 
// Property --  age , weight , height ,color , gender
// Method -- walk() , talk() 

// Vehicle 
// Property - color , modelNo , regNo ,type
// Method start() stop()

// Bank 
// Property - accNo , accName, accType , bal 
// Method - deposit() , withdrawl()


// Object --- property and method
// Method --- Gym
// action - excercise
// return health

// More than store  ----- Array
// Array is object 
// Properties and Values
// Array stores the value by index
// Index starts from 0
// Length - 1 is always last index

console.log("//Prog1")
let names = ['John','Abrahm','Jony',"William"]
console.log(names[0])
console.log(names[2])
console.log(names.length)

console.log("//Prog2 -- with for loop print(Print index)")
let numbers =[11,22,33,44,55,66,77,88,99,00]
for(i=0;i<numbers.length;i++){
    console.log(i) //Print the index
    //console.log(numbers[i]) ///Print the values
}

console.log("//Prog2 -- with for loop print(Print values)")
let colors = ["Red","Blue","Orange","Black","White","Grey","Green"]
for(i=0;i<colors.length;i++){
    console.log(colors[i])
}

// Array -- type 
// when we define array we create object 
// Array have properties and method
// mwthods have action and return type

// Gym()
// action - excercise
// return - health 

// Sleep()
// action - go to bed
// return - rest


//Array Properties
console.log("Array Properties -- 1.Length")
let color =['red','blue','golden','black','white']
let m1 = color.length;
console.log(m1);

//Array Methods
console.log('Array methods -- 1.Push()')
// action -- add to the element at the end
// return - new length of array
let vegetables = ['beans','potato','cauliflower','brinjal']
let m2 = vegetables.push('carrot');
console.log(m2)
console.log(vegetables)

console.log('Array methods -- 2.unshift()')
// action -- add the element at first 
// return - new length of array
let m3 =vegetables.unshift('onion')
console.log(m3)
console.log(vegetables)

console.log('Array methods -- 3.pop()')
// action - removes the last element 
// return - returns the same lement 
let cars = ['swift','maruti','kiya','creta']
let m4 = cars.pop()
console.log(m4)
console.log(cars)

console.log('Array methods -- 4.shift()')
// action - removes the first element 
// return - firstElement
let m5 = cars.shift()
console.log(m5)
console.log(cars)

console.log('Array methods -- 5.includes()')
//check whether particular element present or not and return boolean value
let countries = ['india','australia','canada','newzeland','usa']
console.log(countries.includes('canada'));
console.log(countries.includes('Canada'));

console.log('Array methods -- 6.join()')
//to join all element and return string
let flowers = ['lily','marigold','lotus']
console.log(flowers.join('@'))
console.log(flowers.join('-'))
console.log(flowers.join('&'))
console.log(flowers.join('#'))


console.log('Array methods -- 7.indexOf()')
//find out the index of the value if not found then return -1
let firstname = ['John','Jony','william','masaba']
let m6 = firstname.indexOf('william')
let m7 = firstname.indexOf('William')
console.log(m6)
console.log(m7)

// program 1
console.log('program1--Push')
let birthYears = [1979, 1986, 1994, 2001]
let ages = []  //[34,33,32,31]
for (let i = 0; i < birthYears.length; i++) {
    // console.log(i)
    // console.log(birthYears[i])
    //console.log(2023 - birthYears[i])
    let temp = 2023 - birthYears[i]
    ages.push(temp)
}
console.log(ages)
// program 2
console.log('program2--Push')
let count = [33,44,55,66,22,33,55]
let above60 = [] // [44]
//[44,55,66,55]
for(let i = 0 ; i < count.length ; i++){
   // console.log(i)
   //console.log(numbers[i])
   if(count[i] > 60){
        above60.push(count[i])
   }
}
console.log(above60)



