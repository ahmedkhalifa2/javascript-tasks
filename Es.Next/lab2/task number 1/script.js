let container = document.getElementsByClassName("row")[0]
let ulist = document.getElementById("list")

window.addEventListener("load",function(){
    fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
     return response.json()
    }).then(function(data){
      for(let user of data){
        if(user.id ==1){
            container.innerHTML +=`<button type="button" value="${user.id}" class="btn col-2 btn-info me-2 mb-2 active">${user.username}
        </button>
        `
        }
        container.innerHTML +=`<button type="button" value="${user.id}" class="btn col-2 btn-info me-2 mb-2">${user.username}
        </button>
        `
      }
     
}).catch(function(error){
    console.log("error");
})
async function post(){
    try{
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
        let posts= await res.json();
       
    for(let onePost of posts){
        ulist.innerHTML +=`<li>${onePost.title}</li>`
    }
    }catch(error){
        console.log("error")
    }
}
post()
})

container.addEventListener("click",function(event){
    ulist.innerHTML=""
    let btn = document.getElementsByTagName("button")
    for(let button of btn){
        button.classList.remove("active")
    }
    event.target.classList.add("active")
    async function post(){
        try{
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${event.target.value}`)
            let posts= await res.json();
           
        for(let onePost of posts){
            if(onePost.userId == event.target.value)
            ulist.innerHTML +=`<li>${onePost.title}</li>`
        }
        }catch(error){
            console.log("error")
        }
    }
    post()
})


