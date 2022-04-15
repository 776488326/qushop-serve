//导入数据库连接器
const mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://localhost:27017/shopServe");

//判断连接结果
mongoose.connection.once("open",()=>{
    console.log("数据库连接成功！");
})

module.exports = mongoose;
