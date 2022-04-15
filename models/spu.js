const mongoose = require("../utils/DBConnection");

const spuSchema = new mongoose.Schema({
    category3Id:String,
    description:String,
    spuImageList:Array,
    spuName:String,
    spuSaleAttrList:Array,
    tmId:String
});

const spuModel = mongoose.model("spu",spuSchema);

module.exports = spuModel;