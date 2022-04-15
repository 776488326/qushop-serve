const mongoose = require("../utils/DBConnection");

const tradeSchema = new mongoose.Schema({
    tmName: String,
    logoUrl: String
});

const traMarkModel = mongoose.model("trademark",tradeSchema);

module.exports = traMarkModel;