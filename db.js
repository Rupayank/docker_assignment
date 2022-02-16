const POOL = require("pg").Pool;
const pool = new POOL({
	user: process.env.USER,
	password: process.env.PASS,
	database: process.env.DB,
	host: "localhost",
	port: process.env.PGPORT,
});
// pool.on("connect", () => {
// 	console.log("Connected to DB!");
// });
module.exports = pool;
