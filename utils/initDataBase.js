// 添加商品分类
const { shopCategoryModel } = require("../models/index");

const init = [{
    name: "手机",
    category2:[{
        name: "手机通讯",
        category3: [{
            name: "手机"
        },{
            name: "对讲机"
        }]
    },{
        name: "手机配件",
        category3: [{
            name: "耳机"
        },{
            name: "手机壳"
        }]
    },]
},{
    name: "数码",
    category2:[{
        name: "摄影摄像",
        category3: [{
            name: "单反"
        },{
            name: "拍立得"
        }]
    },{
        name: "数码配件",
        category3: [{
            name: "滤镜"
        },{
            name: "存储卡"
        }]
    },]
},{
    name: "厨具",
    category2:[{
        name: "烹饪锅具",
        category3: [{
            name: "炒锅"
        },{
            name: "压力锅"
        }]
    },{
        name: "厨房配件",
        category3: [{
            name: "饭盒"
        },{
            name: "保鲜盒"
        }]
    },]
},{
    name: "母婴",
    category2:[{
        name: "营养辅食",
        category3: [{
            name: "初乳"
        },{
            name: "维生素"
        }]
    },{
        name: "妈妈专区",
        category3: [{
            name: "护肤"
        },{
            name: "孕妈装"
        }]
    },]
},{
    name: "零食",
    category2:[{
        name: "休闲食品",
        category3: [{
            name: "坚果"
        },{
            name: "巧克力"
        }]
    },{
        name: "地方特产",
        category3: [{
            name: "山西"
        },{
            name: "内蒙古"
        }]
    },]
}];
shopCategoryModel.create(init).then((err,docs)=>{
    console.log(docs);
})

