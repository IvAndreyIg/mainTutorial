//Undefined,Number,String,Boolean,Symbol,BigInt//Null,Object,Function
//node js-concepts\types.js

/* const ar=()=>{};

console.log(typeof 0); //0123456789
console.log(typeof true); //true false
console.log(typeof 'String'); //"",'',``
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof Symbol('JS'));
console.log(typeof null);
console.log(typeof function(){}); //
console.log(typeof ar); //
console.log(typeof 9007199254740991n); //BigInt(9007199254740991)
 */
//Приведение типов
//falsy value: '',0,0n, null, undefined, NaN, false

//Строки и числа
// console.log("3" * "8"); //number 24
// console.log("3" - 40); //number 24
// console.log(null + 2); //2
// console.log(undefined + 323); //NaN
//==vs=== c приведением без приведения

// console.log(2 == "2");

// console.log(2 === "2");

//=====

console.log(false == ""); 
console.log(false == []);
console.log(false == {});
console.log("" == 0);
console.log("" == []);
console.log("" == {});
console.log(0 == []);           
console.log(0 == {});
console.log(0 == null);

/* class FakeMath extends Error{
constructor(...args){
    super(...args);

    this.name="fake";
    this.lastname="Math";
}
}


const v={
    class:FakeMath
}
console.log( Math);
console.log(EvalError);
console.log(FakeMath);
console.log(typeof 0); //0123456789
console.log(typeof true); //true false
console.log(typeof 'String'); //"",'',``
console.log(typeof undefined);
console.log(typeof FakeMath);
console.log(typeof EvalError);
console.log(typeof (new (v.class)));
console.log(  (new (v.class)).name); */
//node js-concepts\types.js
