class Person {
  type = "human";

  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("привет тебе от " + this.name);
  }
}

// const max=new Person('Max')

// max.greet()

// console.log(max.type);

// console.log(max.__proto__===Person.prototype);

class Programmer extends Person {
  constructor(name, job) {
    super(name);

    this._job = job;
  }

  get job() {
    return this._job.toUpperCase();
  }

  set job(job) {
    if (job.lenth < 4) {
      console.log("Validation failed");
    } else {
      this._job = job;
    }
  }

  times(){
    return new Date()
  }

  greet() {
    super.greet();
    console.log(
      "🚀 ~ file: 8_classes.js ~ line 26 ~ Programmer ~ constructor ~ this",
      this
    );
    console.dir(super.constructor, { showHidden: true, depth: 5 });
  }
}

// 

// backender.greet();

// console.log(backender.job);

// backender.job='Backend'

// console.log(backender.job);

//Static 

class Util{

  static average(func,...args){

    let label=Symbol('label')

      console.time(label.toString());

      func(...args);


      console.timeEnd(label.toString());

  }

}


// Util.average((...nums)=>{
//  Math.max(...nums) 
//  console.log("🚀 ~ file: 8_classes.js ~ line 82 ~ Util.average ~ Math.max(x,y,z) ", Math.max(...nums)  )
// },3,5,1,3,5,6,2,5,4,5,5,6,7,8)
const backender = new Programmer("alex", "Java server developer");


for( let key in backender){
  console.log(key)
}


console.log("🚀 ~ file: 9_symbols.js ~ line 15 ~ Object.keys(obj)", Object.keys(backender))

console.log("🚀 ~ file: 9_symbols.js ~ line 15 ~ Object.keys(obj)",
 Object.getOwnPropertyNames(backender))

