require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const client = require("./routes/client");
const pdfRead = require("./routes/readPdf");

const PORT = process.env.PORT || 19000;
const app = express();

app.use(cors()); //SETAR O FILTRO origin: 'http://example.com',

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(client, pdfRead);

app.listen(PORT, () => console.log(PORT));
