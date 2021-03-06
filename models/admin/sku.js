const mongoose = require("../../utils/DBConnection");

const skuSchema = new mongoose.Schema({
    spuId:String,
    price:Number,
    skuName:String,
    skuDesc:String,
    weight:Number,
    tmId:String,
    category3Id:String,
    skuDefaultImg: String,
    isSale:{
        type:Boolean,
        default: false
    },
    totalCount:Number,
    saled:Number,
    stock:Number,
    skuImageList:Array,
    skuAttrValueList:Array,
    skuSaleAttrValueList:Array,
    ishot: {
        type:Boolean,
        default: false
    },
    isSelect:{
        type:Boolean,
        default: false
    }
});

const skuModel = mongoose.model("sku",skuSchema);

module.exports = skuModel;