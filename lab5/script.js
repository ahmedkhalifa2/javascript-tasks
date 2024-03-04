

let ansInput = document.getElementById("Answer")



function EnterNumber(num){
    console.log(+num)
    ansInput.value += num
}

function EnterOperator(operator){
    console.log(operator)
    ansInput.value += operator
}

function EnterEqual(){
    console.log(ansInput.value)

    ansInput.value = eval(ansInput.value)
}

function EnterClear(){
    ansInput.value = ""
}


//////////////////////////  task 2 ////////////////////

let nam = document.getElementById("name")
let age = document.getElementById("age")
let email = document.getElementById("email")
let validation = document.getElementsByClassName("validation")
let checkName,checkAge,checkEmail,userName,userAge,userEmail
nam.addEventListener("keyup",function(){
    if((/^[a-z]{3,12}/i).test(nam.value)){
        checkName =true
        validation[0].innerHTML =""
        userName = nam.value
    }else{
        validation[0].innerHTML ="invalid Name"
    }
})

age.addEventListener("keyup",function(){
    // console
    if(+age.value >=15 && +age.value<=80){
        checkAge =true
        userAge = age.value
        validation[1].innerHTML =""
    }else{
        validation[1].innerHTML ="invalid Name"
    }
})

email.addEventListener("keyup",function(){
    
    if((/^[a-z]{3,8}(@)(gmail)\.com/i).test(email.value)){
        checkEmail =true
        validation[2].innerHTML =""
        userEmail = email.value
    }else{
        validation[2].innerHTML ="invalid Email"
    }
})

let btnAdd = document.getElementById("btnAdd")
let tablrest = document.getElementById("tablrest")
let newRow = document.createElement("tr")
let newTd = document.createElement("td")
let infForm = document.getElementById("infForm")
tablrest.appendChild(newRow)
btnAdd.addEventListener("click",function(evw){
    evw.preventDefault()
    if(checkEmail ==true && checkAge == true &&  checkName == true){
        tablrest.innerHTML+=`<tr><td>${userName}</td><td>${userAge}</td><td>${userEmail}</td></tr>`
    }
})

btnReset.addEventListener("click",function(evw){
    // evw.preventDefault()
    let intable = document.getElementById("intable")
    let spann = document.getElementsByClassName("validation")
    for(i=0;i<spann.length;i++){
        spann[i].innerHTML = ""
    }

    
    
    

})

