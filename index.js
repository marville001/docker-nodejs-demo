const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.use(express.json());

app.get("/posts", async (req, res, next) => {
	try {
		const URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

		const response = await fetch(URL);
		const data = await response.json();

		res.status(200).send(data)
	} catch (error) {
		console.log(error);
        res.status(500).json({
            message: "Failed To Get Posts",
            error: error.message,
        });
    }
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`App running on post ${PORT}`));
