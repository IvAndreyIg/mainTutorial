//считать и вывести имя с помощью консоли


// (function name(params) {

// //console.dir(this,{showHidden:true,depth: 0})

// console.dir(this.global.global,{showHidden:true,depth: 0})

// const readline=require('readline');

// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })


// rl.question('Enter your name: ', name=>{console.log(`Hello ${name}!`);rl.close();})

// })()



const readline=require('readline');

let reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

reader.question("what is your name sir?",data=>{
    console.log("name is:",data);
    reader.close();
})