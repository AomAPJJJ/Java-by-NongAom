class Circle{
   
    constructor(r) {
        this.radius = r
    }

    area(){
       return Math.PI * Math.pow(this.radius , 2)
    }

    getRadius(){
        return this.radius
    }

}

const c1 = new Circle(12)
const c2 = new Circle(5)
const c3 = new Circle(3)


console.log(c1.area() , c1.getRadius())


console.log(Object.prototype.isPrototypeOf(c1))


