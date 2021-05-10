

// let first1=function () {
//     return a
// }

 //let a=1;


// let first2=function () {
//     return a
// }

// let first3

// let second =function (f) {

//     let a=2;
    
//     first3=function () {
//         return a
//     }

    
//     return f();
// }

//  console.dir(first1)

//  console.dir(second(first2))

//  setTimeout(() => {
//      console.dir(first3)
 
//  }, 1);





// this.firstName='igor';
// console.log("first this:");
// console.log(this);
// console.log("arguments:");
// console.log(arguments);
// {
// this.firstName='alex';

// let p=function() {
//     this.Abram='rocket1';
//     console.dir(this);
//     console.log(this.firstName);
//     console.log(this.Abramos);
// }

// let p2=function() {
//     this.Abramovich='rocke2t';
//     console.dir(this);
//     console.log(this.Abram);
// }

// function p3(){
//     this.Abramos='rocket3';
//     console.dir(this);
//     console.log(this.Abram);
//     p()
// }

// p();
// p2();
// p3();
// var person={
//     firstName:'bobby',
//     printfirstName:p()
// }
// console.log(this.firstName);

// }
// console.log(this.firstName);

// console.log("STOP");

(function(){
    console.dir(this,{showHidden:true,depth:0});
    this.name="lolaby"
})()


console.dir(this,{showHidden:true,depth:0});
console.dir(this.name,{showHidden:true,depth:0});
console.log(Object.keys(this));
//console.log(this.name);


setTimeout(function(){
    console.log("11timeout");
    console.dir(this,{showHidden:false,depth:0});
    console.dir("lolaby",this.name);
    
}, 23);

