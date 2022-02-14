const express = require("express");
const app = express();
const port = 5000;
app.listen(port, () => console.log(`Listening on port no. ${port}`));
app.get("/", (req, res) => {
	res.send("Hi There!!!");
});
