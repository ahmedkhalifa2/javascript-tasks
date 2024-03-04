function date(){
    var today = new Date();

    var d = document.getElementById("dat")
    d.innerHTML = today.toLocaleTimeString()
}

function openWindow(){
    let x =screen.height/2
    let y =screen.width/2
    open("https://www.google.com","",`height=${x}, width =${y}`)
   
}


/////////////////////////////////////////////////////////

function countdown(){
    var count = document.getElementById("countdown")
    count.style.fontSize="25px";
    let counter =5;
    setInterval(function(){
        counter--
        if(counter == 0){
            window.close()
        }
        else{
            count.innerHTML = counter;
        }
    },1000)
}

///////////////////////////////////////////////////////////////



function userInfo(){
    let yname,yphone,ymobile,yemail;
    function fName(){
        let fname = prompt("enter your name")
        if((/^[a-z]+$/i).test(fname)){
          yname = fname;
        }else{
            fName()
        }
    }
    function phone(){
        let fphone = prompt("enter your phone")
        if((/^[0-9]{8}/).test(fphone))
           yphone=fphone
        else{
            phone()
        }
    }
    function mobile(){
        let fmobile = prompt("enter your mobile number")
        if((/^01[0-2,5]{1}[0-9]{8}$/).test(fmobile))
           ymobile=fmobile
        else{
            mobile()
        }
    }


    

    function email(){
        let femail = prompt("enter your email")
        if((/^[a-zA-Z]{3}@(gmail|yahoo).com$/).test(femail))
           yemail=femail
        else{
            email()
        }
    }



    
      fName();
      phone();
      mobile();
      email();
      let information = document.getElementById("info")
      let color = prompt("enter your color")
            information.innerHTML=`
            <pre style="color:${color}">your name is ${yname}
your phone number is ${yphone}
your mobile number is ${ymobile}
your email is ${yemail}
            </pre>`
            
    }


//////////////////////////////////////////////////
function evenNumber(){
    let even = prompt("enter your nu")
    if(/^\d*[02468]$/.test(even))
         console.log(true)
    else{
        console.log(false)
    }
}

///////////////////////////////////////////////

