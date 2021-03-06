// require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
// const port = process.env.PORT || 9000;
// app.listen(port, () => console.log(`Listening on port no. ${port}`));
// const db = require("./db");
// const app = require("./server");

const controller = require("./controller");

// Routes
app.post("/todo", controller.addNewTodo);
app.get("/todo/all", controller.getAllPendingToDo);
app.get("/todo/:id", controller.getParticularToDo);
app.put("/todo/:id", controller.updateDescription);
app.delete("/todo/:id", controller.deleteToDo);
module.exports = app;
