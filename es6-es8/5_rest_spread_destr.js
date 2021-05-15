//rest

function joinAll(...params) {
  return params.join("_");
}

console.log(
  joinAll(3, 4, "232", joinAll).replace(/^[\n\uFEFF\xA0]+|[\n\uFEFF\xA0]+$/, "")
);

//spread

let arr = [4, "6", 1, 4, 4, 2, 4];

console.log(
  "🚀 ~ file: 5_rest_spread_destr.js ~ line 18 ~ Math.max(arr)",
  Math.max(...arr)
);

//Destructuring

const array = [1, undefined, 3, 5, 8, 13, 3, 4, 5];

const [a, , , b, ...e] = array;
console.log("🚀 ~ file: 5_rest_spread_destr.js ~ line 26 ~ e", e);
console.log("🚀 ~ file: 5_rest_spread_destr.js ~ line 26 ~ b", b);
console.log("🚀 ~ file: 5_rest_spread_destr.js ~ line 26 ~ a", a);

//Object

let alex = {
  name: "alex",
  age: 19,
  collage: "MTII",
  course: 3,
};

let mike = { ...alex, name: "mike" };

console.log("🚀 ~ file: 5_rest_spread_destr.js ~ line 41 ~ mike", mike);
