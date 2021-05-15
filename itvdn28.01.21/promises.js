function funck1() {
 return new Promise((resolve, reject) => {
    setTimeout((x) => {
      resolve("funck1")
    }, 1000);
  })
}

function funck2() {
  return new Promise((resolve, reject) => {
    setTimeout((x) => {
      resolve("funck2")
    }, 2000);
  })
}

funck1()
.then(new Function())
.then(function (data) {
    console.log(data);
})

console.log("av");