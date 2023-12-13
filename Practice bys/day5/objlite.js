// 3. create object by using Class
//javascript is a prototype based, not class based
//Syntactic sugar
class Circle {
  constructor(r) {
    this.radius = r
  }
  //shared method among circle objects
  area() {
    return Math.PI * Math.pow(this.radius, 2)
  }
  getRadius() {
    return this.radius
  }
}
const c1 = new Circle(2)
const c2 = new Circle(3)
const c3 = new Circle(4)
console.log(c1.area())
console.log(c2.area())
console.log(c3.area())
console.log(c1.getRadius())
console.log(c2.getRadius())
console.log(c3.getRadius())
// Object prototype<-Circle prototype<-c1
console.log(Object.prototype.isPrototypeOf(c1))
console.log(Circle.prototype.isPrototypeOf(c1))
