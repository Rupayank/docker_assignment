require("dotenv").config();
const app = require("./index");
const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port no. ${port}`));
