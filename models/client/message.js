const mongoose = require("../../utils/DBConnection")

const msgSchema = new mongoose.Schema({
    totalVisit: Number,
    swiperList:[],
    advertisment: [],
    followMe:String,
    bestAdvImg:[],
})

const msgModel = mongoose.model("message",msgSchema);

module.exports = msgModel;