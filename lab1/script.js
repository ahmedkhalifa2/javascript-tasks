function sum(x,y){
    return x+y
}

function sum2Nums(){
    var num1 = Number(prompt('please enter first number to sum'));
    var num2 = Number(prompt('please enter second number to sum'));
	alert(sum(num1,num2)); 
    
}


function sumLess100(){
    var num1 = Number(prompt('please enter first number'));
    var num2 = Number(prompt('please enter second number'));

((num1+num2)<100)?console.log("true"):console.log("false")
}

function strTint(){
    var num1 = parseInt(prompt('please enter first number'));
    console.log(num1)
}
document.write("<br>")
for(var i=1;i<=5;i++){
    for(var j=0;j<i;j++){
            document.write("*")
            
        }
        document.write("<br>")
       }
    
