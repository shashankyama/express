let { people } = require("../data");
const fs = require("fs");
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { id, name } = req.body;
  if (!name || !id) {
    return res
      .status(201)
      .json({ success: false, msg: "provide valid name and id" });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { id, name } = req.body;
  if (!name || !id) {
    return res
      .status(201)
      .json({ success: false, msg: "provide valid details" });
  }
  const users = JSON.parse(people);
  fs.writeFile("../data", JSON.stringify(users), "utf8", (err) => {
    res.json({ message: "Successful" });
  });
  res.status(201).json({ success: true, data: [...people, name] });
};

const updatePersonPostman = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id: ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id == Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id: ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
  createPersonPostman,
  createPerson,
  updatePersonPostman,
  getPeople,
  deletePerson,
};
