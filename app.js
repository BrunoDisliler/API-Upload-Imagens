const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || PORT;

app.listen(PORT, () => {
	console.log(`Servidor estárodando na porta ${PORT}`);
});
