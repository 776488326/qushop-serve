const mongoose = require('../../utils/DBConnection');

const roleSchema = new mongoose.Schema({
    roleName: String,
    authorityList: [
    ],
    routes:[],
    buttons:[]
});

const roleModel = mongoose.model("roles", roleSchema);

module.exports = roleModel;


[
    {
        "deleted": false,
        "pid": null,
        "name": "全部权限",
        "code": null,
        "toCode": null,
        "type": 1,
        "status": null,
        "level": 1,
        "children": [
            {
                "deleted": false,
                "pid": null,
                "name": "商品管理",
                "code": null,
                "toCode": null,
                "type": 1,
                "status": null,
                "level": 2,
                "children": [
                    {
                        "deleted": false,
                        "pid": null,
                        "name": "品牌管理",
                        "code": null,
                        "toCode": null,
                        "type": 1,
                        "status": null,
                        "level": 3,
                        "children": [],
                        "select": false
                    }
                ],
                "select": false
            }
        ],
        "select": false
    }
]

