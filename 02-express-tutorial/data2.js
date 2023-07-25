const people = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
  { id: 5, name: "emma" },
];

// Convert the people array into an array of arrays
const dataArray = people.map((person) => [person.id, person.name]);

module.exports = { data: dataArray };
