require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");
const { v4: uuidv4 } = require("uuid");
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port no. ${port}`));
app.use(express.json());
app.post("/todo", async (req, res) => {
	try {
		const { description, dueDate, dueTime, timeZone } = req.body;
		const id = uuidv4();
		const newTodo = await db.query(
			`INSERT INTO public."todoInfo" VALUES ($1,$2,$3,$4,$5) RETURNING *`,
			[id, dueDate, dueTime, timeZone, description]
		);
		res.status(200).send(newTodo.rows[0]);
	} catch (err) {
		console.log(err);
		res.status(500).send({ message: err });
	}
});
app.get("/todo", async (req, res) => {
	try {
		const allTodo = await db.query(`SELECT * FROM public."todoInfo"`);
		res.status(200).send(allTodo.rows);
	} catch (err) {
		console.log(err);
	}
});
app.get("/todo/:id", async (req, res) => {
	try {
		const todo = await db.query(`SELECT * FROM public."todoInfo" WHERE id=$1`, [
			req.params.id,
		]);
		res.status(200).send(todo.rows);
	} catch (err) {
		console.log(err);
	}
});
app.put("/todo/:id", async (req, res) => {
	try {
		const updateTodo = await db.query(
			`UPDATE public."todoInfo" SET description=$1 WHERE id=$2`,
			[req.body.description, req.params.id]
		);
		res.status(200).send({ message: "Description updated" });
	} catch (err) {
		console.log(err);
	}
});
app.delete("/todo/:id", async (req, res) => {
	try {
		const todo = await db.query(`DELETE FROM public."todoInfo" WHERE id=$1`, [
			req.params.id,
		]);
		res.status(200).send({ message: "Deleted" });
	} catch (err) {
		console.log(err);
	}
});
