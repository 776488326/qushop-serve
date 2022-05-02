const mongoose = require("../../utils/DBConnection")

const shopCartShcema = new mongoose.Schema({
    shopList:[
        {
            skuId:String,
            skuName:String,
            attrList:Array,
            count:Number,
            price:Number,
            isChecked:Boolean,
            skuImg:String
        }
    ],
    totalPrice:Number
})

const shopCartModel = mongoose.model("shopcart",shopCartShcema);

module.exports = shopCartModel;