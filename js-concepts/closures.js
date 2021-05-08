//замыкание
//функция замыкает в себе значение из вышестоящего скоупа


// function sayHelloTo(name) {
//     let message='Helllo'+name

//     return function () {
//         console.log(message);
//     }
// }
// const helloToAlex=sayHelloTo('Alex');

// console.log(helloToAlex);

const fib=[1,2,3,5,8,13]

for(var i=0;i<fib.length;i++){

    setTimeout(
        function () {
            console.log(`fib[${i}]=${fib[i]}`);
        },
        0
    )
}