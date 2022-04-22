const mongoose = require("../utils/DBConnection")

const msgSchema = new mongoose.Schema({
    totalVisit: Number,
    visitDay: [{
        time: Date,
        count: Number
    }],
    payDay: [{
        time: Date,
        price: Number,
        category: String
    }]
})

const msgModel = mongoose.model("message",msgSchema);

module.exports = msgModel;