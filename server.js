const express = require("express");
const session = require("express-session");

const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
	app.listen(PORT, function () {
		console.log(
			"==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
			PORT,
			PORT
		);
	});
});
