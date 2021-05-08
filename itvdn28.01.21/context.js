

let first1=function () {
    return a
}

let a=1;


let first2=function () {
    return a
}

let first3

let second =function (f) {

    let a=2;
    
    first3=function () {
        return a
    }

    
    return f();
}

 console.dir(first1)

 console.dir(second(first2))

 setTimeout(() => {
     console.dir(first3)
 
 }, 1);