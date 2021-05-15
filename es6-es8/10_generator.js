const array = [1, 2, 3, 4];
const str = "Hello";

// console.dir(array[Symbol.iterator], { showHidden: true, depth: 2 });

// console.dir(str[Symbol.iterator], { showHidden: true, depth: 2 });

const collection = {
  rooms: [3, 5, 1, 4, 56, 2, 4, 6, 2, 3],

//   [Symbol.iterator]() {
//     let i = 0;

//     return {
//       next: () => {
//         const value = this.rooms[i];

//         i++;

//         return {
//           value,
//           done: i > this.rooms.length ? true : false,
//         };
//       },
//     };
//   },
  * [Symbol.iterator]() {
      
  for (let i = 0; i < this.rooms.length; i++) {
    yield this.rooms[i];
  }
}
};


for (let val of collection) {
  console.log(`i:${val}`);
}

// function* generator(num) {
//   for (let i = 0; i < num; i++) {
//     yield i;
//   }
// }

// for (let val of generator(4)) {
//   console.log(`i:${val}`);
// }
