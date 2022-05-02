// 添加商品分类
const { shopCategoryModel,msgModel} = require("../models/index");

// const init = [{
//     name: "手机",
//     category2:[{
//         name: "手机通讯",
//         category3: [{
//             name: "手机"
//         },{
//             name: "对讲机"
//         }]
//     },{
//         name: "手机配件",
//         category3: [{
//             name: "耳机"
//         },{
//             name: "手机壳"
//         }]
//     },]
// },{
//     name: "数码",
//     category2:[{
//         name: "摄影摄像",
//         category3: [{
//             name: "单反"
//         },{
//             name: "拍立得"
//         }]
//     },{
//         name: "数码配件",
//         category3: [{
//             name: "滤镜"
//         },{
//             name: "存储卡"
//         }]
//     },]
// },{
//     name: "厨具",
//     category2:[{
//         name: "烹饪锅具",
//         category3: [{
//             name: "炒锅"
//         },{
//             name: "压力锅"
//         }]
//     },{
//         name: "厨房配件",
//         category3: [{
//             name: "饭盒"
//         },{
//             name: "保鲜盒"
//         }]
//     },]
// },{
//     name: "母婴",
//     category2:[{
//         name: "营养辅食",
//         category3: [{
//             name: "初乳"
//         },{
//             name: "维生素"
//         }]
//     },{
//         name: "妈妈专区",
//         category3: [{
//             name: "护肤"
//         },{
//             name: "孕妈装"
//         }]
//     },]
// },{
//     name: "零食",
//     category2:[{
//         name: "休闲食品",
//         category3: [{
//             name: "坚果"
//         },{
//             name: "巧克力"
//         }]
//     },{
//         name: "地方特产",
//         category3: [{
//             name: "山西"
//         },{
//             name: "内蒙古"
//         }]
//     },]
// }];
// shopCategoryModel.create(init).then((err,docs)=>{
//     console.log(docs);
// })


const site = {
    totalVisit: 100,
    swiperList:["https://vkceyugu.cdn.bspapp.com/VKCEYUGU-764647c8-fd81-4a31-845f-c0bf285f2096/5d89da47-ebad-40f0-8f08-f62c31df931d.png",
    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-764647c8-fd81-4a31-845f-c0bf285f2096/6cd014b7-655e-47f4-a831-e544b2ca64c2.png",
    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-764647c8-fd81-4a31-845f-c0bf285f2096/9b41012d-9acf-4999-8f07-c86a420dc5d4.png",
    "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-764647c8-fd81-4a31-845f-c0bf285f2096/b7d71dd1-0a49-4173-9593-1fe4b80ea69d.png"],
    advertisment: ["毕业季精彩纷呈！","百亿补贴，抢品质好物！","预购享千元折扣！","最高100期免息！"],
    hotTop:[],
    followMe:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-764647c8-fd81-4a31-845f-c0bf285f2096/eed6c246-0c8a-4d40-9ea6-0c5cdc61a389.png"
}

msgModel.create(site).then((err,doc)=>{
    console.log(err);
})