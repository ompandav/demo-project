const express = require('express');
const router = express.Router();

const {create} = require("../controller/createTodo");
router.post("/createTodo", create);

const {fetch} = require("../controller/fetchTodo");
router.get("/fetchTodo", fetch);


const {update} = require("../controller/updateTodo");
router.get("/updateTodo", update);

const {deletetodo} = require("../controller/deleteTodo");
router.delete("/deleteTodo", deletetodo);

module.exports = router;