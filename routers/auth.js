const express = require("express");
const router = express.Router();

const { apiLoginFunction } = require('../controllers/auth.js')

router.get("/login/query", apiLoginFunction);

module.exports = router;
