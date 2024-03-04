//////////////////////  task 1 /////////////////////////////

// let object={
//     name:"ahmed khalifa",
//     age:30,
//     address:"qena"
// }


// let handeler = {
//     get:function(target,prop){
//         if(prop in target){
//             return target[prop]
//         }else{
//             throw "property does not exist in the target"
//         }
//     },
//     set:function(target,prop,value){
//         if(prop == "name"){
//             if(value.length == 7){
//                 target[prop] = value
//             }
//         }else if(prop == "address"){
//             if(typeof value == "string"){
//                 target[prop] = value
//             }else{
//                 throw "the data type is not string"
//             }
//         }else if(prop == "age"){
//             if(value >25 && value<60){
//                 target[prop]=value
//             }else{
//                 throw "Age should be between 25 and 60 years old"
//             }
//         }
//     }
// }

// let myProx = new Proxy(object,handeler)




// /////////////////////////////// task 3 //////////////////////


// function *fibonacci(num){
//     let a=0,b=1
//         let sum=0
// while(a<=num){
//      yield a
//     sum=a+b
//     a=b
//     b=sum
// }
// }

// let ker = fibonacci(13)

// for(let i of ker){
//     console.log(i)
// }




/////////////////////////////////////  task 4 ////////////////////////////////////

      ///////////  el zero solution ////////////

// let student ={
//     name:"ali",
//     age:28,
//     [Symbol.iterator]:function(){

//         let step=0;
//         let prop = Object.keys(this)
//         return {
//             next:function(){
                
//                 return {value:[prop[step],student[prop[step]]],
//                             done:step++ === prop.length
//                   }
//         }
//     }
// } }


// for(let i of student){
//     console.log(i)
// }


////////////////////////////////// task 4 version 2 //////////////////////////////////////// 

let student ={
    name:"ali",
    age:28
}
function tesiterator(){
    let step =0;
    let prop = Object.keys(student)
    
    return{
        next:function(){
            return {value:[prop[step],student[prop[step]]],
                  done:step++ === prop.length
            }
            
        }
    }
}
student[Symbol.iterator] = tesiterator

for(let i of student){
    console.log(i)
}


