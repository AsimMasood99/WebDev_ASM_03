const express = require("express");
const { readData } = require("./read files/files");

const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Listning on port ${port}...`);
});

app.get("/api/users", async (req, res) => {
	const users = await readData();
	res.json(users);
});
