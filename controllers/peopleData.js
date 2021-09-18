const people = require("../database/data.js");

const getAllUsers = (req, res) => {
  res.status(200).json(people);
};

const addNewuser = (req, res) => {
  const { id } = req.params;
  const paramId = Number(id);

  const newPeopleList = [...people];

  newPeopleList.push({ id: paramId, name: req.body.name });

  res.status(200).json(newPeopleList);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const paramId = Number(id);

  const newPeopleList = [...people];

  if(!paramId) {

    return res.status(401).json({success: false, message: "What user do I delete?"});

  } else{

    const userToBeDeleted = people.find((person) => person.id === paramId);

    if(!userToBeDeleted) {

      return res.status(401).json({success: false, message: "User not found"});

    } else{

      const newPeopleList = people.filter((person) => person.id !== paramId);
      return res.status(200).json(newPeopleList);

    }

    


  }
};


const updateUser = (req, res) => {


  const { id } = req.params;
  const paramId = Number(id);

  const newPeopleList = [...people];

  if(!paramId) {

    return res.status(401).json({success: false, message: "What user do I update?"});

  } else{

    const userToBeUpdated = people.find((person) => person.id === paramId);

    if(!userToBeUpdated) {

      return res.status(401).json({success: false, message: "User not found"});

    } else{

      const newPeopleList = people.filter((person) => person.id !== paramId);
      newPeopleList.push({ id: paramId, name: req.body.name });
      return res.status(200).json(newPeopleList);

    }

    


  }


    
}

module.exports = { getAllUsers, addNewuser, deleteUser, updateUser };
