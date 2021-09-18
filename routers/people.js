const express = require("express");
const { getAllUsers, addNewuser, deleteUser, updateUser } = require("../controllers/peopleData.js");

const router = express.Router();

router.get("/", getAllUsers);
router.post('/:id', addNewuser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
