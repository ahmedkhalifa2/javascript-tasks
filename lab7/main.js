
function Shape(sides){
    if(this.constructor == Shape){
        throw new Error("Shape is Abstract class")   
    }
    this.numSides = sides
}



function Rectangle(wid,heigh,side){
    Shape.call(this,side)
    this.width = wid;
    this.height = heigh;
    Rectangle.counter++
    if(Rectangle.counter>2){
        throw new Error("Only one rectangle can be created")
    }
}


Rectangle.prototype = Object.create(Shape.prototype)

Rectangle.prototype.constructor =Rectangle


Rectangle.counter=0

Rectangle.prototype.area=function(){
      console.log(this.width*this.height) 
}
Rectangle.prototype.perimeter=function(){
    console.log(2*(this.width+this.height)) 
}
Rectangle.prototype.toString=function(){
    console.log(`rectangle width ${this.width} and height ${this.height} its area ${this.width*this.height} and its perimeter is ${2*(this.width+this.height)}`) 
}

Rectangle.retrieveCounter =function(){
    return this.counter
}

Square.counterrr = 0
function Square(side,numside){
    Rectangle.call(this,side,side,numside)
    Square.counterrr++
    if(Square.counterrr>1){
        throw new Error("Only one square can be created")
    }
}
 

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.constructor = Square


//  let shap = new Shape(5)  //error 1

let recObject1 = new Rectangle(10,8)

// let recObject2 = new Rectangle(5,7)    // error 2

let squarObj1 = new Square(8,4)
// let squarObj2 = new Square(5,4)    //error 2

