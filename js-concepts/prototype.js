//__proro__
//Object.getPrototypeOf()

function Cat(name,color) {
    this.name=name
    this.color=color
    
}

Cat.prototype.voice=function () {
    console.log(`Cat ${this.name} says myay`);
    
}

const cat=new Cat('Kot','white')

// console.log(Cat.prototype);
// console.log(cat);
// console.log(cat.__proto__===Cat.prototype);
// console.log(cat.constructor);

function Person() {}
Person.prototype.legs=2
Person.prototype.skin="white"


const person =new Person()

person.name='Vladilen'

console.log("is name own property of person?:",person.hasOwnProperty('name'));
console.log("is name own property of person?:",person.hasOwnProperty('legs'));

const proto={year:2019}
const myYear=Object.create(proto)