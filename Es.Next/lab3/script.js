




////////////////////////////// task 2 /////////////////////////////


export class Shape{
    constructor(side1){
        this.side1 = side1
    }
    area(){

    }
    parameter(){
        
    }
    toString(){
        console.log( this.area(),this.parameter())

   }
}

export class Rectangle extends Shape{
    constructor(side1,side2){
        super(side1)
        this.side2 = side2
    }

    area(){
        return this.side1 * this.side2
    
    }
    parameter(){
        return 2* (this.side1 + this.side2) 
    }
    
}

export class Square extends Shape{
    constructor(side1){
        super(side1)
    }

    area(){
        return this.side1 * this.side1
    
    }
    parameter(){
        return 2* (2*this.side1) 
    }
   
        
}

export class Circle extends Shape{
    constructor(side1){
        super(side1)
    }

    area(){
        return Math.pow(this.side1,2)*Math.PI
    }
    parameter(){
        return 2*(Math.PI*this.side1)
       
    }
    
}



