require("dotenv").config();

const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

async function main() {
	await mongoose.connect(
		`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ulha0ay.mongodb.net/?retryWrites=true&w=majority`
	);

	console.log("Conectado com sucesso");
}

main().catch((err) => console.log(err));

module.exports = main;
