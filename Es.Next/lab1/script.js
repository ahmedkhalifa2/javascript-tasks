let x = 10;
let y = 20;


[x,y] = [y,x]

console.log(y)
console.log(x)

////////////////////////////// task 2 ///////////////////////////////////


function maxMin(...arg){
    console.log(`  Max value is ${Math.max(...arg)}
    Min value is ${Math.min(...arg)}`)
}

maxMin(4,897,52)


//////////////////////////////////////////////////////////////////////////////



/////////////////////////////// task 3 ///////////////////////////

var fruits = ["apple", "strawberry", "banana", "orange","mango"]


let checkString = fruits.every(function(element){
       return typeof element == "string"
})

console.log(checkString)


let checkStartA = fruits.some(function(element){
    return element.startsWith("a")
}) 

console.log(checkStartA)


let filtredArray = fruits.filter(function(element){
    return element.startsWith("a") || element.startsWith("s")
})

console.log(filtredArray) 



let likeFruits = fruits.map(function(element){
    return `I like ${element}`
})

console.log(likeFruits)

likeFruits.forEach(function(element){
    console.log(element)
})