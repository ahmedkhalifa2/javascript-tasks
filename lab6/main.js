



 //////////////////  task 1  //////////////////////////////

let xhr = new XMLHttpRequest()

xhr.open("GET","rockbands.json")

xhr.send()
let bands
xhr.addEventListener("load",function(){
    if(xhr.status == 200){
        bands  = JSON.parse(xhr.response)
    } 
})

let bandSelection = document.getElementById("bandSelection")
let singerSelection = document.getElementById("singerSelection")
bandSelection.addEventListener("change",function(){
    if(bandSelection.value =="beatles"){
        singerSelection.innerHTML=`<option value="" disabled selected>Please Select</option>`
        for(let numOption of bands.beatles){
            singerSelection.innerHTML+=`<option value="${numOption.value}">${numOption.name}</option>`
        }
        singerSelection.addEventListener('change',function(){
            window.location = singerSelection.value
        })
    }
    else if(bandSelection.value =="stones"){
        singerSelection.innerHTML=`<option value="" disabled selected>Please Select</option>`
        for(let numOption of bands.stones){
            singerSelection.innerHTML+=`<option value=${numOption.value}>${numOption.name}</option>`
        }
        singerSelection.addEventListener('change',function(){
            window.location = singerSelection.value
        })
    }
    else if(bandSelection.value =="genesis"){
        singerSelection.innerHTML=`<option value="" disabled selected>Please Select</option>`
        for(let numOption of bands.genesis){
            singerSelection.innerHTML+=`<option value=${numOption.value}>${numOption.name}</option>`
        }
        singerSelection.addEventListener('change',function(){
            window.location = singerSelection.value
        })
    }
    else if(bandSelection.value =="eagles"){
        singerSelection.innerHTML=`<option value="" disabled selected>Please Select</option>`
        for(let numOption of bands.eagles){ 
            singerSelection.innerHTML+=`<option value=${numOption.value}>${numOption.name}</option>`
        }
        singerSelection.addEventListener('change',function(){
            window.location = singerSelection.value
        })
    }
})



/////////////////////////////////////  task 2   //////////////


function towNumber(){
    if(arguments.length>2){
        throw new Error('you can not enter more than 2 parameter');
    }
    else if(arguments.length<2){
        throw new Error('you can not enter less than 2 parameter');
    }
    
}



//////////////////////task  3 /////////////////////////////////



function addNumbers(){
    let sum=0;
    if(arguments.length ==0){
        throw new Error('you must enter at least one parameter');
    }
    else if(arguments.length>0){
        // throw new Error('you can not enter less than 2 parameter');
        for(let i=0;i<arguments.length;i++){
        if(!(isFinite(arguments[i]))){
        throw new Error('you can not enter string');
        }else
           sum +=arguments[i]
        }
        
    }
     return sum
    }
    
/////////////////////////// task 4 //////////////////////////////////////


function reverse1(){
    return [].reverse.call(arguments)
    // return arguments
}
function reverse2(){
    return Array.prototype.reverse.apply(arguments)
}
