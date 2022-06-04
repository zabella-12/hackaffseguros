const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Enterprise = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },
  telOne: { type: String, required: true },
  telTwo: { type: String, required: false },
  cnpj: { type: String, required: false },
  enterprise: { type: Object, required: false },
  wells: { type: [Object], required: false },
});

const EnterpriseModel = mongoose.model("Enterprise", Enterprise);

module.exports = { EnterpriseModel };
