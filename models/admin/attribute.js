const mongoose = require("../../utils/DBConnection");

const attrShcema = new mongoose.Schema({
    attrName: String,
    categoryId: String,
    categoryLevel: Number,
    attrValueList: [{
        valueName:String,
        attrId:Number
    }]
});

const attrModel = mongoose.model("attr",attrShcema);

module.exports = attrModel;

