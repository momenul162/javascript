const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 14 },
  { name: "Sima", age: 18 },
];
const part = people.reduce((previpuseValue, person) => person.age + previpuseValue, 0);
console.log(part);

const names = {
  name: "Meena",
  city: "Rajshahi",
};
const property = names.city;
console.log(property);
