const express = require("express");
const PdfParser = require("pdf2json");

const pdfParser = new PdfParser();

const route = express.Router();

route.get("/readPdfJson", (req, res) => {
  pdfParser.loadPDF("./tmp/balanco.pdf");

  pdfParser.on("pdfParser_dataError", (errData) =>
    console.error(errData.parserError)
  );
  pdfParser.on("pdfParser_dataReady", (pdfData) => {
    const TextsInPage = pdfData.Pages[0].Texts;

    const Balanço = ["ativo", "passivo", "patrimônio"];
    const DRE = ["receita", "lucro", "custo"];
    const Fluxo = ["caixa", "fluxo"];

    let result;

    TextsInPage.map((value) => {
      return decodeURI(value.R[0].T.toLowerCase());
    }).forEach((value) => {
      Balanço.forEach((item) => {
        if (value.includes(item)) {
          result = "Balanço patrimonial";
        }
      });
      DRE.forEach((item) => {
        if (value.includes(item)) {
          result = "Demonstração do resultado de exercício";
        }
      });
      Fluxo.forEach((item) => {
        if (value.includes(item)) {
          result = "Fluxo de caixa";
        }
      });
    });

    return res.status(200).send(result);
  });
});
module.exports = route;
