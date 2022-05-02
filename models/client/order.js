const mongoose = require("../../utils/DBConnection")

const orderShcema = new mongoose.Schema({
    orderInfo:{},
    addressInfo:{
    },
    userId:String,
    status:{
        type:Number,
        default:0
    }
},{
    timestamps:{
        createdAt:"creatTime",
        updatedAt: "modifyTime"
    }
})

const orderModel = mongoose.model("order",orderShcema);

module.exports = orderModel;