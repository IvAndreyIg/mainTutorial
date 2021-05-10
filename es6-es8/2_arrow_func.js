let squareArrow = (x) => x ** 3;

let objects = [
  {
    name: "Alex",
    age: 13,
    animal: "cat",
  },
  {
    name: "Bob",
    age: 17,
    animal: "snake",
  },
  {
    name: "George",
    age: 15,
    animal: "dog",
  }
];

let animalMap=objects.map(({animal})=>`name:${animal}`)


console.log(animalMap);
