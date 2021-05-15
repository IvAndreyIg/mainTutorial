const symbol= Symbol('demo')


const obj={
    name:'Elena',
    [symbol]:'meta'
}


for( let key in obj){
    console.log(key)
}


console.log("🚀 ~ file: 9_symbols.js ~ line 15 ~ Object.keys(obj)", Object.keys(obj))
