const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		// Pegando a data para gerar um nome aleatório não repetido + a extensão do arquivo
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage });

module.exports = upload;
