// Promise.resolve("exampleResult")
//   .then((result) => {
//     console.log(result);
//     return result + "newthen1";
//   })
//   .then((result) => {
//     console.log(result);
//   });

// console.log(0);
// (() => console.log(1))();
// setTimeout(() => console.log(2), 0);
// console.log(0);
// setTimeout(() => console.log(2), 0);
// (() => console.log(1))();

console.time('time1');
console.time('time');
console.time('time3');
//  setImmediate((x=>{

//     console.timeEnd('time');
// })) 




let promiseTime=new Promise((res,rej)=>{
    setTimeout((x=>{

        console.timeEnd('time1');
        res("done1");
    }),10)
})


let promise = new Promise((resolve,reject)=>{
    setImmediate((x=>{

        console.timeEnd('time');
        resolve("done2");
    }))
})
console.timeEnd('time3');
promiseTime.then(res=>{

    console.log(res);

})

promise.then(res=>{

    console.log(res);

})


//console.log("first");
// setTimeout((x=>{

//     console.timeEnd('time');
// }),0)