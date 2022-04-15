//连接数据库
const mongoose = require("../utils/DBConnection")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: {
        type: String,
        default: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-764647c8-fd81-4a31-845f-c0bf285f2096/83064ad6-676d-409f-ab51-2f9a37b91b68.png"
    },
    phoneNum: String,
    email: String,
    orderList: Array,
    cartList: Array,
    addressList: Array
})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;