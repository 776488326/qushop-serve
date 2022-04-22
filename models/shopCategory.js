const mongoose = require("../utils/DBConnection");

const categorySchema = new mongoose.Schema({
    name: String,
    category2: [{
        name: String,
        category3: [{
            name: String,
            attr:{
                type:Array,
                default:undefined
            }
        }]
    }],
    salesDetail:{
        total:Number,
        itemList:[
            {
                "createTime": Date,
                "itemName": String,
                "itemMount": Number
            }
        ]
    }
});

const shopCategoryModel = mongoose.model("category",categorySchema);

module.exports = shopCategoryModel;