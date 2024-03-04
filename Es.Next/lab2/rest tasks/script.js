
//////////////////  task 2  set  //////////////////

// let mySet = new Set()

// mySet.add("ahmed")
// mySet.add("ali kaka")
// mySet.add("khaled ali")
// mySet.add("mohamed")
// mySet.add("khalifa")


// let myArray = [...mySet]

// for(let student of myArray){
//     console.log(student)
// }

//////////////////////// task 3   Map  /////////////////////////


let myMap = new Map()

myMap.set("ahmed mohamed",{grades:[{Coursename:"javascript",grade:"Excellent"},
{Coursename:"Jquery",grade:"Good"},{Coursename:"CSS",grade:"V.Good"}]})

myMap.set("khalifa",{grades:[{Coursename:"nodeJs",grade:"good"},
{Coursename:"Jquery",grade:"Weak"},{Coursename:"CSS",grade:"V.Good"}]})

myMap.set("ali khaled",{grades:[{Coursename:"html",grade:"Excellent"},
{Coursename:"Jquery",grade:"Weak"},{Coursename:"CSS",grade:"Good"}]})



for(let [name,grad] of myMap){

    grad.grades.forEach(course => {
        console.log(`Name : ${name},  The Dgeree of Course "${course.Coursename}" Is Equall: "${course.grade}"`);
    });
    
}