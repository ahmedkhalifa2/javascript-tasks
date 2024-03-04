
//////////////////////// task 1  Photo gallery with Next, Previous and Slideshow. ///////////////


let img = document.images[0];
let arrImage =["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]
let count = 0, Interval
document.querySelector(".next").addEventListener("click",function(){
    if(count<arrImage.length-1){
        count++
       img.src=arrImage[count]
    }else{
        img.src=arrImage[arrImage.length-1]
    
    }
    
})
document.querySelector(".Previous").addEventListener("click",function(){
    if(count>0){
        count--
       img.src=arrImage[count]
    }else{
        img.src=arrImage[0]
    
    }
    
})

document.querySelector(".Slideshow").addEventListener("click",function(){
    let count = 0
    Interval = setInterval(function(){
        if(count<arrImage.length-1){
           img.src=arrImage[count]
           count++
        }else{
            count=0
        
        }
    },500)
    
})

document.querySelector(".stop").addEventListener("click",function(){
    clearInterval(Interval);
})



/////////////// task 2  Apply different styles over a paragraph according to checked radio button



let paragraph = document.getElementById("PAR")

function ChangeFont(evenT){
    paragraph.style.fontFamily=evenT
}

function ChangeAlign(evenT){
    paragraph.style.textAlign=evenT
}

function ChangeHeight(evenT){
    paragraph.style.lineHeight=evenT
}

function ChangeLSpace(evenT){
    paragraph.style.letterSpacing=evenT
}
function ChangeIndent(evenT){
    paragraph.style.textIndent=evenT
}

function ChangeTransform(evenT){
    paragraph.style.textTransform=evenT
}

function ChangeDecorate(evenT){
    paragraph.style.textDecoration=evenT
}

function ChangeBorder(evenT){
    paragraph.style.border=evenT
}

function ChangeBorderColor(evenT){
    paragraph.style.borderColor=evenT
}






/////////////////////////////// task3     accepts numbers only ///////////////////////////


document.getElementById("inputNumber").addEventListener("keydown",function(evenT){
    // console.log(evenT)

    if(!(/^[0-9]/.test(evenT.key)||evenT.key=="Backspace"))
    evenT.preventDefault()

})



/////////////////////////task 4  enter key to know asci code ///////////////////////

document.getElementById("asci").addEventListener("keydown",function(evenT){
   
    if(evenT.altKey == true){
        alert(`this is ( Alt Key ) and its asci code is ${evenT.keyCode}`)
    }
    else if(evenT.ctrlKey == true){
        alert(`this is ( Cntrol Key ) and its asci code is ${evenT.keyCode}`)
    }
    else if(evenT.shiftKey == true){
        alert(`this is ( Shift Key ) and its asci code is ${evenT.keyCode}`)
    }
    else{
        alert(`this is ( ${evenT.key} ) and its asci code is ${evenT.keyCode}`)
    }
})

////////////////////////////////////////////////////////////////////////

/////////////////////// task 5   preventing from mouse right click from its action.  /////////////////////////


document.addEventListener("contextmenu",function(evenT){
    evenT.preventDefault()
})



//////////// task 6 Bonus  Create an animation, orange marble move to the next location

let imgcount =0;
let imag = document.getElementsByClassName("imgmarbel");
let imgInterval;
function startAnimation(){
        if(imgcount<imag.length){ 
         if(imgcount == imag.length-1){
             imgcount=0;
             imag[imgcount].src="marble3.jpg";
             imag[imag.length-1].src="marble1.jpg";
         }else{
             imag[imgcount+1].src="marble3.jpg";
              imag[imgcount].src="marble1.jpg";
             imgcount++
         }
        }  
}

imgInterval = setInterval(startAnimation,1000);
document.getElementById("marbelimages").addEventListener("mouseout",function(){
    imgInterval = setInterval(startAnimation,1000);
})

document.getElementById("marbelimages").addEventListener("mouseover",function(){
    clearInterval(imgInterval)
})


