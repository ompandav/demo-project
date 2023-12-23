const express = require('express');
const router = express.Router();

const {create} = require("../controller/createTodo");
router.post("/createTodo", create);


module.exports = router;