const express = require("express");
const consultarCNPJ = require("consultar-cnpj");
const { EnterpriseModel } = require("../dataBase/mongoDb");
const upload = require("../services/upload");

const route = express.Router();

route.get("/getAllClient", async (req, res) => {
  const { cnpj } = req.body;
  try {
    const enterprise = await EnterpriseModel.find();
    return res.status(200).send(enterprise);
  } catch (e) {
    return res.status(400).send("Não foi possível retornar os dados");
  }
});
route.get("/getClient", async (req, res) => {
  const { cnpj } = req.body;
  try {
    const enterprise = await EnterpriseModel.findOne({ cnpj: cnpj });
    return res.status(200).send(enterprise);
  } catch (e) {
    return res.status(400).send("Não foi possível retornar os dados");
  }
});
route.post("/clientBasicData", async (req, res) => {
  const { email, tel1, tel2, cnpj } = req.body;

  try {
    const enterpriseExist = await EnterpriseModel.findOne({ cnpj: cnpj });
    if (enterpriseExist) {
      return res.status(400).send(enterpriseExist);
    }
    const Client = await EnterpriseModel.create({
      email: email,
      telOne: tel1,
      telTwo: tel2,
      cnpj: cnpj,
    });
    const empresa = await consultarCNPJ("27865757000102");
    Client.enterprise = empresa;
    await Client.save();
    return res.status(200).send(Client);
  } catch (e) {
    console.log(e);
    return res.status(400).send("Erro ao buscar CNPJ");
  }
});
route.post("/clientFinancial", upload.single("file"), (req, res) => {
  return res.status(200).send("Arquivos enviados com sucesso");
});
route.post("/clientWell/:id", async (req, res) => {
  const { well } = req.body;
  const { id } = req.params;
  try {
    const client = await EnterpriseModel.findById(id);
    client.wells = well;
    await client.save();
    return res.status(200).send("Bens salvos com sucesso");
  } catch (e) {
    console.log(e);
    return res.status(400).send("Não foi possível adicionar os bens");
  }
});
module.exports = route;
