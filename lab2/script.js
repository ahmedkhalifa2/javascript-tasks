function strE(){
    var str = prompt("enter your word");
let x=0
for(var i=0;i<str.length;i++){
    if(str[i]=='e')
        x++;
}
if(x==0)
console.log("there no e");
else
console.log(x);
}

//////////////////////////////////////

function palindrome(){
    var str1 = prompt("enter your a word");
    var str2 = confirm("Are you want to consider case sensitivity")
    
    if (str2 == true){
        str1=str1.toUpperCase();
        let x=0;
        let y =Math.floor((str1.length)/2)
        for(var i=0;i<y;i++){
            if(str1[i]==(str1[str1.length-(i+1)])){
                x++;
            }
        }
        if(x==y){
            console.log('The given string is a palindrome');
        }else{
            console.log('The given string is NOT a palindrome');
        }
    }else{
        let a=0;
        let b =Math.floor((str1.length)/2)
        for(var i=0;i<b;i++){
            if(str1[i]==(str1[str1.length-(i+1)])){
                a++;
            }
        }
        if(a==b){
            console.log('The given string is a palindrome');
        }else{
            console.log('The given string is NOT a palindrome');
        }

    }
}
////////////////////////////////////////////////////////////////

function fillArray(){
    var num1 = Number(prompt("please enter first number"))
    var num2 = Number(prompt("please enter second number"))
    var num3 = Number(prompt("please enter third number"))
    var arr=[num1,num2,num3];
     var sum= arr[0]+arr[1]+arr[2];
     var multiplication= arr[0]*arr[1]*arr[2];
     var division= arr[0]/arr[1]/arr[2];

    document.write(`
    <pre><span style="color:red">sum of the 3 values ${arr[0]}+${arr[1]}+${arr[2]}</span> ${sum}
    <span style="color:red">multiplication of the 3 values ${arr[0]}*${arr[1]}*${arr[2]}</span> ${multiplication}
    <span style="color:red">division of the 3 values ${arr[0]}/${arr[1]}/${arr[2]}</span> ${division}</pre>`)
}

function sortArray(){
    var num1 = Number(prompt("please enter first number"))
    var num2 = Number(prompt("please enter second number"))
    var num3 = Number(prompt("please enter third number"))
    var num4 = Number(prompt("please enter four number"))
    var num5 = Number(prompt("please enter five number"))
    var arr1=[num1,num2,num3,num4,num5];
    var arr2=[num1,num2,num3,num4,num5];

      var ascending = arr1.sort();
      
      var decending = arr2.sort().reverse();

    document.write(`
    <pre><span style="color:red">you have entered ${arr1[0]} , ${arr1[1]} , ${arr1[2]} , ${arr1[3]} , ${arr1[4]}</span>
    <span style="color:red">you values after ascending ${ascending[0]},${ascending[1]},${ascending[2]},${ascending[3]},${ascending[4]}</span> 
    <span style="color:red">you values after decending ${decending[0]},${decending[1]},${decending[2]},${decending[3]},${decending[4]}</span></pre>`)
}

function circle(){
    var radiuss = Number(prompt("what is the value of radius"))
    var area = radiuss*(Math.pow(Math.PI,2));
    alert(`Total area of the circle is ${area}`)
}

/////////////////////////////////////////////

function square(){
    var num = Number(prompt("what is the value of you want to calculate its square root"))
    var square = Math.sqrt(num);
    alert(`Square root of ${num} is ${square}`)
}

function angle(){
    var num = Number(prompt("what is the angle you want to calculate its cos"))
    var cosin = Math.cos(num);
    var cossin =Math.ceil(cosin);
    alert(`cos ${num} is ${cossin}`)
}