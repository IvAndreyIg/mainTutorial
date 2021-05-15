const fs = require("fs");

console.time("start1");
console.time("start2");

fs.readFile(
  "F:/javascript/lessons/mainTutorial/tasks/filesystem/text.txt",
  "utf8",
  (err, data) => {
    if (err) {
      throw err;
    } else {
      console.timeEnd("start2");

      console.log(data);

      //console.dir(data,{showHidden:true,depth:5});
    }
  }
);

setImmediate((x) => {
    console.timeEnd("start1");
  console.log(`first`);

 
});
