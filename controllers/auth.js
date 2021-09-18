
const people = require('../database/data.js');

const apiLoginFunction = (req, res) => {
    const { name } = req.query;
  
    if(!name) { //if no name query is sent in GET request
        return res.status(401).json({success: false, message: "No User Login Credentials"});
    } else{

        const userData = people.filter((person) => person.name === name);

        if(userData.length === 0) { //if this user does not exist

            return res.status(401).json({success: false, message: `No User with the name: ${name}`});

        } else{

            return res.status(200).json({success: true, data: userData});

        }

        
    }


  };

module.exports = { apiLoginFunction };