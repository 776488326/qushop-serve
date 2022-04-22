const mongoose = require("../utils/DBConnection");

const permissionSchema = new mongoose.Schema({
    "deleted": Boolean,
    "pid": String,
    "name": String,
    "code": String,
    "toCode": String,
    "type": Number,
    "level": Number,
    "children": Array,
    "select": Boolean
},{timestamps:{
    createdAt:"gmtCreate",
    updatedAt:"gmtModified"
}});

const permissionModel = mongoose.model("permission",permissionSchema);

module.exports = permissionModel;