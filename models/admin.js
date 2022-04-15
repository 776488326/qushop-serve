//连接数据库
const mongoose = require("../utils/DBConnection");
//定义模型规则
const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: {
        default: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-764647c8-fd81-4a31-845f-c0bf285f2096/2df02422-e28e-4697-9d7a-6ae60569004f.png",
        type: String
    },
    routes: {
        default: undefined,
        type: []
    },
    buttons: {
        default: undefined,
        type: []
    },
    roles: {
        default: undefined,
        type: []
    }
});
//创建模型（集合）
const adminModel = mongoose.model("admin",adminSchema);

module.exports = adminModel;


