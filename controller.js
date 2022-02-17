const { v4: uuidv4 } = require("uuid");
const db = require("./db");
const moment = require("moment-timezone");
const logger = require("./logger");

module.exports = {
	async addNewTodo(req, res) {
		try {
			const { description, dueDate, dueTime, timeZone } = req.body;
			// console.log(dueDate, moment.utc(dueTime).format());
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
	},
	async getAllPendingToDo(req, res) {
		try {
			// var zone_name = moment.tz.guess();
			// var timezone = moment.tz(zone_name).zoneAbbr();
			// console.log(zone_name);
			const fullDate = moment.utc();
			const time = fullDate.format("HH:mm:ss");
			const date = fullDate.format("YYYY-MM-DD");
			console.log(time, date);
			const allTodo = await db.query(
				`SELECT * FROM public."todoInfo" WHERE task_due_date>=$1 AND task_due_time>$2`,
				[date, time]
			);
			res.status(200).send({ result: allTodo.rows, message: "Pending todos" });
		} catch (err) {
			console.log(err);
		}
	},
	async getParticularToDo(req, res) {
		try {
			const todo = await db.query(
				`SELECT * FROM public."todoInfo" WHERE id=$1`,
				[req.params.id]
			);
			res.status(200).send(todo.rows);
		} catch (err) {
			console.log(err);
		}
	},
	async updateDescription(req, res) {
		try {
			const updateTodo = await db.query(
				`UPDATE public."todoInfo" SET description=$1 WHERE id=$2`,
				[req.body.description, req.params.id]
			);
			res.status(200).send({ message: "Description updated" });
		} catch (err) {
			console.log(err);
		}
	},
	async deleteToDo(req, res) {
		try {
			const todo = await db.query(`DELETE FROM public."todoInfo" WHERE id=$1`, [
				req.params.id,
			]);
			res.status(200).send({ message: "Deleted" });
		} catch (err) {
			console.log(err);
		}
	},
};
