//4. create object with Object.create() function
// const p1 = new Person(1001, 'Adam', 'Jo')
const pp1 = Object.create(p1)

console.log(pp1)

console.log(pp1.id)

console.log(pp1.firstname)

console.log(pp1.lastname)

console.log(Object.prototype.isPrototypeOf(pp1)) //true
console.log(Person.prototype.isPrototypeOf(pp1)) //true

pp1.hobbies = ['reading', 'shopping']

console.log(Object.keys(pp1))
console.log(Object.values(pp1))
console.log(Object.entries(pp1))






