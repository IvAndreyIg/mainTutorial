class Cat1{

    constructor(color,name){
        this.color=color
        this.name=name
    }
}

function Cat2(color,name){
    this.color=color
    this.name=name
}

let cat=new Cat1('black','kit')
let cat2=new Cat2('black','kit')

console.log(cat);
console.log(cat2);

function myNew(constructor,...args) {
    const obj={}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args)||obj
    
}

let cat3= myNew(Cat1.constructor,'black','kit')
let cat4= myNew(Cat2,'black','kit')

console.log(cat3);
console.log(cat4);




function mynew(constructor,...params) {

    let obj={}

    Object.setPrototypeOf(obj,constructor.prototype)

    return constructor.apply(obj,params)||obj
    
}