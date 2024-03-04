
let search = document.querySelector(".search")

let ulsuggestions = document.getElementsByClassName("suggestions")[0]


let xhr = new XMLHttpRequest()

xhr.open("get","https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")

xhr.send()

let data
xhr.addEventListener("load",function(){
    if(xhr.status == 200){
         data =JSON.parse(xhr.response)
    }
})

search.addEventListener("input",function(){
   
    ulsuggestions.innerHTML=""
       
    for(let info of data){
       if(info.city.toLowerCase().includes(search.value.toLowerCase()) || info.state.toLowerCase().includes(search.value.toLowerCase())) {
       
        ulsuggestions.innerHTML+=`<li>${info.city}  ,  ${info.state} <br> population is: ${info.population}, Grouth:${info.growth_from_2000_to_2013}</li>`
       }
       if(search.value ==""){
        ulsuggestions.innerHTML = "<li>Filter for a city</li> <li>or a state</li>"
       }
    }
   
})