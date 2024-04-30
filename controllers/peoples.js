let people = require("../data");

const list = (req, res) => {
  res.json(people);
};

const show = (req, res) => {
  const id = req.params.id;

  const person = people.find((person) => person.id === Number(id));
  res.json(person);
};

const create = (req, res) => {
  const person = {
    id: people.length + 1,
    ...req.body,
  };

  console.log(person);

  people.push(person);
  res.json(person);
};

const update = (req, res) => {
  const id = req.params.id;
  const person = people.find((person) => person.id === Number(id));
  const foundindex = people.findIndex((person) => person.id === Number(id));
  const newinfo = {
    ...person,
    ...req.body,
  };

  people.splice(foundindex, 1, newinfo);
  res.json(newinfo);
};

const remove = (req, res) => {
  const id = req.params.id;
  const foundindex = people.findIndex((person) => person.id === Number(id));

  people = people.filter((people) => {
    return people.id !== Number(id);
  });
  for (let i = 0; i < people.length; i++) {
    if (people[i].id > Number(id)) {
      people[i].id = people[i].id - 1;
    }
  }
  res.json(people);
};

module.exports = {
  list,
  show,
  create,
  update,
  remove,
};
